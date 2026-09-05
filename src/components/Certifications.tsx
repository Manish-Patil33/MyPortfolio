import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Certifications: React.FC = () => {
  const { certifications, achievements } = PORTFOLIO_DATA;

  return (
    <section className="py-24 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>06. CERTIFICATIONS & ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Verified Industry <span className="gradient-text">Certifications & Awards</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mt-2">
            Click any certification card to open official credential details or provider verification.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <span>Professional Certifications</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-xl relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono border border-cyan-500/20">
                      {cert.issuer}
                    </span>
                    <Award className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h4>

                  {cert.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                      {cert.description}
                    </p>
                  )}
                </div>

                {/* External Verification Link */}
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold transition-all flex items-center justify-center gap-2 group/btn mt-2"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements & Activities Grid */}
        <div>
          <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            <span>Hackathons & Co-Curricular Activities</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achieve, index) => (
              <motion.div
                key={achieve.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className="glass-card rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 mt-1">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-amber-400 uppercase font-bold">
                      {achieve.type}
                    </span>
                  </div>
                  <h4 className="font-bold text-lg text-foreground mb-1">{achieve.title}</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {achieve.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
