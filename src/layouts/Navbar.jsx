import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, GraduationCap, ChevronRight, Search, Phone, MapPin, Sparkles } from 'lucide-react';
import CourseSearchModal from '../components/CourseSearchModal';

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  // Scroll handler for background elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut Ctrl+K or / to open search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Staff', path: '/staff' },
    { name: 'Courses', path: '/courses' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {/* 1. Institutional Top Utility Bar (Hidden when scrolled deeply on mobile for screen economy) */}
        <div className={`bg-brand-950 text-white/90 text-[11px] sm:text-xs transition-all duration-300 border-b border-white/10 ${
          isScrolled ? 'hidden md:block py-1.5' : 'py-2'
        }`}>
          <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
            {/* Left Notice: Admissions Open & Campus Location */}
            <div className="flex items-center gap-3 sm:gap-5">
              <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Admissions 2026 Intake Open</span>
              </span>

              <span className="hidden sm:inline text-white/30">•</span>

              <a
                href="https://www.google.com/maps/search/?api=1&query=7.2157778,81.8491944"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
                title="Sagama Road, Akkaripattu"
              >
                <MapPin className="h-3.5 w-3.5 text-brand-300 shrink-0" />
                <span className="truncate max-w-[200px] md:max-w-none">Sagama Road, Akkaripattu</span>
              </a>
            </div>

            {/* Right Contact Details & Quick Links */}
            <div className="flex items-center gap-4">
              <a
                href="tel:+94777635657"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors font-medium"
              >
                <Phone className="h-3 w-3 text-brand-300 shrink-0" />
                <span>+94 77 763 5657</span>
              </a>

              <span className="hidden md:inline text-white/30">•</span>

              <a
                href="https://wa.me/94777635657"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 hover:text-emerald-400 transition-colors"
              >
                <span>WhatsApp Desk</span>
              </a>

              <span className="hidden lg:inline text-white/30">•</span>

              <Link
                to="/courses#course-offers"
                className="hidden lg:inline-flex items-center gap-1 text-brand-300 hover:text-white font-bold"
              >
                <Sparkles className="h-3 w-3" />
                <span>Combo Offers (Save up to Rs. 25k)</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Primary Glassmorphic Main Navigation */}
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'glass-navbar-light dark:glass-navbar-dark shadow-md py-2.5 sm:py-3'
              : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md py-3 sm:py-3.5 border-b border-slate-100/70 dark:border-slate-800/70'
          }`}
        >
          <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
            <div className="flex items-center justify-between">
              
              {/* Logo & Brand Identity */}
              <Link
                to="/"
                onClick={handleLinkClick}
                className="flex items-center gap-3 group focus-visible:rounded-xl"
                aria-label="CLIC Campus Homepage"
              >
                <div className="relative">
                  <img
                    src="/CLIClogo.jpeg"
                    alt="CLIC Campus Crest"
                    width={48}
                    height={48}
                    className="h-11 w-11 sm:h-12 sm:w-12 object-cover rounded-full border-2 border-brand dark:border-brand-400 shadow-md p-0.5 bg-white transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" title="Institution Online" />
                </div>

                <div className="flex flex-col">
                  <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-300 transition-colors leading-tight font-sans">
                    CLIC <span className="text-brand dark:text-brand-400">CAMPUS</span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-slate-400 dark:text-slate-400 uppercase -mt-0.5">
                    Academic Hub • Akkaripattu
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-slate-100/80 dark:bg-slate-900/80 p-1.5 rounded-2xl border border-slate-200/70 dark:border-slate-800/70" aria-label="Main Navigation">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? 'text-white font-bold'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/70 dark:hover:bg-slate-800/70'
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavPill"
                          className="absolute inset-0 bg-brand rounded-xl shadow-xs"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Right Action Items */}
              <div className="hidden lg:flex items-center gap-2.5">
                {/* Search Courses Trigger Button */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  type="button"
                  className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-500 dark:text-slate-400 transition-all text-xs font-semibold"
                  aria-label="Search Courses"
                >
                  <Search className="h-4 w-4 text-brand dark:text-brand-300" />
                  <span>Search Courses</span>
                  <kbd className="hidden xl:inline px-1.5 py-0.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[10px] text-slate-400 font-mono">⌘K</kbd>
                </button>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  type="button"
                  className="p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-650 dark:text-slate-300 transition-all duration-200"
                  aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                  title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDark ? (
                    <Sun className="h-4 w-4 text-amber-400" />
                  ) : (
                    <Moon className="h-4 w-4 text-brand" />
                  )}
                </button>

                {/* Direct Admissions / Inquire CTA */}
                <Link
                  to="/contact"
                  className="bg-brand hover:bg-brand-800 active:bg-brand-950 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow-brand/20 transition-all duration-200 flex items-center gap-2 group"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Inquire Now</span>
                  <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Mobile Right Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
                {/* Search Button for Mobile */}
                <button
                  onClick={() => setIsSearchOpen(true)}
                  type="button"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                  aria-label="Search"
                >
                  <Search className="h-4.5 w-4.5 text-brand dark:text-brand-300" />
                </button>

                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  type="button"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                  aria-label="Toggle Theme"
                >
                  {isDark ? <Sun className="h-4.5 w-4.5 text-amber-400" /> : <Moon className="h-4.5 w-4.5 text-brand" />}
                </button>

                {/* Mobile Menu Toggle Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                  aria-label={isOpen ? "Close main menu" : "Open main menu"}
                  aria-expanded={isOpen}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Mobile Off-Canvas Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl shadow-2xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-4 max-h-[82svh] overflow-y-auto">
                {/* Search Bar in Mobile Drawer */}
                <div
                  onClick={() => {
                    setIsOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-2.5 text-slate-400 text-xs font-medium cursor-pointer"
                >
                  <Search className="h-4 w-4 text-brand dark:text-brand-300" />
                  <span>Search all courses & diplomas...</span>
                </div>

                {/* Nav Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        onClick={handleLinkClick}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                          isActive
                            ? 'bg-brand text-white font-bold shadow-sm'
                            : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <ChevronRight className="h-4 w-4" />}
                      </Link>
                    );
                  })}
                </div>

                {/* Mobile CTA & Quick Info */}
                <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-3">
                  <Link
                    to="/contact"
                    onClick={handleLinkClick}
                    className="w-full bg-brand hover:bg-brand-900 text-white text-center font-bold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Inquire Now</span>
                  </Link>

                  <div className="p-3.5 rounded-2xl bg-brand-50/60 dark:bg-slate-900 border border-brand-100 dark:border-slate-800 text-center space-y-1.5">
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Admissions Desk • Sagama Road, Akkaripattu
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="tel:+94777635657"
                        className="text-xs font-bold text-brand dark:text-brand-300 hover:underline inline-flex items-center gap-1"
                      >
                        <Phone className="h-3 w-3" /> 077 763 5657
                      </a>
                      <span className="text-slate-300">•</span>
                      <a
                        href="https://wa.me/94777635657"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Course Search Modal */}
      <CourseSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
