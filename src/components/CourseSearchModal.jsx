import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, BookOpen, ChevronRight, Tag } from 'lucide-react';
import { courses, courseOffers } from '../data/coursesData';

export default function CourseSearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const departments = ['All', 'English', 'IT', 'Graphic Designing', 'Web Designing', 'Sinhala', 'Office Package'];

  // Filter courses
  const filteredCourses = courses.filter((c) => {
    const matchesDept = selectedDept === 'All' || c.dept === selectedDept;
    const matchesQuery =
      query.trim() === '' ||
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.desc.toLowerCase().includes(query.toLowerCase()) ||
      c.syllabus.some((s) => s.toLowerCase().includes(query.toLowerCase())) ||
      c.lecturers.some((l) => l.name.toLowerCase().includes(query.toLowerCase()));
    return matchesDept && matchesQuery;
  });

  // Filter combo offers
  const matchingOffers = courseOffers.filter((o) => {
    if (!query.trim()) return false;
    return (
      o.courses.toLowerCase().includes(query.toLowerCase()) ||
      o.offerTitle.toLowerCase().includes(query.toLowerCase()) ||
      o.desc.toLowerCase().includes(query.toLowerCase())
    );
  });

  const handleSelectCourse = (courseId) => {
    onClose();
    navigate(`/courses?highlight=${courseId}`);
  };

  const handleSelectOffer = () => {
    onClose();
    navigate(`/courses#course-offers`);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 pb-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -15 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
        >
          {/* Search Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3">
            <Search className="h-5 w-5 text-brand dark:text-brand-300 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search courses, diplomas, syllabus, lecturers..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-grow bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base outline-none font-medium"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 bg-slate-100 dark:bg-slate-800 rounded-lg"
            >
              ESC
            </button>
          </div>

          {/* Quick Department Filter Chips */}
          <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`text-xs px-3 py-1 rounded-full whitespace-nowrap font-medium transition-all ${
                  selectedDept === dept
                    ? 'bg-brand text-white shadow-xs'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-brand/40'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="p-4 sm:p-5 max-h-[60vh] overflow-y-auto space-y-4">
            {/* Matching Combo Offers if any */}
            {matchingOffers.length > 0 && (
              <div className="space-y-2 mb-4">
                <span className="text-[10px] font-bold text-brand uppercase tracking-widest flex items-center gap-1">
                  <Tag className="h-3 w-3" /> Special Combo Offers Matching Search
                </span>
                <div className="grid gap-2">
                  {matchingOffers.slice(0, 2).map((offer) => (
                    <div
                      key={offer.id}
                      onClick={() => handleSelectOffer(offer.id)}
                      className="p-3 rounded-2xl bg-brand/5 dark:bg-brand-950/30 border border-brand/15 hover:border-brand cursor-pointer flex items-center justify-between group transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-300">
                            {offer.courses}
                          </h5>
                          <span className="text-[10px] font-bold text-white bg-brand px-2 py-0.5 rounded-full">
                            Save Rs. {offer.discount.toLocaleString()}/=
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">{offer.desc}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 text-brand shrink-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Courses List */}
            {filteredCourses.length > 0 ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-1">
                  <span>Available Academic Programs ({filteredCourses.length})</span>
                  <span>Click to view details</span>
                </div>
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => handleSelectCourse(course.id)}
                    className="p-3.5 sm:p-4 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-brand/40 dark:hover:border-brand/40 hover:bg-slate-50/80 dark:hover:bg-slate-800/50 cursor-pointer transition-all flex items-start justify-between gap-3 group"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-bold text-brand dark:text-brand-300 bg-brand/5 dark:bg-brand-950/50 border border-brand/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {course.dept}
                        </span>
                        <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                          {course.duration}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                        {course.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 font-light">
                        {course.desc}
                      </p>
                      <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-400">
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          Tuition: {course.fees}
                        </span>
                        <span>•</span>
                        <span>{course.lecturers.length} Faculty Member{course.lecturers.length > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-xl bg-brand/5 group-hover:bg-brand text-brand group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200 self-center">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-10 text-center space-y-3">
                <BookOpen className="h-10 w-10 text-slate-300 dark:text-slate-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-800 dark:text-white">No courses match your search</h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try checking your spelling or select a different department filter above.
                </p>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-5 py-3 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <span>
              Press <kbd className="px-1.5 py-0.5 bg-white dark:bg-slate-800 border rounded text-[10px] font-mono">ESC</kbd> to exit
            </span>
            <button
              onClick={() => {
                onClose();
                navigate('/courses');
              }}
              className="text-brand dark:text-brand-300 font-bold hover:underline"
            >
              Browse Full Course Catalog →
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
