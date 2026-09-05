import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Server, Cpu, Check, Filter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skills.map((s) => s.title)];

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Web Development':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'Tools & Cloud Platforms':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Databases & DBMS':
        return <Database className="w-5 h-5 text-amber-400" />;
      case 'AI, ML & Domain Expertise':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      default:
        return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.title === selectedCategory);

  return (
    <section id="skills" className="py-24 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>02. TECHNICAL SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Verified Stack & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mt-2">
            Technological tools, languages, cloud platforms, and frameworks strictly verified from my resume.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 font-semibold scale-105'
                  : 'glass-panel text-muted-foreground hover:text-foreground hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group hover:shadow-xl hover:shadow-cyan-950/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-colors">
                  {getCategoryIcon(categoryGroup.title)}
                </div>
                <h3 className="font-bold text-lg text-foreground">{categoryGroup.title}</h3>
              </div>

              {/* Skills Badge Grid */}
              <div className="flex flex-wrap gap-2.5">
                {categoryGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-xs font-mono text-foreground/90 hover:text-cyan-300 transition-all duration-200 flex items-center gap-1.5 group/badge"
                  >
                    <Check className="w-3.5 h-3.5 text-cyan-400 group-hover/badge:scale-125 transition-transform" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
