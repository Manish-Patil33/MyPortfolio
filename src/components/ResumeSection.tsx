import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, CheckCircle2, Printer, ExternalLink, Sparkles, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface ResumeSectionProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ isOpen, onClose, onOpen }) => {
  const { personalInfo, education, experiences, skills } = PORTFOLIO_DATA;

  const handleDownload = () => {
    // Triggers print/download view
    window.print();
  };

  return (
    <>
      {/* Inline Dedicated Resume Section */}
      <section className="py-24 relative z-10 bg-background/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Background Glow Flare */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="space-y-4 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>OFFICIAL CURRICULUM VITAE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Review & Download <span className="gradient-text">Complete Resume</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Access the full formatted resume of Manish Patil, detailing education at Sanjivani University, AWS Cloud Trainee experience, Machine Learning internships, Hackathon wins, and complete technical skill set.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={onOpen}
                  className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Full Resume</span>
                </button>

                <button
                  onClick={handleDownload}
                  className="px-6 py-3.5 rounded-xl glass-panel hover:bg-white/10 text-foreground font-semibold text-sm border border-white/10 hover:border-cyan-500/50 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-cyan-400" />
                  <span>Download / Print PDF</span>
                </button>
              </div>
            </div>

            {/* Document Preview Card Mockup */}
            <div
              onClick={onOpen}
              className="w-full lg:w-80 h-96 glass-panel rounded-2xl border border-white/15 p-6 shadow-2xl relative cursor-pointer group hover:border-cyan-500/40 transition-all overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="font-mono text-xs font-bold text-cyan-400">MANISH PATIL</span>
                  <span className="text-[10px] font-mono text-muted-foreground">PDF preview</span>
                </div>
                <p className="text-[11px] font-mono text-slate-300">
                  Artificial Intelligence & Machine Learning Student
                </p>
                <div className="space-y-1.5 text-[10px] text-muted-foreground">
                  <p>• B.Tech AI & ML - Sanjivani University</p>
                  <p>• Cloud Computing Trainee - Techgnowroth</p>
                  <p>• Machine Learning Intern - Syntexhub</p>
                  <p>• AdaptAI Hackathon Winner</p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono text-center group-hover:bg-cyan-500 group-hover:text-slate-950 font-bold transition-all">
                Click to Open Viewer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Full Resume Preview Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl glass-card rounded-2xl border border-white/20 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col bg-slate-900 text-slate-100">
            {/* Modal Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-slate-950">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-cyan-400" />
                <div>
                  <h3 className="font-bold text-lg text-foreground">{personalInfo.name} - Resume</h3>
                  <p className="text-xs font-mono text-muted-foreground">{personalInfo.email} • {personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleDownload}
                  className="px-3.5 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-xs font-mono font-semibold transition-all flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl glass-panel text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Body (Printable Resume Template) */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-6 font-sans text-sm text-slate-200 bg-slate-950/60 leading-relaxed">
              {/* Header Info */}
              <div className="text-center pb-6 border-b border-white/10 space-y-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">{personalInfo.name}</h1>
                <p className="text-cyan-400 font-mono text-xs">{personalInfo.email} | {personalInfo.phone} | {personalInfo.location}</p>
                <p className="text-xs text-slate-400 font-mono pt-1">
                  LinkedIn: {personalInfo.socialLinks.linkedin} | GitHub: {personalInfo.socialLinks.github}
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 border-b border-cyan-500/30 mb-3">
                  EDUCATION
                </h2>
                <div className="space-y-3">
                  {education.map((edu) => (
                    <div key={edu.id} className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-white text-sm">{edu.degree}</h3>
                        <p className="text-xs text-slate-300">{edu.institution}, {edu.location}</p>
                      </div>
                      <span className="text-xs font-mono text-slate-400">{edu.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 border-b border-cyan-500/30 mb-3">
                  EXPERIENCE & INTERNSHIP
                </h2>
                <div className="space-y-4">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="space-y-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-white text-sm">{exp.role} | {exp.organization}</h3>
                        </div>
                        <span className="text-xs font-mono text-slate-400">{exp.duration}</span>
                      </div>
                      <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pl-1">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i}>{r}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 border-b border-cyan-500/30 mb-3">
                  PROJECTS
                </h2>
                <div className="space-y-3">
                  {PORTFOLIO_DATA.projects.map((proj) => (
                    <div key={proj.id} className="space-y-1">
                      <div className="flex justify-between items-baseline">
                        <h3 className="font-bold text-white text-sm">
                          {proj.title} {proj.badge ? `(${proj.badge})` : ''}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-300"><strong className="text-slate-200">Objective:</strong> {proj.objective}</p>
                      <p className="text-xs text-slate-300"><strong className="text-slate-200">Implementation:</strong> {proj.implementation}</p>
                      <p className="text-xs font-mono text-cyan-300">Technologies: {proj.technologies.join(', ')}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 pb-1 border-b border-cyan-500/30 mb-3">
                  CERTIFICATIONS & ACTIVITIES
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {PORTFOLIO_DATA.certifications.map((c) => (
                    <p key={c.id} className="text-slate-300">• <strong>{c.title}</strong> - {c.issuer}</p>
                  ))}
                  {PORTFOLIO_DATA.achievements.map((a) => (
                    <p key={a.id} className="text-slate-300">• <strong>{a.title}</strong> ({a.issuer})</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
