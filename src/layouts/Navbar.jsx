import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Sun, Moon, GraduationCap, BookOpen, Compass, Laptop, Briefcase, Languages, Palette, Wrench, Shield, Home, Users } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    setActiveDropdown(null);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Admission', path: '/admission' },
    { name: 'Contact', path: '/contact' },
  ];

  // Dropdown Configurations
  const dropdownMenus = {
    courses: {
      title: 'Courses',
      items: [
        { name: 'Computing & IT', path: '/courses?dept=Computing', icon: Laptop, desc: 'Software engineering, AI & databases' },
        { name: 'Business Administration', path: '/courses?dept=Business', icon: Briefcase, desc: 'Finance, marketing & management' },
        { name: 'English Literature', path: '/courses?dept=English', icon: Languages, desc: 'Advanced languages & linguistics' },
        { name: 'Engineering Technology', path: '/courses?dept=Engineering', icon: Wrench, desc: 'Electrical, mechanical & robotics' },
        { name: 'Graphic & Creative Design', path: '/courses?dept=Graphic Design', icon: Palette, desc: 'UI/UX, visual arts & illustration' },
      ]
    },
    departments: {
      title: 'Departments',
      items: [
        { name: 'School of Computing', path: '/about#departments', icon: Laptop, desc: 'Tech research and labs' },
        { name: 'School of Business', path: '/about#departments', icon: Briefcase, desc: 'Corporate relations & incubators' },
        { name: 'School of Engineering', path: '/about#departments', icon: Wrench, desc: 'Machinery and robotics workshops' },
        { name: 'Language & Arts', path: '/about#departments', icon: Languages, desc: 'Culture and communications' },
      ]
    },
    services: {
      title: 'Student Services',
      items: [
        { name: 'Campus Library', path: '/admission#services', icon: BookOpen, desc: '24/7 Digital & physical archive access' },
        { name: 'Student Hostel', path: '/admission#services', icon: Home, desc: 'Premium on-campus accommodations' },
        { name: 'Student Support Center', path: '/contact', icon: Users, desc: 'Academic advising & personal counseling' },
        { name: 'Career Guidance', path: '/about#careers', icon: Compass, desc: 'Placement cell and internship portals' },
      ]
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-navbar-light dark:glass-navbar-dark shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand text-white p-2 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white transition-colors">
                CLIC <span className="text-brand dark:text-brand-300">CAMPUS</span>
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold tracking-widest uppercase -mt-1">
                Future Academic Hub
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === link.path
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

            {/* Megamenu / Dropdown elements */}
            {Object.keys(dropdownMenus).map((key) => {
              const dropdown = dropdownMenus[key];
              const isOpenDropdown = activeDropdown === key;
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
                      isOpenDropdown
                        ? 'text-brand dark:text-brand-300'
                        : 'text-slate-600 dark:text-slate-300 hover:text-brand dark:hover:text-brand-300'
                    }`}
                  >
                    {dropdown.title}
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isOpenDropdown ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpenDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-2 w-80 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl shadow-xl p-4 z-50"
                      >
                        <div className="grid gap-2">
                          <p className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest px-2 mb-1">
                            {dropdown.title} Quick Links
                          </p>
                          {dropdown.items.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className="flex gap-3 p-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors group"
                            >
                              <div className="bg-brand-50 dark:bg-slate-800 p-2 rounded-lg text-brand dark:text-brand-300 group-hover:bg-brand group-hover:text-white transition-colors h-9 w-9 flex items-center justify-center shrink-0">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <h4 className="text-xs font-semibold text-slate-950 dark:text-white group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                                  {item.name}
                                </h4>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Action Items */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-brand" />}
            </button>

            {/* CTA Button */}
            <Link
              to="/admission"
              className="bg-brand hover:bg-primary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 flex items-center gap-1.5"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Right Bar */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-350 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-brand" />}
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
                    className={`block px-3 py-2.5 rounded-xl text-base font-semibold transition-colors ${
                      location.pathname === link.path
                        ? 'bg-brand/10 text-brand dark:text-brand-300'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Dropdowns */}
              {Object.keys(dropdownMenus).map((key) => {
                const dropdown = dropdownMenus[key];
                return (
                  <div key={key} className="border-t border-slate-100 dark:border-slate-800 pt-3">
                    <h3 className="px-3 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1.5">
                      {dropdown.title}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dropdown.items.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                        >
                          <item.icon className="h-4.5 w-4.5 text-brand dark:text-brand-300 shrink-0" />
                          <span className="text-sm font-medium text-slate-750 dark:text-slate-200">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Mobile CTA */}
              <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex flex-col gap-2">
                <Link
                  to="/admission"
                  className="bg-brand hover:bg-primary-hover text-white text-center font-semibold py-3 rounded-xl shadow-md transition-colors"
                >
                  Apply Online
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
