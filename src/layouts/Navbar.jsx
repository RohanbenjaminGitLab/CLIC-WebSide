import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll handler for background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'glass-navbar-light dark:glass-navbar-dark shadow-md py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/CLIClogo.jpeg"
              alt="CLIC CAMPUS Logo"
              className="
    h-24 sm:h-32
    w-24 sm:w-32
    object-cover
    rounded-full
    p-0.5
    bg-white
    shadow-xl
    border-4 border-brand
    ring-2 ring-brand/20
    transition-all duration-500
    group-hover:scale-110
    group-hover:rotate-3
    group-hover:shadow-2xl
    group-hover:shadow-brand/30
  "
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${location.pathname === link.path
                  ? 'text-brand dark:text-brand-300'
                  : 'text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand-300'
                  }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand dark:bg-brand-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Action Items */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-brand-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-5 w-5 text-brand-300" /> : <Moon className="h-5 w-5 text-brand" />}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-brand hover:bg-brand-950 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 flex items-center gap-1.5"
            >
              Inquire Now
            </Link>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-brand-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-5 w-5 text-brand-300" /> : <Moon className="h-5 w-5 text-brand" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-150 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors ${location.pathname === link.path
                      ? 'bg-brand/10 text-brand dark:text-brand-300'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex flex-col gap-2">
                <Link
                  to="/contact"
                  className="bg-brand hover:bg-brand-950 text-white text-center font-semibold py-3 rounded-xl shadow-md transition-colors"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
