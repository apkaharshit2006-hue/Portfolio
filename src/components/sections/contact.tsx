'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { PERSONAL_INFO } from '@/lib/data';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowUpRight } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const CHANNELS = [
  {
    icon: Mail,
    label: 'Email Address',
    value: PERSONAL_INFO.email,
    href: `mailto:${PERSONAL_INFO.email}`,
    tile: 'bg-indigo-500/15 border-indigo-400/25 text-indigo-300',
  },
  {
    icon: Phone,
    label: 'Phone Number',
    value: PERSONAL_INFO.phone,
    href: `tel:${PERSONAL_INFO.phone}`,
    tile: 'bg-emerald-500/15 border-emerald-400/25 text-emerald-300',
  },
  {
    icon: MapPin,
    label: 'Current Location',
    value: PERSONAL_INFO.location,
    href: null,
    tile: 'bg-purple-500/15 border-purple-400/25 text-purple-300',
  },
];

const inputClasses =
  'w-full bg-white/[0.03] border border-white/10 rounded-xl px-3.5 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-indigo-400/60 focus:bg-white/[0.05] focus:shadow-[0_0_0_4px_rgba(99,102,241,0.12)]';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28 px-6 hairline-top">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          eyebrow="Initiate Collaboration"
          badgeVariant="emerald"
          title={
            <>
              Connect for Roles, Projects &amp;{' '}
              <span className="text-gradient">Research</span>
            </>
          }
          description="Open for Business Intelligence roles, Data Analytics consulting, and AI Automation initiatives."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Channels */}
          <Reveal dim={0.2} offset={20} duration={0.6} className="space-y-4">
            <Card className="p-6">
              <h3 className="text-base font-semibold text-white mb-6 tracking-tight">
                Direct Contact Channels
              </h3>

              <div className="space-y-3">
                {CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  const content = (
                    <>
                      <span
                        className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${channel.tile}`}
                      >
                        <Icon className="w-4 h-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[11px] text-gray-500">{channel.label}</span>
                        <span className="block font-mono text-xs text-white font-medium truncate">
                          {channel.value}
                        </span>
                      </span>
                      {channel.href && (
                        <ArrowUpRight className="w-3.5 h-3.5 ml-auto text-gray-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </>
                  );

                  const className =
                    'group flex items-center gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.07] text-gray-200 transition-all duration-300 hover:bg-white/[0.06] hover:border-indigo-400/30';

                  return channel.href ? (
                    <a key={channel.label} href={channel.href} className={className}>
                      {content}
                    </a>
                  ) : (
                    <div key={channel.label} className={className}>
                      {content}
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-emerald-300">
                  Currently accepting new opportunities
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Typical response time is under 24 hours. For time-sensitive enquiries, reach out
                directly by phone.
              </p>
            </Card>
          </Reveal>

          {/* Form */}
          <Reveal dim={0.2} offset={20} delay={0.1} duration={0.6}>
            <Card className="p-6 h-full">
              <div className="flex items-center justify-between mb-6 gap-3">
                <h3 className="text-base font-semibold text-white tracking-tight">
                  Send Direct Inquiry
                </h3>
                <Badge variant="outline">Encrypted</Badge>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="py-12 text-center space-y-3"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-400/25 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-emerald-300" />
                  </div>
                  <h4 className="text-base font-semibold text-white">Message Transmitted</h4>
                  <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                    Thank you for reaching out. Harshit Sinha will respond within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-mono uppercase tracking-[0.14em] text-gray-500 mb-2"
                    >
                      Your Name / Organization
                    </label>
                    <input
                      id="contact-name"
                      required
                      type="text"
                      placeholder="e.g. Hiring Manager at TechCorp"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-mono uppercase tracking-[0.14em] text-gray-500 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      required
                      type="email"
                      placeholder="name@company.com"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-[11px] font-mono uppercase tracking-[0.14em] text-gray-500 mb-2"
                    >
                      Inquiry / Opportunity Details
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Detail the role, consulting project, or research collaboration..."
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    <span>Transmit Message</span>
                  </Button>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
