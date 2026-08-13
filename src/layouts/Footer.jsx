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
        { name: 'Campus Library', path: '/services' },
        { name: 'Student Hostel', path: '/services' },
        { name: 'Student Support', path: '/services' },
        { name: 'Placement Cell', path: '/services' },
        { name: 'Scholarships', path: '/services' },
      ]
    },
    company: {
      title: 'Our Institution',
      items: [
        { name: 'About Campus', path: '/about' },
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
      color: 'hover:bg-brand hover:text-white',
      href: '#',
      renderIcon: () => (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    },
    {
      label: 'Twitter',
      color: 'hover:bg-brand hover:text-white',
      href: '#',
      renderIcon: () => (
        <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    },
    {
      label: 'Instagram',
      color: 'hover:bg-brand hover:text-white',
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
      color: 'hover:bg-brand hover:text-white',
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
      color: 'hover:bg-brand hover:text-white',
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
    <footer className="bg-slate-900 text-slate-350 border-t border-slate-800 transition-colors pt-12 sm:pt-16 pb-8 relative z-10">
      {/* Primary Footer Grid */}
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">

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
            <div className="flex flex-wrap items-center gap-2.5">
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
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 border-y border-slate-800/80 py-8 sm:py-10 my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center">

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
                className="w-full bg-slate-800 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand transition-colors pr-12"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-brand hover:bg-brand-950 text-white px-3.5 rounded-lg transition-colors flex items-center justify-center"
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
                  className="text-xs text-brand-300 mt-2 font-medium"
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
              <span>CLIC Campus, Sagama Road, Akkaripattu</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-300" />
              <span>+94 777635657 (Campus Hotline)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 pt-4 pb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-xs text-slate-500 font-medium">

          {/* Left Column: Copyright & Links */}
          <div className="flex flex-col gap-4 order-2 md:order-1 w-full md:w-auto text-center md:text-left">
            <p>
              © {new Date().getFullYear()} CLIC Campus Management System. All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
            </div>
          </div>

          {/* Right Column: Developer Profile */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end w-full md:w-auto">
            <div className="group relative mt-2 flex w-max flex-col items-center">

              {/* Ambient Glow */}
              <div
                className="
        absolute -inset-8 -z-10
        rounded-full
        bg-[#8F173D]/20
        blur-3xl
        opacity-0
        transition-all duration-700
        group-hover:opacity-100
      "
              />

              {/* Developer Image Area */}
              <div
                className="
        relative
        animate-[float_4s_ease-in-out_infinite]
      "
              >

                {/* Rotating Gradient Ring */}
                <div
                  className="
          absolute -inset-[5px]
          rounded-full
          bg-[conic-gradient(from_0deg,#8F173D,transparent,#8F173D)]
          opacity-70
          transition-all duration-700
          group-hover:rotate-180
          group-hover:opacity-100
        "
                />

                {/* Inner Ring */}
                <div
                  className="
          absolute -inset-[2px]
          rounded-full
          bg-slate-900
        "
                />

                {/* Image */}
                <div
                  className="
          relative
          h-32 w-32
          sm:h-36 sm:w-36
          overflow-hidden
          rounded-full
          border-2 border-white/90
          bg-slate-900
          shadow-[0_8px_30px_rgba(0,0,0,0.25)]
          transition-all duration-500
          ease-out
          group-hover:scale-105
          group-hover:shadow-[0_15px_45px_rgba(143,23,61,0.45)]
        "
                >
                  <img
                    src="/rohan.jpg"
                    alt="S. Rohan Benjamin"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://ui-avatars.com/api/?name=S+Rohan+Benjamin&background=8F173D&color=fff";
                    }}
                    className="
            h-full w-full
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-110
          "
                  />

                  {/* Image Dark Overlay */}
                  <div
                    className="
            absolute inset-0
            rounded-full
            bg-gradient-to-t
            from-[#8F173D]/20
            via-transparent
            to-white/10
            opacity-60
          "
                  />

                  {/* Shine Sweep */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
                    <div
                      className="
              absolute
              -left-[130%]
              top-[-20%]
              h-[140%]
              w-[45%]
              rotate-[25deg]
              bg-gradient-to-r
              from-transparent
              via-white/50
              to-transparent
              transition-all
              duration-1000
              ease-out
              group-hover:left-[140%]
            "
                    />
                  </div>
                </div>

                {/* Floating Status Indicator */}
                <div
                  className="
          absolute
          bottom-1
          right-1
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          border-2
          border-white
          bg-[#8F173D]
          shadow-[0_0_15px_rgba(143,23,61,0.7)]
          transition-all
          duration-300
          group-hover:scale-125
        "
                >
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                </div>

                {/* Small Decorative Dot */}
                <span
                  className="
          absolute
          -right-3
          top-5
          h-2
          w-2
          rounded-full
          bg-[#8F173D]
          shadow-[0_0_12px_rgba(143,23,61,0.8)]
          transition-all duration-500
          group-hover:-right-5
        "
                />

                {/* Small Decorative Dot */}
                <span
                  className="
          absolute
          -left-3
          bottom-7
          h-1.5
          w-1.5
          rounded-full
          bg-white
          opacity-70
          transition-all duration-500
          group-hover:-left-5
        "
                />
              </div>

              {/* Developer Information */}
              <div className="mt-4 flex flex-col items-center text-center">

                {/* Developer Badge */}
                <div
                  className="
          mb-1.5
          rounded-full
          border border-white/10
          bg-white/5
          px-3
          py-1
          backdrop-blur-md
          transition-all duration-300
          group-hover:border-[#8F173D]/40
          group-hover:bg-[#8F173D]/10
        "
                >
                  <span
                    className="
            text-[8px]
            font-semibold
            uppercase
            tracking-[0.28em]
            text-slate-300
          "
                  >
                    SoftWare Developer
                  </span>
                </div>

                {/* Name */}
                <span
                  className="
          text-base
          font-bold
          tracking-wide
          text-white
          transition-all
          duration-300
          group-hover:text-[#8F173D]
          group-hover:tracking-wider
        "
                >
                  S. Rohan Benjamin
                </span>

                {/* Description */}
                <span
                  className="
          mt-1
          max-w-[220px]
          text-[10px]
          font-medium
          leading-relaxed
          text-slate-300
          transition-all
          duration-300
          group-hover:text-slate-200
        "
                >
                  Designed & Developed with Dedication
                </span>

                {/* Mini Line */}
                <div
                  className="
          mt-2
          h-[2px]
          w-8
          rounded-full
          bg-[#8F173D]
          transition-all
          duration-500
          group-hover:w-16
        "
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
