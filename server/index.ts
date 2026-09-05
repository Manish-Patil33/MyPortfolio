import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import apiRoutes from './routes/api.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const DEFAULT_PORT = parseInt(process.env.PORT || '5000', 10);

// Security & Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request Logger
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// API Routes
app.use('/api', apiRoutes);

// Root Endpoint
app.get('/', (_req, res) => {
  res.json({
    message: 'Welcome to Manish Patil Portfolio Backend API',
    endpoints: {
      health: '/api/health',
      profile: '/api/profile',
      projects: '/api/projects',
      contact: 'POST /api/contact',
    },
  });
});

// Start Server with Graceful Port Fallback
const startServer = (port: number) => {
  const server = app
    .listen(port, () => {
      console.log(`==================================================`);
      console.log(`⚡ Portfolio Backend API running on port ${port}`);
      console.log(`⚡ Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`⚡ Health Check: http://localhost:${port}/api/health`);
      console.log(`==================================================`);
    })
    .on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        console.warn(`⚠️ Port ${port} is occupied. Attempting next port ${port + 1}...`);
        startServer(port + 1);
      } else {
        console.error('Server error:', err);
      }
    });
};

startServer(DEFAULT_PORT);
