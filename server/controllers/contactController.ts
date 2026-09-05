import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../data');
const MESSAGES_FILE = path.join(DATA_DIR, 'contact_messages.json');

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
  ipAddress?: string;
}

// Helper to ensure data file exists
const ensureDataFile = () => {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(MESSAGES_FILE)) {
    fs.writeFileSync(MESSAGES_FILE, JSON.stringify([], null, 2), 'utf-8');
  }
};

// Helper to read messages
export const getStoredMessages = (): ContactSubmission[] => {
  ensureDataFile();
  try {
    const data = fs.readFileSync(MESSAGES_FILE, 'utf-8');
    return JSON.parse(data || '[]');
  } catch {
    return [];
  }
};

// Helper to save a message
const saveMessage = (submission: ContactSubmission) => {
  const messages = getStoredMessages();
  messages.unshift(submission); // newest first
  fs.writeFileSync(MESSAGES_FILE, JSON.stringify(messages, null, 2), 'utf-8');
};

export const submitContactForm = async (req: Request, res: Response) => {
  // Validate request inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed. Please check your inputs.',
      errors: errors.array(),
    });
  }

  const { name, email, subject, message } = req.body;

  try {
    const newSubmission: ContactSubmission = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      ipAddress: req.ip || req.socket.remoteAddress,
    };

    // 1. Save to JSON database file server/data/contact_messages.json
    saveMessage(newSubmission);

    // 2. Log submission securely to server console
    console.log(`==================================================`);
    console.log(`📥 [NEW CONTACT MESSAGE RECEIVED]`);
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log(`Saved to: ${MESSAGES_FILE}`);
    console.log(`==================================================`);

    return res.status(200).json({
      success: true,
      message: 'Thank you for reaching out! Your message has been saved successfully.',
      timestamp: newSubmission.timestamp,
    });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      success: false,
      message: 'An internal server error occurred. Please try again later.',
    });
  }
};

// GET /api/contact/messages - Endpoint to view all saved messages
export const getMessagesController = (_req: Request, res: Response) => {
  try {
    const messages = getStoredMessages();
    return res.status(200).json({
      success: true,
      totalMessages: messages.length,
      messages,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Failed to retrieve stored messages.',
    });
  }
};
