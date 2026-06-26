import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

const usefulLinks = [
  { label: 'Home', path: '/' },
  { label: 'Massage', path: '/services' },
  { label: 'Seated Massage', path: '/services#seated' },
  { label: 'Personal Training', path: '/services#training' },
  { label: 'Beauty Packages', path: '/services#beauty' },
  { label: 'Qualifications', path: '/qualifications' },
  { label: 'References', path: '/references' },
  { label: 'Contact', path: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Purls Massage Fitness Beauty
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Mobile Massage Therapist, Personal Trainer, and Beautician serving Australia.
            </p>
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/30 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                <Clock size={14} className="text-cyan-500 dark:text-cyan-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">Tuesday – Sunday</p>
                  <p>12pm – 10pm</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Last appointment finishing at 10pm
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Phone size={14} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/+61434605902"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  +61 434 605 902
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Mail size={14} className="text-cyan-500 dark:text-cyan-400 shrink-0" />
                <a
                  href="mailto:claudia@purls-group.co.uk"
                  className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  claudia@purls-group.co.uk
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-400">
                <MapPin size={14} className="text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                <span>Mobile Service - We come to you!</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/5 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Purls Massage Fitness Beauty. All rights reserved.
        </div>
      </div>
    </footer>
  );
}