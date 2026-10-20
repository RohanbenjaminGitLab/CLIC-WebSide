import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  X,
  Clock,
  Banknote,
  BookOpen,
  ChevronRight,
  Award,
  BadgePercent,
  RotateCcw,
  CheckCircle,
  MapPin,
  ShieldCheck,
  Star,
  ArrowUpDown
} from 'lucide-react';
import {
  courses,
  courseOffers,
  departments,
  qualificationLevels,
  deliveryModes
} from '../data/coursesData';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Search and Filter State
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [selectedMode, setSelectedMode] = useState('All Modes');
  const [sortBy, setSortBy] = useState('featured');
  const [activeTab, setActiveTab] = useState('courses'); // 'courses' | 'offers'

  // Modals state
  const [activeCourseModal, setActiveCourseModal] = useState(null);
  const [activeOfferModal, setActiveOfferModal] = useState(null);

  // Sync department from URL params
  const deptParam = searchParams.get('dept');
  const selectedDept = deptParam && departments.includes(deptParam) ? deptParam : 'All';

  // Handle highlighted course from URL (e.g., from search modal or home link)
  useEffect(() => {
    const highlightId = searchParams.get('highlight');
    if (highlightId) {
      const targetCourse = courses.find((c) => c.id === highlightId);
      if (targetCourse) {
        const timer = setTimeout(() => {
          setActiveCourseModal(targetCourse);
        }, 0);
        return () => clearTimeout(timer);
      }
    }
  }, [searchParams]);

  // Update URL department
  const handleDeptFilter = (dept) => {
    const nextParams = new URLSearchParams(searchParams);
    if (dept === 'All') {
      nextParams.delete('dept');
    } else {
      nextParams.set('dept', dept);
    }
    setSearchParams(nextParams);
  };

  // Reset all filters
  const handleClearAll = () => {
    setSearchQuery('');
    setSelectedLevel('All Levels');
    setSelectedMode('All Modes');
    setSortBy('featured');
    const nextParams = new URLSearchParams();
    setSearchParams(nextParams);
  };

  // Filtered and Sorted Courses
  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        // Search Query Match (Title, Description, Department, Syllabus, Lecturer Name)
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === '' ||
          course.title.toLowerCase().includes(q) ||
          course.desc.toLowerCase().includes(q) ||
          course.dept.toLowerCase().includes(q) ||
          course.code.toLowerCase().includes(q) ||
          course.syllabus.some((item) => item.toLowerCase().includes(q)) ||
          course.lecturers.some((lec) => lec.name.toLowerCase().includes(q));

        // Department Match
        const matchesDept = selectedDept === 'All' || course.dept === selectedDept;

        // Qualification Level Match
        const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;

        // Delivery Mode Match
        const matchesMode =
          selectedMode === 'All Modes' || course.deliveryMode.includes(selectedMode.split(' ')[0]);

        return matchesSearch && matchesDept && matchesLevel && matchesMode;
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') return a.title.localeCompare(b.title);
        if (sortBy === 'name-desc') return b.title.localeCompare(a.title);
        if (sortBy === 'fee-asc') return a.numericFee - b.numericFee;
        if (sortBy === 'fee-desc') return b.numericFee - a.numericFee;
        return 0; // 'featured' preserves catalog ordering
      });
  }, [searchQuery, selectedDept, selectedLevel, selectedMode, sortBy]);

  // Filtered Course Offers
  const filteredOffers = useMemo(() => {
    return courseOffers.filter((offer) => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        offer.courses.toLowerCase().includes(q) ||
        offer.offerTitle.toLowerCase().includes(q) ||
        offer.desc.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedDept !== 'All' ||
    selectedLevel !== 'All Levels' ||
    selectedMode !== 'All Modes' ||
    sortBy !== 'featured';

  return (
    <div className="w-full flex-grow pt-20 sm:pt-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-14">

        {/* ── Page Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 border border-brand/10 px-4 py-1.5 rounded-full inline-block">
            Academic Catalog • 2026 Intakes
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Explore Professional Diplomas
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            Search our comprehensive, practical qualification portfolio across 6 major departments. Gain career-ready skills under expert lecturers at our Akkaripattu campus.
          </p>

          {/* Catalog View Tabs (Diplomas vs Combo Offers) */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'courses'
                  ? 'bg-brand text-white shadow-md shadow-brand/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Standard Diplomas ({courses.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('offers')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'offers'
                  ? 'bg-brand text-white shadow-md shadow-brand/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
              }`}
            >
              <BadgePercent className="h-4 w-4 text-amber-400" />
              <span>Combo Offers (13 Bundles)</span>
            </button>
          </div>
        </div>

        {/* ── COURSE DISCOVERY CONTROLS ── */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xs mb-10 space-y-5">
          
          {/* Top Row: Live Search Input + Sorting */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            
            {/* Search Input */}
            <div className="md:col-span-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search course title, syllabus topic, keywords, or lecturers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 pl-11 pr-10 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand dark:focus:border-brand-400 transition-colors text-sm font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                  aria-label="Clear Search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-4 flex items-center gap-2">
              <div className="relative w-full">
                <ArrowUpDown className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-200 pl-10 pr-8 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs sm:text-sm font-medium outline-none focus:border-brand cursor-pointer"
                >
                  <option value="featured">Sort by: Featured</option>
                  <option value="name-asc">Course Name: A to Z</option>
                  <option value="name-desc">Course Name: Z to A</option>
                  <option value="fee-asc">Tuition: Low to High</option>
                  <option value="fee-desc">Tuition: High to Low</option>
                </select>
              </div>
            </div>

          </div>

          {/* Middle Row: Department Filter Buttons */}
          <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-800/80">
            <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
              Filter by Department:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {departments.map((dept) => {
                const isSelected = selectedDept === dept;
                return (
                  <button
                    key={dept}
                    onClick={() => handleDeptFilter(dept)}
                    className={`text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 border ${
                      isSelected
                        ? 'bg-brand border-brand text-white shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-brand/40'
                    }`}
                  >
                    {dept}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Additional Advanced Filters & Active Pill Counts */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 dark:border-slate-800/80 text-xs">
            
            {/* Qualification Level & Delivery Mode Dropdowns */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-medium">Level:</span>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-200 outline-none"
                >
                  {qualificationLevels.map((lvl) => (
                    <option key={lvl} value={lvl}>{lvl}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-slate-400 font-medium">Study Mode:</span>
                <select
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-2.5 py-1.5 text-xs text-slate-700 dark:text-slate-200 outline-none"
                >
                  {deliveryModes.map((mode) => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Clear All & Result Counter */}
            <div className="flex items-center gap-3">
              <span className="text-slate-500 dark:text-slate-400 font-medium">
                Showing <strong>{activeTab === 'courses' ? filteredCourses.length : filteredOffers.length}</strong> {activeTab === 'courses' ? 'program(s)' : 'offer(s)'}
              </span>

              {hasActiveFilters && (
                <button
                  onClick={handleClearAll}
                  className="inline-flex items-center gap-1 text-brand dark:text-brand-300 font-bold hover:underline"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

          </div>

          {/* Active Filter Badges */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] font-semibold text-slate-400">Active Filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 text-xs bg-brand/10 text-brand dark:text-brand-300 px-3 py-1 rounded-full font-medium">
                  Keyword: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')}><X className="h-3 w-3" /></button>
                </span>
              )}
              {selectedDept !== 'All' && (
                <span className="inline-flex items-center gap-1 text-xs bg-brand/10 text-brand dark:text-brand-300 px-3 py-1 rounded-full font-medium">
                  Dept: {selectedDept}
                  <button onClick={() => handleDeptFilter('All')}><X className="h-3 w-3" /></button>
                </span>
              )}
              {selectedLevel !== 'All Levels' && (
                <span className="inline-flex items-center gap-1 text-xs bg-brand/10 text-brand dark:text-brand-300 px-3 py-1 rounded-full font-medium">
                  Level: {selectedLevel}
                  <button onClick={() => setSelectedLevel('All Levels')}><X className="h-3 w-3" /></button>
                </span>
              )}
              {selectedMode !== 'All Modes' && (
                <span className="inline-flex items-center gap-1 text-xs bg-brand/10 text-brand dark:text-brand-300 px-3 py-1 rounded-full font-medium">
                  Mode: {selectedMode}
                  <button onClick={() => setSelectedMode('All Modes')}><X className="h-3 w-3" /></button>
                </span>
              )}
            </div>
          )}

        </div>

        {/* ── VIEW 1: STANDARD DIPLOMAS GRID ── */}
        {activeTab === 'courses' && (
          <>
            {/* Empty State */}
            {filteredCourses.length === 0 && (
              <div className="text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 sm:p-16 rounded-3xl shadow-sm space-y-4">
                <BookOpen className="h-14 w-14 text-slate-300 dark:text-slate-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">No Matching Courses Found</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto font-light">
                  We couldn't find any courses matching your specific search criteria. Try removing some filters or resetting to view all courses.
                </p>
                <button
                  onClick={handleClearAll}
                  className="bg-brand hover:bg-brand-800 text-white font-bold px-6 py-3 rounded-2xl text-xs transition-colors shadow-xs"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
              <AnimatePresence>
                {filteredCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.28 }}
                    className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-brand/5 group transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Header with Badge and Mode */}
                      <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                          src={course.thumbnail}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                        
                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                          <span className="text-[10px] font-bold text-brand-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {course.dept}
                          </span>
                          <span className="text-[10px] font-bold text-white bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider">
                            {course.level}
                          </span>
                        </div>

                        {/* Bottom Info bar in image */}
                        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
                          <span className="flex items-center gap-1 font-medium">
                            <Clock className="h-3.5 w-3.5 text-brand-300" />
                            {course.duration}
                          </span>
                          <span className="font-semibold text-amber-300 flex items-center gap-0.5">
                            <Star className="h-3.5 w-3.5 fill-current" />
                            {course.rating}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 space-y-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                          {course.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light line-clamp-3">
                          {course.desc}
                        </p>

                        {/* Syllabus preview */}
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                            Key Modules Covered:
                          </span>
                          <div className="space-y-1">
                            {course.syllabus.slice(0, 3).map((item, i) => (
                              <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-350">
                                <CheckCircle className="h-3 w-3 text-brand dark:text-brand-300 shrink-0" />
                                <span className="truncate">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Footer */}
                    <div className="border-t border-slate-100 dark:border-slate-800/80 px-6 py-4 bg-slate-50/60 dark:bg-slate-900/40 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                          Tuition Fee
                        </span>
                        <span className="text-base font-extrabold text-slate-900 dark:text-white">
                          {course.fees}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setActiveCourseModal(course)}
                          className="bg-brand hover:bg-brand-800 active:bg-brand-950 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors flex items-center gap-1"
                        >
                          <span>Full Details</span>
                          <ChevronRight className="h-3.5 w-3.5" />
                        </button>
                        <Link
                          to={`/contact?course=${encodeURIComponent(course.title)}`}
                          className="border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3 py-2.5 rounded-xl transition-colors"
                          title="Direct Admissions Inquiry"
                        >
                          Inquire
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </>
        )}

        {/* ── VIEW 2: COURSE COMBINATION OFFERS ── */}
        {activeTab === 'offers' && (
          <div className="space-y-8" id="course-offers">
            
            {/* Combo Banner Intro */}
            <div className="bg-gradient-to-r from-brand-950 via-slate-900 to-brand-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-2 text-center md:text-left">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest flex items-center gap-1.5 justify-center md:justify-start">
                  <BadgePercent className="h-4 w-4" /> Official 2026 CLIC Campus Combo Pricing
                </span>
                <h3 className="text-xl sm:text-2xl font-black">
                  Bundle 2 or 3 Diplomas & Save Up to Rs. 25,000/=
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
                  Enrolling in dual or triple course packages provides complete dual-domain fluency at heavily discounted rates.
                </p>
              </div>
              <Link
                to="/contact?course=Combo%20Discount%20Inquiry"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-6 py-3.5 rounded-2xl text-xs uppercase tracking-wider shadow-lg transition-all shrink-0"
              >
                Inquire For Any Combo
              </Link>
            </div>

            {/* Offers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOffers.map((offer, idx) => {
                const discountPct = Math.round((offer.discount / offer.actualFee) * 100);
                const isExpanded = activeOfferModal === offer.id;
                return (
                  <motion.div
                    key={offer.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-3xl shadow-xs hover:shadow-xl hover:shadow-brand/5 group transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div className="p-5 sm:p-6 space-y-4">
                      {/* Badge row */}
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Active Intake
                        </span>
                        <span className="text-[10px] font-extrabold text-white bg-brand px-2.5 py-1 rounded-full">
                          {discountPct}% OFF
                        </span>
                      </div>

                      <div>
                        <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">
                          Course Combination:
                        </p>
                        <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                          {offer.courses}
                        </h3>
                        <p className="text-xs text-brand dark:text-brand-300 font-semibold mt-0.5">
                          {offer.offerTitle}
                        </p>
                      </div>

                      {/* Pricing Box */}
                      <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-4 space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span>Actual Individual Fee:</span>
                          <span className="line-through">Rs. {offer.actualFee.toLocaleString()}/=</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                          <span>You Save:</span>
                          <span>− Rs. {offer.discount.toLocaleString()}/=</span>
                        </div>
                        <div className="border-t border-slate-200 dark:border-slate-800 pt-2 flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                            Discounted Fee:
                          </span>
                          <span className="text-base font-extrabold text-slate-900 dark:text-white">
                            Rs. {offer.finalFee.toLocaleString()}/=
                          </span>
                        </div>
                      </div>

                      {/* Validity */}
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{offer.validity}</span>
                      </div>

                      {/* Expandable detail */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-slate-100 dark:border-slate-800 pt-3 space-y-2.5 overflow-hidden"
                          >
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                              {offer.desc}
                            </p>
                            <Link
                              to={`/contact?course=${encodeURIComponent(offer.courses)}`}
                              className="w-full bg-brand hover:bg-brand-800 text-white text-center font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1 transition-colors"
                            >
                              <span>Inquire About This Offer</span>
                              <ChevronRight className="h-3.5 w-3.5" />
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Toggle expand button */}
                    <div className="border-t border-slate-100 dark:border-slate-800/80 px-5 sm:px-6 py-3 bg-slate-50/50 dark:bg-slate-900/40">
                      <button
                        onClick={() => setActiveOfferModal(isExpanded ? null : offer.id)}
                        className="w-full flex items-center justify-between text-xs font-bold text-brand dark:text-brand-300"
                      >
                        <span>{isExpanded ? 'Hide Offer Details' : 'View Offer Details'}</span>
                        <ChevronRight className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* ── RICH COURSE DETAILS MODAL ── */}
      <AnimatePresence>
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:py-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCourseModal(null)}
              className="fixed inset-0 bg-slate-950/75 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 border border-slate-200 dark:border-slate-800 overflow-hidden my-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCourseModal(null)}
                className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 p-2 rounded-xl transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6 max-h-[75vh] sm:max-h-[80vh] overflow-y-auto pr-1">
                
                {/* Header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold text-brand bg-brand/5 dark:bg-brand/10 dark:text-brand-300 border border-brand-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {activeCourseModal.dept}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      {activeCourseModal.level}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Code: {activeCourseModal.code}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white leading-tight">
                    {activeCourseModal.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  {activeCourseModal.fullOverview || activeCourseModal.desc}
                </p>

                {/* Course Metadata Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-3.5">
                    <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-2.5 rounded-xl">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                        Duration & Schedule
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        {activeCourseModal.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-2.5 rounded-xl">
                      <Banknote className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                        Tuition & Fees
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        {activeCourseModal.fees}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-2.5 rounded-xl">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                        Campus Location
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        {activeCourseModal.branch}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-2.5 rounded-xl">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                        Awarding Body
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">
                        {activeCourseModal.awardingBody}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Core Syllabus Modules */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                    Complete Syllabus Curriculum
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCourseModal.syllabus.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium"
                      >
                        <Award className="h-4 w-4 text-brand dark:text-brand-300 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Entry Requirements */}
                {activeCourseModal.entryRequirements && (
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Entry Requirements:
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {activeCourseModal.entryRequirements}
                    </p>
                  </div>
                )}

                {/* Lecturers Section */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Course Faculty ({activeCourseModal.lecturers.length})
                  </h4>
                  <div className={`grid gap-3 ${activeCourseModal.lecturers.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
                    {activeCourseModal.lecturers.map((lec, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-slate-50 dark:bg-slate-950/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60"
                      >
                        <div className="h-13 w-13 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                          {lec.image ? (
                            <img src={lec.image} alt={lec.name} className="h-full w-full object-cover" />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-brand/10 text-brand dark:text-brand-300 text-lg font-extrabold">
                              {lec.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="space-y-0.5 min-w-0">
                          <h5 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                            {lec.name}
                          </h5>
                          <span className="text-[10px] font-bold text-brand dark:text-brand-300 block uppercase tracking-wide">
                            {lec.role}
                          </span>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light mt-1">
                            {lec.bio}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call Action Button */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveCourseModal(null)}
                    className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700"
                  >
                    Back to Catalog
                  </button>
                  <Link
                    to={`/contact?course=${encodeURIComponent(activeCourseModal.title)}`}
                    onClick={() => setActiveCourseModal(null)}
                    className="bg-brand hover:bg-brand-800 text-white text-center font-bold px-6 py-3.5 rounded-2xl shadow-md transition-colors text-xs flex items-center gap-1.5"
                  >
                    <span>Inquire / Enroll In Course</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
