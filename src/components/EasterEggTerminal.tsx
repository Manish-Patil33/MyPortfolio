import React, { useState, useRef, useEffect } from 'react';
import {
  Terminal as TerminalIcon,
  X,
  FileText,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  FolderGit2,
  User,
  Code2,
  Sparkles,
  Mail,
  Zap,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolio';

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
  onNavigate?: (id: string) => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const EasterEggTerminal: React.FC<TerminalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  onNavigate,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1.5 text-xs font-mono text-cyan-300">
          <p className="text-emerald-400 font-bold flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-amber-400" /> Manish Patil Interactive Developer Terminal [v2.0.0]
          </p>
          <p>Type <span className="text-amber-300 font-bold">help</span> to list all commands or click shortcut chips above.</p>
          <p className="text-slate-400 text-[11px]">
            Shortcuts available: <span className="text-cyan-400 font-semibold">resume</span>, <span className="text-cyan-400 font-semibold">certification</span>, <span className="text-cyan-400 font-semibold">project</span>, <span className="text-cyan-400 font-semibold">internship</span>, <span className="text-cyan-400 font-semibold">experience</span>, <span className="text-cyan-400 font-semibold">education</span>, <span className="text-cyan-400 font-semibold">skills</span>, <span className="text-cyan-400 font-semibold">contact</span>
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const runCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="text-xs font-mono space-y-1.5 text-slate-300">
            <p className="text-cyan-400 font-bold flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Available CLI Commands & Shortcuts:
            </p>
            <p><span className="text-amber-400 font-bold">resume</span> <span className="text-slate-500">(or reume, cv)</span> - Open & view professional resume details</p>
            <p><span className="text-amber-400 font-bold">certification</span> <span className="text-slate-500">(or certs, cert)</span> - View NPTEL, IBM, Swayam & Cloud certs</p>
            <p><span className="text-amber-400 font-bold">project</span> <span className="text-slate-500">(or projects, proj)</span> - View AdaptAI, IoT Smart Lock & hackathon apps</p>
            <p><span className="text-amber-400 font-bold">internship</span> <span className="text-slate-500">(or internships, intern)</span> - View Syntexhub ML & Cloud internships</p>
            <p><span className="text-amber-400 font-bold">experience</span> <span className="text-slate-500">(or exp, work)</span> - List full work experience history</p>
            <p><span className="text-amber-400 font-bold">education</span> <span className="text-slate-500">(or edu, academic)</span> - View B.Tech, Polytechnic & school history</p>
            <p><span className="text-amber-400 font-bold">skills</span> <span className="text-slate-500">(or skill, tech)</span> - List programming languages, cloud & AI stack</p>
            <p><span className="text-amber-400 font-bold">contact</span> <span className="text-slate-500">(or email, social)</span> - Email, phone & direct profiles</p>
            <p><span className="text-amber-400 font-bold">bio</span> <span className="text-slate-500">(or about)</span> - Print concise professional summary</p>
            <p><span className="text-amber-400 font-bold">sudo make-it-awesome</span> - Launch easter egg confetti celebration</p>
            <p><span className="text-amber-400 font-bold">clear</span> - Clear terminal logs</p>
            <p><span className="text-amber-400 font-bold">exit</span> - Close terminal window (or press Esc)</p>
          </div>
        );
        break;

      case 'resume':
      case 'reume':
      case 'cv':
        outputNode = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-cyan-400" /> MANISH PATIL - PROFESSIONAL RESUME OVERVIEW
            </p>
            <p><strong className="text-amber-300">Title:</strong> {PORTFOLIO_DATA.personalInfo.title}</p>
            <p><strong className="text-amber-300">Summary:</strong> {PORTFOLIO_DATA.personalInfo.summary}</p>
            <p><strong className="text-amber-300">Education:</strong> B.Tech in AI & ML (Sanjivani University) | Diploma IT</p>
            <p><strong className="text-amber-300">Key Projects:</strong> AdaptAI (Hackathon Winner), Smart IoT Lock, QR Code App, Full-Stack Blog</p>
            <p><strong className="text-amber-300">Experience:</strong> Cloud Computing Trainee (Techgnowroth) & ML Intern (Syntexhub)</p>
            <div className="flex flex-wrap gap-2 pt-1">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-2.5 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 rounded-lg text-[11px] flex items-center gap-1 transition-all"
                >
                  <FileText className="w-3 h-3" /> View Interactive Resume Modal
                </button>
              )}
              {onNavigate && (
                <button
                  onClick={() => {
                    onNavigate('resume');
                    onClose();
                  }}
                  className="px-2.5 py-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 rounded-lg text-[11px] flex items-center gap-1 transition-all"
                >
                  <ExternalLink className="w-3 h-3" /> Scroll to Resume Section
                </button>
              )}
            </div>
          </div>
        );
        break;

      case 'certification':
      case 'certifications':
      case 'certs':
      case 'cert':
        outputNode = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" /> CERTIFICATIONS & CREDENTIALS ({PORTFOLIO_DATA.certifications.length})
            </p>
            {PORTFOLIO_DATA.certifications.map((c) => (
              <div key={c.id} className="pl-2.5 border-l-2 border-cyan-500/40 space-y-0.5">
                <p className="text-amber-300 font-semibold">• {c.title} <span className="text-slate-400 font-normal">({c.issuer})</span></p>
                <p className="text-slate-400 text-[11px]">{c.description}</p>
              </div>
            ))}
            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('certifications');
                  onClose();
                }}
                className="mt-1 px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-lg text-[11px] inline-flex items-center gap-1 transition-all"
              >
                <ExternalLink className="w-3 h-3" /> View Certifications Section
              </button>
            )}
          </div>
        );
        break;

      case 'internship':
      case 'internships':
      case 'intern':
        const internships = PORTFOLIO_DATA.experiences.filter(
          (exp) => exp.type === 'Internship' || exp.role.toLowerCase().includes('intern')
        );
        outputNode = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-emerald-400" /> INTERNSHIP EXPERIENCES
            </p>
            {internships.map((item) => (
              <div key={item.id} className="pl-2.5 border-l-2 border-emerald-500/40 space-y-0.5">
                <p className="text-emerald-300 font-semibold">• {item.role} @ {item.organization}</p>
                <p className="text-slate-400 text-[11px]">Duration: {item.duration} | Location: {item.location}</p>
                <p className="text-slate-300 text-[11px]">Tech Stack: {item.technologies.join(', ')}</p>
                {item.responsibilities.map((r, i) => (
                  <p key={i} className="text-slate-400 text-[11px] pl-2">↳ {r}</p>
                ))}
              </div>
            ))}
            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('experience');
                  onClose();
                }}
                className="mt-1 px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 rounded-lg text-[11px] inline-flex items-center gap-1 transition-all"
              >
                <ExternalLink className="w-3 h-3" /> Go to Experience & Internships
              </button>
            )}
          </div>
        );
        break;

      case 'experience':
      case 'exp':
      case 'work':
        outputNode = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-purple-400" /> WORK & INTERNSHIP EXPERIENCE ({PORTFOLIO_DATA.experiences.length})
            </p>
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div key={exp.id} className="pl-2.5 border-l-2 border-purple-500/40 space-y-0.5">
                <p className="text-purple-300 font-semibold">
                  • {exp.role} @ {exp.organization} <span className="text-[10px] text-amber-400 border border-amber-400/30 rounded px-1 ml-1">{exp.type}</span>
                </p>
                <p className="text-slate-400 text-[11px]">{exp.duration} | {exp.location}</p>
                <p className="text-slate-300 text-[11px]">Tech Stack: {exp.technologies.join(', ')}</p>
              </div>
            ))}
            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('experience');
                  onClose();
                }}
                className="mt-1 px-2.5 py-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 border border-purple-500/40 rounded-lg text-[11px] inline-flex items-center gap-1 transition-all"
              >
                <ExternalLink className="w-3 h-3" /> Scroll to Experience Section
              </button>
            )}
          </div>
        );
        break;

      case 'project':
      case 'projects':
      case 'proj':
        outputNode = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold flex items-center gap-1.5">
              <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" /> FEATURED PROJECTS ({PORTFOLIO_DATA.projects.length})
            </p>
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="pl-2.5 border-l-2 border-cyan-500/40 space-y-0.5">
                <p className="text-cyan-300 font-semibold">
                  • {p.title} {p.badge && <span className="text-amber-300 text-[10px] bg-amber-500/20 border border-amber-400/40 rounded px-1.5 py-0.5 ml-1">{p.badge}</span>}
                </p>
                <p className="text-slate-300 text-[11px]">{p.shortDescription}</p>
                <p className="text-slate-400 text-[11px]">Tech: {p.technologies.join(', ')}</p>
              </div>
            ))}
            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('projects');
                  onClose();
                }}
                className="mt-1 px-2.5 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 rounded-lg text-[11px] inline-flex items-center gap-1 transition-all"
              >
                <ExternalLink className="w-3 h-3" /> View All Projects Section
              </button>
            )}
          </div>
        );
        break;

      case 'education':
      case 'edu':
      case 'academic':
        outputNode = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" /> ACADEMIC EDUCATION HISTORY
            </p>
            {PORTFOLIO_DATA.education.map((edu) => (
              <div key={edu.id} className="pl-2.5 border-l-2 border-blue-500/40 space-y-0.5">
                <p className="text-blue-300 font-semibold">• {edu.degree}</p>
                <p className="text-slate-400 text-[11px]">{edu.institution} | {edu.duration}</p>
                {edu.details && <p className="text-slate-300 text-[11px]">{edu.details}</p>}
              </div>
            ))}
            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('education');
                  onClose();
                }}
                className="mt-1 px-2.5 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 border border-blue-500/40 rounded-lg text-[11px] inline-flex items-center gap-1 transition-all"
              >
                <ExternalLink className="w-3 h-3" /> View Education Section
              </button>
            )}
          </div>
        );
        break;

      case 'skills':
      case 'skill':
      case 'tech':
      case 'techstack':
        outputNode = (
          <div className="text-xs font-mono space-y-2 text-slate-300">
            <p className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" /> TECHNICAL SKILLS & STACK
            </p>
            {PORTFOLIO_DATA.skills.map((cat, idx) => (
              <div key={idx} className="pl-2 border-l-2 border-cyan-500/30">
                <p className="text-amber-300 font-medium">• {cat.title}:</p>
                <p className="text-cyan-200 text-[11px] pl-2">{cat.skills.map((s) => s.name).join(', ')}</p>
              </div>
            ))}
            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('skills');
                  onClose();
                }}
                className="mt-1 px-2.5 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 rounded-lg text-[11px] inline-flex items-center gap-1 transition-all"
              >
                <ExternalLink className="w-3 h-3" /> View Skills Matrix Section
              </button>
            )}
          </div>
        );
        break;

      case 'bio':
      case 'about':
        outputNode = (
          <div className="text-xs font-mono space-y-1.5 text-slate-300">
            <p className="text-cyan-400 font-bold flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-cyan-400" /> {PORTFOLIO_DATA.personalInfo.name} - BIO
            </p>
            <p className="text-amber-300 text-[11px] font-semibold">{PORTFOLIO_DATA.personalInfo.title}</p>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              {PORTFOLIO_DATA.personalInfo.summary}
            </p>
            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('about');
                  onClose();
                }}
                className="mt-1 px-2.5 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 rounded-lg text-[11px] inline-flex items-center gap-1 transition-all"
              >
                <ExternalLink className="w-3 h-3" /> View About Section
              </button>
            )}
          </div>
        );
        break;

      case 'contact':
      case 'email':
      case 'social':
        outputNode = (
          <div className="text-xs font-mono space-y-1.5 text-emerald-400">
            <p className="text-cyan-400 font-bold flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-400" /> CONTACT & SOCIAL PROFILES
            </p>
            <p>📧 Email: <a href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`} className="underline hover:text-cyan-300">{PORTFOLIO_DATA.personalInfo.email}</a></p>
            <p>📞 Phone: +91 {PORTFOLIO_DATA.personalInfo.phone}</p>
            <p>📍 Location: {PORTFOLIO_DATA.personalInfo.location}</p>
            <p>🔗 LinkedIn: <a href={PORTFOLIO_DATA.personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-cyan-300">{PORTFOLIO_DATA.personalInfo.socialLinks.linkedin}</a></p>
            <p>💻 GitHub: <a href={PORTFOLIO_DATA.personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="underline hover:text-cyan-300">{PORTFOLIO_DATA.personalInfo.socialLinks.github}</a></p>
            {onNavigate && (
              <button
                onClick={() => {
                  onNavigate('contact');
                  onClose();
                }}
                className="mt-1 px-2.5 py-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 rounded-lg text-[11px] inline-flex items-center gap-1 transition-all"
              >
                <ExternalLink className="w-3 h-3" /> Go to Contact Form
              </button>
            )}
          </div>
        );
        break;

      case 'sudo make-it-awesome':
      case 'make-it-awesome':
      case 'awesome':
      case 'confetti':
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#06b6d4', '#a855f7', '#10b981', '#f59e0b'],
        });
        outputNode = (
          <div className="text-xs font-mono text-amber-400 font-bold p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg">
            🎉 ACCESS GRANTED! Portfolio supercharged with 60fps animations, 3D WebGL scenes, and clean full-stack architecture!
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        onClose();
        return;

      default:
        outputNode = (
          <p className="text-xs font-mono text-red-400">
            Command not recognized: "{trimmed}". Type <span className="underline font-bold text-amber-300 cursor-pointer" onClick={() => runCommand('help')}>help</span> for commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: rawCmd, output: outputNode }]);
    setInputVal('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(inputVal);
  };

  const shortcutButtons = [
    { label: 'resume', command: 'resume' },
    { label: 'certification', command: 'certification' },
    { label: 'project', command: 'project' },
    { label: 'internship', command: 'internship' },
    { label: 'experience', command: 'experience' },
    { label: 'education', command: 'education' },
    { label: 'skills', command: 'skills' },
    { label: 'contact', command: 'contact' },
    { label: 'bio', command: 'bio' },
    { label: 'make-it-awesome', command: 'make-it-awesome' },
    { label: 'clear', command: 'clear' },
  ];

  return (
    <div className="fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-950 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
        {/* Terminal Header */}
        <div className="px-4 py-3 bg-slate-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono text-muted-foreground ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" /> manish@portfolio: control-panel
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick Shortcut Buttons Bar */}
        <div className="px-4 py-2 bg-slate-900/60 border-b border-white/5 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono no-scrollbar">
          <span className="text-muted-foreground flex items-center gap-1 shrink-0 font-semibold text-cyan-400 mr-1">
            <Sparkles className="w-3 h-3" /> Shortcuts:
          </span>
          {shortcutButtons.map((btn) => (
            <button
              key={btn.command}
              onClick={() => runCommand(btn.command)}
              className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 transition-all shrink-0 font-medium active:scale-95"
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Terminal Body */}
        <div className="p-4 overflow-y-auto flex-1 space-y-3 font-mono text-xs">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <span>guest@manish-patil:~$</span>
                <span className="text-foreground">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <form onSubmit={handleSubmit} className="p-3 bg-slate-900/80 border-t border-white/10 flex items-center gap-2 font-mono text-xs">
          <span className="text-cyan-400 font-bold">guest@manish-patil:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type a command (e.g. resume, certification, project, internship, experience)..."
            className="flex-1 bg-transparent text-foreground focus:outline-none placeholder:text-muted-foreground/40"
          />
        </form>
      </div>
    </div>
  );
};

