import React from 'react';
import { ChevronUp, Linkedin, Github, Mail, Terminal, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface FooterProps {
  openTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ openTerminal }) => {
  const { personalInfo } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-white/10 pt-16 pb-12 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
                  MP
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Internships & Full-Stack Projects</span>
            </div>
          </div>

          {/* Quick Links & Easter Egg */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
              Developer Utilities
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button
                  onClick={openTerminal}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>CLI Terminal (Ctrl+K)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={openTerminal}
                  className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-300"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>sudo make-it-awesome</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                aria-label="Open Gmail"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Manish Patil. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="px-3.5 py-2 rounded-xl glass-panel hover:bg-white/10 hover:text-cyan-400 transition-all flex items-center gap-1.5 text-xs text-slate-300"
          >
            <span>Back to top</span>
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
