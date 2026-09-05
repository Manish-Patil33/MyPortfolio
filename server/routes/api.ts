import { Router, Request, Response } from 'express';
import { body } from 'express-validator';
import { submitContactForm, getMessagesController } from '../controllers/contactController.js';

const router = Router();

// GET /api/health
router.get('/health', (_req: Request, res: Response) => {
  res.status(200).json({
    status: 'ok',
    service: 'Manish Patil Portfolio API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// GET /api/profile
router.get('/profile', (_req: Request, res: Response) => {
  res.status(200).json({
    name: 'Manish Patil',
    title: 'Full-Stack Developer & AI/ML Engineer',
    email: 'mp8449729@gmail.com',
    phone: '8329790084',
    location: 'Chalisgaon, Maharashtra, India',
    linkedin: 'https://www.linkedin.com/in/manish-patil-4a440029a',
    github: 'https://github.com/manishpatil',
    hackerrank: 'https://www.hackerrank.com/profile/mp8449729',
    education: [
      {
        degree: 'B. Tech - Artificial Intelligence & Machine Learning',
        institution: 'Sanjivani University',
        location: 'Kopargaon, India',
        duration: '2025 - 2028',
      },
      {
        degree: 'Polytechnic - Information Technology',
        institution: 'Amrutvahini Polytechnic',
        location: 'Sangamner, India',
        duration: '2023 - 2025',
      },
      {
        degree: 'Secondary School Certificate (10th)',
        institution: 'Dr. Ram Manohar Lohiya M. V. Bambrud',
        location: 'Pachora, India',
        duration: '2022',
      },
    ],
  });
});

// GET /api/projects
router.get('/projects', (_req: Request, res: Response) => {
  res.status(200).json([
    {
      id: 'adaptai',
      title: 'AdaptAI',
      badge: 'Hackathon Winning Project',
      category: 'AI & ML',
      description: 'An intelligent, adaptive AI application that dynamically processes data and provides context-aware solutions.',
      technologies: ['Python', 'Machine Learning', 'Web Technologies'],
    },
    {
      id: 'smart-door-lock',
      title: 'Smart Door Lock System Using IoT',
      category: 'Cloud & IoT',
      description: 'AI-driven smart door lock system leveraging computer vision and IoT technologies for real-time security.',
      technologies: ['IoT', 'Computer Vision', 'Facial Recognition', 'Artificial Intelligence (AI)'],
    },
    {
      id: 'qr-code-generator',
      title: 'QR Code Generator Android Application',
      category: 'Mobile App',
      description: 'Native, memory-efficient Android application for dynamic, on-demand QR code generation.',
      technologies: ['Java', 'Android SDK (MAD)', 'Mobile App Development'],
    },
    {
      id: 'blogging-website',
      title: 'Blogging Website',
      category: 'Full-Stack Web',
      description: 'Dynamic web-based blogging platform supporting end-to-end CRUD operations for seamless content management.',
      technologies: ['Java', 'Python', 'SQL', 'DBMS', 'Full-Stack Web Development'],
    },
  ]);
});

// GET /api/contact/messages - Endpoint to read received contact form submissions
router.get('/contact/messages', getMessagesController);

// POST /api/contact - Submit contact form
router.post(
  '/contact',
  [
    body('name').trim().notEmpty().withMessage('Name is required.').escape(),
    body('email').isEmail().withMessage('Please provide a valid email address.').normalizeEmail(),
    body('subject').trim().notEmpty().withMessage('Subject is required.').escape(),
    body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters long.').escape(),
  ],
  submitContactForm
);

export default router;
