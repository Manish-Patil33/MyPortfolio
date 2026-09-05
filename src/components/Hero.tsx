import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Github, Linkedin, Award, ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ThreeScene } from './ThreeScene';

interface HeroProps {
  onOpenResume: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNavigate }) => {
  const { personalInfo } = PORTFOLIO_DATA;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* 3D R3F Interactive Canvas */}
      <ThreeScene />

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Hackathon Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]"
        >
          <Award className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span>Regional Hackathon Winner & AI Enthusiast</span>
        </motion.div>

        {/* Name Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4"
        >
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </motion.h1>

        {/* Dynamic Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/90 max-w-3xl mb-6 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Factual Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-8 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10"
        >
          <button
            onClick={() => onNavigate('projects')}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenResume}
            className="px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-foreground font-semibold text-sm border border-white/10 hover:border-cyan-500/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </button>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-foreground font-semibold text-sm border border-white/10 hover:border-purple-500/50 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 text-muted-foreground"
        >
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-panel hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-panel hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-panel hover:text-cyan-400 hover:border-cyan-500/50 hover:scale-110 transition-all"
            aria-label="Send Gmail"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Animated Scroll Indicator */}
        <motion.button
          onClick={() => onNavigate('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-14 flex flex-col items-center gap-2 text-xs font-mono text-muted-foreground hover:text-cyan-400 transition-colors group cursor-pointer"
        >
          <span>SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-cyan-400" />
        </motion.button>
      </div>
    </section>
  );
};
