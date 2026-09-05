import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Languages, Brain, Cpu, ShieldCheck, CheckCircle2, GraduationCap, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const About: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 relative z-10 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Architecting <span className="gradient-text">Intelligent Systems</span> & Web Tech
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: 3D Animated Profile Card with User Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <motion.div
              whileHover={{ y: -6, rotateX: 2, rotateY: -3 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden group border border-white/10 hover:border-cyan-500/50 transition-all duration-300 shadow-2xl shadow-cyan-950/20"
            >
              {/* Background Glow Effect */}
              <div className="absolute -top-24 -right-24 w-56 h-56 bg-cyan-500/20 rounded-full blur-3xl group-hover:bg-cyan-500/35 transition-all duration-500 pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-purple-500/15 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-500 pointer-events-none" />

              {/* 3D Animated Profile Photo Frame */}
              <div className="relative mb-6 rounded-2xl overflow-hidden p-[2px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 shadow-xl group-hover:shadow-cyan-500/30 transition-all duration-300">
                <div className="relative w-full h-80 sm:h-96 rounded-[14px] overflow-hidden bg-slate-950">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter contrast-105"
                  />
                  {/* Subtle Glass Gradient Overlay at base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Badge overlay on image */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl glass-panel border border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold tracking-wider">{personalInfo.name}</span>
                    <span className="px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 text-[10px] border border-cyan-500/30">
                      AI & Full-Stack
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Meta & Strengths */}
              <div className="space-y-3 pt-2 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Location:
                  </span>
                  <span className="text-foreground font-semibold">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Languages className="w-3.5 h-3.5 text-purple-400" /> Languages:
                  </span>
                  <span className="text-foreground font-semibold">
                    {personalInfo.languages.join(', ')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <Brain className="w-3.5 h-3.5 text-emerald-400" /> Strengths:
                  </span>
                  <span className="text-foreground font-semibold">
                    {personalInfo.strengths.join(' • ')}
                  </span>
                </div>
              </div>

              {/* Hackathon Winner Banner */}
              <div className="mt-5 p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs text-cyan-200/90 leading-relaxed">
                  Winner of regional Hackathon for engineering <strong>AdaptAI</strong>, a dynamic context-aware machine learning system.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Technical Statement & Competencies */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p className="text-foreground font-medium text-lg">
                I am a dedicated Artificial Intelligence & Machine Learning student at Sanjivani University with hands-on technical experience in AWS cloud infrastructure and machine learning model development.
              </p>
              <p>
                My background includes Cloud Computing training at Techgnowroth Software Solution, Pune, and Machine Learning internship experience at Syntexhub, delivering model processing modules and Linux administration tasks.
              </p>
              <p>
                Whether building AI algorithms for hackathons, computer vision security pipelines for IoT door locks, or native Android applications, I prioritize performance, secure DBMS logic, and clean code architecture.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl glass-panel border border-white/5 hover:border-cyan-500/30 transition-all">
                <Cpu className="w-6 h-6 text-cyan-400 mb-2" />
                <h4 className="font-bold text-sm text-foreground mb-1">AI & ML Pipelines</h4>
                <p className="text-xs text-muted-foreground">Model training, Computer Vision & Contextual AI</p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/5 hover:border-purple-500/30 transition-all">
                <GraduationCap className="w-6 h-6 text-purple-400 mb-2" />
                <h4 className="font-bold text-sm text-foreground mb-1">Cloud & DevOps</h4>
                <p className="text-xs text-muted-foreground">AWS Services, Linux Administration & Jenkins</p>
              </div>

              <div className="p-4 rounded-2xl glass-panel border border-white/5 hover:border-emerald-500/30 transition-all">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-2" />
                <h4 className="font-bold text-sm text-foreground mb-1">Full-Stack & Mobile</h4>
                <p className="text-xs text-muted-foreground">React, Java, Python, Android SDK & DBMS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
