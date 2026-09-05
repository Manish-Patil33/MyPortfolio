import React from 'react';
import { X, Trophy, CheckCircle, Cpu, Layers, ExternalLink, Github, Sparkles } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl glass-card rounded-3xl border border-white/15 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col bg-slate-950">
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between bg-white/5 relative">
          <div className="space-y-2 pr-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-mono border border-cyan-500/30">
                {project.category}
              </span>
              {project.badge && (
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono border border-amber-500/30 flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.badge}</span>
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">{project.title}</h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl glass-panel text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors shrink-0"
            aria-label="Close Case Study"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm sm:text-base leading-relaxed">
          {/* Objective & Overview */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> 1. Project Objective & Overview
            </h4>
            <p className="text-foreground/90 bg-white/5 p-4 rounded-xl border border-white/5">
              {project.objective}
            </p>
          </div>

          {/* Implementation & Solution */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-purple-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> 2. Implementation & Solution Architecture
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {project.implementation}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" /> 3. Key Technical Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-start gap-2.5"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-foreground/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-2">
              <Layers className="w-4 h-4" /> 4. Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results & Outcome */}
          {project.results && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
              <h5 className="font-mono text-xs font-bold uppercase text-emerald-400">Verified Outcome / Impact</h5>
              <p className="text-xs sm:text-sm text-emerald-200">{project.results}</p>
            </div>
          )}
        </div>

        {/* Modal Footer Links */}
        <div className="p-6 border-t border-white/10 bg-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-foreground text-xs font-mono font-semibold transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-mono font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live App</span>
              </a>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold glass-panel hover:bg-white/10 text-foreground transition-all"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
            >
              Discuss Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
