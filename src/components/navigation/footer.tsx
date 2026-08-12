import { PERSONAL_INFO } from '@/lib/data';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 backdrop-blur-xl py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-white text-sm">{PERSONAL_INFO.name}</span>
            <span className="text-gray-500">|</span>
            <span className="text-xs text-indigo-400 font-mono">Business Intelligence & AI Specialist</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Designed with Apple whitespace, Stripe typography, and Linear precision.
          </p>
        </div>

        <div className="flex items-center gap-6 text-gray-400">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.email}
            className="hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <div className="text-xs font-mono text-gray-500">
          © {new Date().getFullYear()} Harshit Sinha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
