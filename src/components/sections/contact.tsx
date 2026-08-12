'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PERSONAL_INFO } from '@/lib/data';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="emerald" className="mb-3">
            Initiate Collaboration
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Connect for Roles, Projects & Research
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Open for Business Intelligence roles, Data Analytics consulting, and AI Automation initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold text-white mb-6">Direct Contact Channels</h3>

              <div className="space-y-4 text-xs">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-400">Email Address</div>
                    <div className="font-mono text-white font-medium">{PERSONAL_INFO.email}</div>
                  </div>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-400">Phone Number</div>
                    <div className="font-mono text-white font-medium">{PERSONAL_INFO.phone}</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-gray-200">
                  <div className="w-8 h-8 rounded-lg bg-purple-600/20 flex items-center justify-center text-purple-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-gray-400">Current Location</div>
                    <div className="font-mono text-white font-medium">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-white mb-6">Send Direct Inquiry</h3>

            {submitted ? (
              <div className="p-8 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-semibold text-white">Message Transmitted</h4>
                <p className="text-xs text-gray-400">
                  Thank you for reaching out. Harshit Sinha will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-400 mb-1 font-mono">Your Name / Organization</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Hiring Manager at TechCorp"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-1 font-mono">Email Address</label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-1 font-mono">Inquiry / Opportunity Details</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Detail the role, consulting project, or research collaboration..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <Button type="submit" className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
