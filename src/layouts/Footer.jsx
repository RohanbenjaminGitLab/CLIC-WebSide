import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email address is required.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  const footerLinks = {
    academics: {
      title: 'Academics',
      items: [
        { name: 'Computing & IT', path: '/courses?dept=Computing' },
        { name: 'Business School', path: '/courses?dept=Business' },
        { name: 'Engineering Tech', path: '/courses?dept=Engineering' },
        { name: 'Graphic Design', path: '/courses?dept=Graphic Design' },
        { name: 'Language Academy', path: '/courses?dept=English' },
      ]
    },
    services: {
      title: 'Services',
      items: [
        { name: 'Campus Library', path: '/admission#services' },
        { name: 'Student Hostel', path: '/admission#services' },
        { name: 'Student Support', path: '/contact' },
        { name: 'Placement Cell', path: '/about#careers' },
        { name: 'Scholarships', path: '/admission#scholarships' },
      ]
    },
    company: {
      title: 'Our Institution',
      items: [
        { name: 'About Campus', path: '/about' },
        { name: 'Admission Policy', path: '/admission' },
        { name: 'Contact & Inquiry', path: '/contact' },
        { name: 'News & Events', path: '/' },
        { name: 'Virtual Campus Tour', path: '/about#gallery' },
      ]
    }
  };

  // Custom inline SVG social icons for compilation resilience
  const socialIcons = [
    {
      label: 'Facebook',
      color: 'hover:bg-blue-600',
      href: '#',
      renderIcon: () => (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      label: 'Twitter',
      color: 'hover:bg-sky-500',
      href: '#',
      renderIcon: () => (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    },
    {
      label: 'Instagram',
      color: 'hover:bg-pink-650',
      href: '#',
      renderIcon: () => (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      color: 'hover:bg-blue-700',
      href: '#',
      renderIcon: () => (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    {
      label: 'YouTube',
      color: 'hover:bg-red-600',
      href: '#',
      renderIcon: () => (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
          <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" />
        </svg>
      )
    }
  ];


  return (
    <footer className="bg-slate-900 text-slate-350 border-t border-slate-800 transition-colors pt-16 pb-8 relative z-10">
      {/* Primary Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-2 group w-max">
              <div className="bg-brand text-white p-2.5 rounded-xl shadow-lg shadow-brand/10 group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  CLIC <span className="text-brand-300">CAMPUS</span>
                </span>
                <p className="text-[10px] text-slate-400 font-semibold tracking-widest uppercase -mt-0.5">
                  Future Academic Hub
                </p>
              </div>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering leaders, inventors, and digital architects of tomorrow. Join CLIC Campus to explore advanced, globally-recognized courses designed for real-world excellence.
            </p>
            
            {/* Social Grid */}
            <div className="flex items-center gap-3">
              {socialIcons.map(({ renderIcon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`bg-slate-800 text-slate-400 hover:text-white p-2.5 rounded-xl transition-all duration-300 ${color}`}
                  aria-label={label}
                >
                  {renderIcon()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Columns */}
          {Object.keys(footerLinks).map((key) => {
            const group = footerLinks[key];
            return (
              <div key={key} className="space-y-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  {group.title}
                </h3>
                <ul className="space-y-2.5 text-sm">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.path}
                        className="hover:text-brand-300 flex items-center gap-0.5 group/link transition-colors"
                      >
                        {item.name}
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover/link:opacity-100 transition-all duration-200" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* Newsletter Block & Location Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-y border-slate-800/80 py-10 my-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Newsletter Text */}
          <div className="lg:col-span-1 space-y-1">
            <h4 className="text-base font-bold text-white">Subscribe to our newsletter</h4>
            <p className="text-xs text-slate-400">Get the latest course releases, campus events and scholarship news.</p>
          </div>

          {/* Subscription Form */}
          <div className="lg:col-span-1">
            <form onSubmit={handleSubscribe} className="relative group">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand hover:bg-brand-600 text-white px-3.5 rounded-lg transition-colors flex items-center justify-center"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-xs text-red-400 mt-2 font-medium"
                >
                  {error}
                </motion.p>
              )}
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-xs text-emerald-400 mt-2 font-medium"
                >
                  Thank you! You have subscribed successfully.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Contact Block */}
          <div className="lg:col-span-1 flex flex-col md:flex-row lg:flex-col gap-4 text-xs lg:items-end md:justify-between text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-300" />
              <span>102 University Avenue, Academic Square, NY 10003</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-300" />
              <span>+1 (800) 254-2267 (Campus Hotline)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} CLIC Campus Management System. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
