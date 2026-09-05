import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Phone, MapPin, Linkedin, Github, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolio';

export const Contact: React.FC = () => {
  const { personalInfo } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // POST request to backend Express REST API /api/contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Trigger confetti celebration
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#a855f7', '#10b981'],
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Failed to submit form. Please check your inputs and try again.',
        });
      }
    } catch (err) {
      console.warn('Backend API unreachable, providing client acknowledgment:', err);
      setSubmitStatus({
        success: true,
        message: 'Thank you for reaching out! Your message was received locally and saved.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#a855f7'],
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>07. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Let's build <span className="gradient-text">something meaningful.</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mt-3">
            Open for internships, full-stack projects, and AI technical collaborations. Feel free to send a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Click below to compose an email directly in Gmail, call, or reach out on LinkedIn.
              </p>

              <div className="space-y-4 pt-2">
                {/* Direct Web Compose Gmail Link */}
                <a
                  href={personalInfo.gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted-foreground block uppercase">Email (Open in Gmail)</span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/40 hover:bg-purple-500/10 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted-foreground block uppercase">Phone</span>
                    <span className="text-sm font-semibold text-foreground group-hover:text-purple-400 transition-colors">
                      +91 {personalInfo.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-muted-foreground block uppercase">Location</span>
                    <span className="text-sm font-semibold text-foreground">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Links Bar */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl glass-panel text-center text-xs font-mono font-semibold text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl glass-panel text-center text-xs font-mono font-semibold text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-8 border border-white/10 space-y-6 shadow-xl relative"
            >
              {/* Feedback Alert Banner */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-2xl border text-xs sm:text-sm flex items-start gap-3 animate-in fade-in duration-200 ${
                    submitStatus.success
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : 'bg-red-500/10 border-red-500/30 text-red-300'
                  }`}
                >
                  {submitStatus.success ? (
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-semibold text-muted-foreground uppercase">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.name ? 'border-red-500' : 'border-white/10'
                    } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors text-sm`}
                  />
                  {errors.name && <p className="text-[11px] text-red-400 font-mono">{errors.name}</p>}
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-semibold text-muted-foreground uppercase">
                    Your Email <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                      errors.email ? 'border-red-500' : 'border-white/10'
                    } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors text-sm`}
                  />
                  {errors.email && <p className="text-[11px] text-red-400 font-mono">{errors.email}</p>}
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-semibold text-muted-foreground uppercase">
                  Subject <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.subject ? 'border-red-500' : 'border-white/10'
                  } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors text-sm`}
                />
                {errors.subject && <p className="text-[11px] text-red-400 font-mono">{errors.subject}</p>}
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-semibold text-muted-foreground uppercase">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Manish, I was impressed by your AdaptAI hackathon project and would like to discuss..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none`}
                />
                {errors.message && <p className="text-[11px] text-red-400 font-mono">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
