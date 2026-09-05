# Manish Patil - Full-Stack Developer & AI Specialist Portfolio

A highly professional, modern, and visually impressive full-stack portfolio website built for **Manish Patil** based strictly on his resume credentials (Artificial Intelligence & Machine Learning student at Sanjivani University, AWS Cloud Computing Trainee, Syntexhub ML Intern, and Regional Hackathon Winner).

![Portfolio Preview](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Three.js%20%7C%20Express-06b6d4?style=for-the-badge)
![Hackathon Winner](https://img.shields.io/badge/Achievement-AdaptAI%20Hackathon%20Winner-amber500?style=for-the-badge)

---

## 🌟 Key Features

- **3D Interactive Hero Canvas**: Built with React Three Fiber (`@react-three/fiber` & `@react-three/drei`) featuring an interactive distorted wireframe AI sphere, orbiting nodes, particle cloud, and mouse parallax interaction. Respects `prefers-reduced-motion` and includes WebGL support detection fallback.
- **Strictly Grounded Content**: Every detail (B.Tech at Sanjivani University, Amrutvahini Polytechnic IT, AWS Cloud Trainee at Techgnowroth, ML Intern at Syntexhub, AdaptAI, Smart Door Lock IoT, QR Code Generator Android App, Blogging Website) is sourced directly from Manish Patil's resume with **zero** invented facts.
- **Centralized Data Layer (`src/data/portfolio.ts`)**: Allows updating all portfolio information (personal info, projects, skills, education, experience, certifications) without modifying UI component logic.
- **Case Study Detail Modals**: Click any project to open an in-depth case study drawer breaking down Objectives, Solution Architecture, Key Features, Tech Stack, and Verified Outcomes.
- **Express Backend REST API**: Full-stack Node.js/Express server delivering `/api/contact`, `/api/projects`, `/api/profile`, and `/api/health` with strict input sanitization and validation (`express-validator`).
- **Interactive Developer CLI Easter Egg**: Triggered via `Ctrl+K` or footer links (`sudo make-it-awesome`), providing an interactive terminal for tech recruiters to run commands like `help`, `bio`, `skills`, `projects`, `contact`, `matrix`, `clear`.
- **Theme Persistence**: Light and Dark Mode switcher persisted in `localStorage` with Dark Mode default.
- **Custom Desktop Cursor**: Interactive dot and trailing ring follower expanding on hover over clickable elements (automatically disabled on touch devices).
- **Interactive Timelines**: Vertical timeline for Work & Internship Experience and card-based Education timeline.
- **Interactive Contact Form**: Frontend validation + Express REST API integration + confetti explosion celebration on successful submission.
- **Full Responsiveness & SEO**: Optimized meta tags, OpenGraph tags, semantic HTML5 tags, keyboard navigation, and ARIA attributes.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript + Vite 5
- **Styling**: Tailwind CSS (Glassmorphism, custom theme colors, glow utilities)
- **3D Graphics**: Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`)
- **Animations**: Framer Motion, Canvas Confetti
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Server Framework**: Express.js
- **Architecture**: REST API (`/api/contact`, `/api/projects`, `/api/profile`, `/api/health`)
- **Security & Validation**: `express-validator`, CORS handling, input sanitization

---

## 📁 Project Structure

```text
Portfolio/
├── index.html               # Main HTML entry point with Google Fonts & SEO meta
├── package.json             # Full-stack dependencies & scripts
├── vite.config.ts           # Vite config with API proxy & path aliases
├── tailwind.config.js       # Custom theme variables, glow shadows, animations
├── postcss.config.js        # PostCSS setup for Tailwind CSS
├── tsconfig.json            # TypeScript setup
├── .env                     # Environment variables
├── .env.example             # Environment template
│
├── server/                  # Backend Express REST API
│   ├── index.ts             # Express server entry point
│   ├── routes/
│   │   └── api.ts           # REST endpoints (/api/contact, /api/health, etc.)
│   └── controllers/
│       └── contactController.ts # Input validation & contact submission logic
│
└── src/                     # Frontend React Application
    ├── main.tsx             # React DOM root
    ├── App.tsx              # Main App layout & theme manager
    ├── index.css            # Tailwind directives, CSS variables & glass panel styles
    ├── data/
    │   └── portfolio.ts     # SINGLE SOURCE OF TRUTH for resume data
    └── components/
        ├── CustomCursor.tsx     # Smooth desktop mouse tracker
        ├── ThreeScene.tsx       # R3F 3D interactive hero canvas
        ├── Navbar.tsx           # Sticky glassmorphic navbar & progress bar
        ├── Hero.tsx             # Hero section with headline & CTA buttons
        ├── About.tsx            # Profile card & academic highlights
        ├── Skills.tsx           # Categorized skill badges & filters
        ├── Projects.tsx         # Filterable project cards & case study triggers
        ├── ProjectModal.tsx     # Full project case study drawer
        ├── Experience.tsx       # Interactive vertical experience timeline
        ├── Education.tsx        # Education timeline cards
        ├── Certifications.tsx   # Industry certificates & hackathon trophies
        ├── ResumeSection.tsx    # PDF resume previewer & printer
        ├── Contact.tsx          # Contact form with backend validation & confetti
        ├── EasterEggTerminal.tsx# Interactive CLI terminal (Ctrl+K)
        └── Footer.tsx           # Minimalist footer & back-to-top button
```

---

## ⚙️ Installation & Development

### Prerequisites
- Node.js LTS (v18+ or v24+)
- npm or yarn

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create `.env` file in the root directory (refer to `.env.example`):
```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

### 3. Run Development Mode
Launches both the Express backend API (`http://localhost:5000`) and the Vite React client (`http://localhost:3000`) concurrently:
```bash
npm run dev
```

Or run frontend and backend individually:
```bash
# Frontend dev server (Port 3000)
npm run client

# Backend API server (Port 5000)
npm run server
```

---

## 🚀 Building & Production

### 1. Type Check & Production Build
```bash
npm run build
```

### 2. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Update Portfolio Content

All personal details, experiences, projects, skills, education, and certifications are stored in a centralized file:
**`src/data/portfolio.ts`**

To update your portfolio:
1. Open `src/data/portfolio.ts`.
2. Edit the relevant array or object (e.g. `PORTFOLIO_DATA.projects` or `PORTFOLIO_DATA.skills`).
3. Save the file. The UI will automatically update everywhere!

---

## 🌐 Deployment Instructions

- **Frontend (Vercel / Netlify)**: Connect your repository to Vercel or Netlify. Set the build command to `npm run build` and output directory to `dist`.
- **Backend (Render / Railway / Vercel Serverless)**: Deploy the `server/` directory or run `npm run server` on Render/Railway with environment variable `PORT`.

---

## 📄 License & Credits

Created for **Manish Patil**. All rights reserved.
