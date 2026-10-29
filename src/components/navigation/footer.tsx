import { PERSONAL_INFO } from '@/lib/data';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const SOCIALS = [
  { href: PERSONAL_INFO.socials.github, icon: Github, label: 'GitHub' },
  { href: PERSONAL_INFO.socials.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: PERSONAL_INFO.socials.email, icon: Mail, label: 'Email' },
];

const FOOTER_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Analytics', href: '#dashboards' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative mt-8 px-6 pt-14 pb-8">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-[min(1180px,88%)] bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-400 to-emerald-400 p-px">
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center font-bold text-[11px] text-white">
                  HS
                </div>
              </div>
              <span className="font-semibold text-sm text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-[11px] font-mono text-indigo-300/80 mt-4 uppercase tracking-[0.14em]">
              Business Intelligence &amp; AI Specialist
            </p>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
              Designed with Apple whitespace, Stripe typography, and Linear precision.
            </p>
          </div>

          {/* Links */}
          <nav className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3 text-xs">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-white transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2.5">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 flex items-center justify-center transition-all duration-300 hover:text-white hover:border-indigo-400/40 hover:bg-white/[0.07] hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-mono text-gray-600">
            © {new Date().getFullYear()} Harshit Sinha. All rights reserved.
          </p>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 text-[11px] font-mono text-gray-500 hover:text-white transition-colors"
          >
            Back to top
            <span className="w-6 h-6 rounded-lg border border-white/10 bg-white/[0.03] flex items-center justify-center group-hover:border-indigo-400/40 transition-colors">
              <ArrowUp className="w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
