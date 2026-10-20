import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Award,
  Users,
  CheckCircle,
  GraduationCap,
  Star,
  Search,
  Clock,
  ChevronRight,
  Sparkles,
  Laptop,
  MapPin,
  BadgePercent
} from 'lucide-react';
import { courses, schoolsData } from '../data/coursesData';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [heroSearch, setHeroSearch] = useState('');
  const navigate = useNavigate();

  // Verified Institutional Strengths & Metrics
  const stats = [
    { value: '14+', label: 'Years of Excellence', desc: 'Guiding regional students since 2012' },
    { value: '6+', label: 'Specialized Diplomas', desc: 'IT, English, Web, Design & Languages' },
    { value: '13', label: 'Combo Discount Offers', desc: 'Save up to Rs. 25,000/= on bundles' },
    { value: '100%', label: 'Hands-on Lab Training', desc: 'Practical computing & multimedia lab' },
  ];

  // Core Educational Benefits
  const benefits = [
    {
      title: 'State-of-the-Art Computer Lab',
      desc: 'High-performance desktop workstations equipped with modern development tools, Microsoft Office suites, and Adobe Creative Cloud software.',
      icon: Laptop
    },
    {
      title: 'Industry-Experienced Faculty',
      desc: 'Learn directly from active software developers, experienced English lecturers, and multimedia practitioners focused on real-world competence.',
      icon: Users
    },
    {
      title: 'Practical, Job-Ready Curriculum',
      desc: 'Our modular syllabuses prioritize authentic business communication, coding projects, and portfolio creation over dry theory.',
      icon: Award
    },
    {
      title: 'Flexible Schedules & Subsidies',
      desc: 'Full-time, part-time, and weekend batches tailored to school leavers and working professionals, complemented by special combination discounts.',
      icon: CheckCircle
    }
  ];

  // Authentic Student Testimonials
  const testimonials = [
    {
      name: 'M. Rimzan',
      role: 'Diploma in IT & Web Designing Graduate',
      image: '/images/staff/staff-01.optimized.jpg',
      quote: 'The hands-on computer lab training at CLIC Campus transformed my career path. Learning web development and MS Office under experienced lecturers gave me the exact skills needed to build modern applications with confidence.'
    },
    {
      name: 'F. Aamina',
      role: 'Diploma in English Alumna',
      image: '/images/staff/Manager1.optimized.jpg',
      quote: 'Enrolling in the English program at CLIC Campus drastically improved my spoken fluency, public speaking, and corporate email writing. The personal feedback from the lecturers made all the difference in my interviews.'
    },
    {
      name: 'K. Sangeeth',
      role: 'Smart Combo (English + IT) Scholar',
      image: '/images/staff/staff-02.optimized.jpg',
      quote: 'Taking the Smart Combo offer was the best academic decision I made. I saved Rs. 22,000 on tuition and gained dual mastery in digital computing and professional English in just 3 months.'
    }
  ];

  // Campus Highlights & News
  const campusHighlights = [
    {
      id: 'highlight-01',
      title: 'Annual Academic Awarding Ceremony',
      date: 'Recent Milestone',
      category: 'Academic Milestone',
      image: '/gallery/awarding/Avarding.webp',
      desc: 'Celebrating the academic excellence and diploma achievements of our graduating scholars across English, IT, and Graphic Design disciplines.'
    },
    {
      id: 'highlight-02',
      title: 'Specialized Tech & Computing Seminars',
      date: 'Campus Life',
      category: 'Workshops',
      image: '/gallery/seminars/Students.webp',
      desc: 'Interactive workshop sessions guiding students through real-world software workflows, coding practices, and document design architectures.'
    },
    {
      id: 'highlight-03',
      title: 'Community & Cultural Celebrations',
      date: 'Student Engagement',
      category: 'Campus Culture',
      image: '/gallery/special-days/Pongal.webp',
      desc: 'Fostering cultural unity, teamwork, and student bonding through vibrant campus celebrations and leadership-building activities.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleHeroSearchSubmit = (e) => {
    e.preventDefault();
    if (heroSearch.trim()) {
      navigate(`/courses?q=${encodeURIComponent(heroSearch.trim())}`);
    } else {
      navigate('/courses');
    }
  };

  return (
    <div className="w-full flex-grow pt-14 sm:pt-16">

      {/* ── 1. Hero Section With Live Course Discovery ── */}
      <section className="relative min-h-[640px] lg:min-h-[720px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* High-Performance Hero Background Image */}
        <img
          src="/frontpic.webp"
          alt="CLIC Campus Building and Academic Facility"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover scale-105 pointer-events-none select-none opacity-45"
        />

        {/* Gradient overlays tailored with CLIC's signature plum & deep slate tones */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-brand-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />

        {/* Hero Main Content */}
        <div className="relative z-10 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-16 sm:py-24 w-full">
          <div className="max-w-3xl space-y-6 sm:space-y-7 text-center sm:text-left">

            {/* Credible Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand/25 backdrop-blur-md border border-brand-400/30 px-4 py-1.5 rounded-full text-brand-200 text-xs sm:text-sm font-semibold tracking-wide w-fit mx-auto sm:mx-0 shadow-sm"
            >
              <GraduationCap className="h-4 w-4 text-brand-300" />
              <span>Admissions Open for 2026 Academic Intake</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans"
            >
              Empowering Minds, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-rose-300 to-amber-200">
                Building Real Futures.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed font-light mx-auto sm:mx-0"
            >
              Welcome to CLIC Campus — Akkaripattu's premier academic center for industry-aligned professional diplomas in Information Technology, English Communication, Graphic Design, Web Technologies, and Office Administration.
            </motion.p>

            {/* Live Course Search Bar (Educational Website Pattern) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <form
                onSubmit={handleHeroSearchSubmit}
                className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-2 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 flex flex-col sm:flex-row items-center gap-2 max-w-2xl"
              >
                <div className="flex items-center gap-3 px-3 py-2 w-full flex-grow">
                  <Search className="h-5 w-5 text-brand dark:text-brand-300 shrink-0" />
                  <input
                    type="text"
                    placeholder="Search courses, e.g. IT, English, Graphic Design..."
                    value={heroSearch}
                    onChange={(e) => setHeroSearch(e.target.value)}
                    className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 text-sm outline-none font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-brand hover:bg-brand-800 text-white font-bold px-6 py-3.5 rounded-xl sm:rounded-2xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm shrink-0"
                >
                  <span>Search Courses</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>

              {/* Quick Filter Tags below search */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-3 text-xs text-slate-400">
                <span className="font-semibold text-slate-300">Popular:</span>
                {[
                  { name: 'Diploma in IT', dept: 'IT' },
                  { name: 'Diploma in English', dept: 'English' },
                  { name: 'Graphic Designing', dept: 'Graphic Designing' },
                  { name: 'Web Designing', dept: 'Web Designing' },
                  { name: 'Smart Combo Offers', dept: 'Combo' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      if (item.dept === 'Combo') {
                        navigate('/courses#course-offers');
                      } else {
                        navigate(`/courses?dept=${encodeURIComponent(item.dept)}`);
                      }
                    }}
                    className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-brand/30 border border-white/10 hover:border-brand/40 text-slate-300 hover:text-white transition-all text-[11px] font-medium"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center gap-3.5 pt-2"
            >
              <Link
                to="/courses"
                className="w-full sm:w-auto bg-brand hover:bg-brand-800 active:bg-brand-950 text-white text-center font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-brand/20 transition-all duration-200 flex items-center justify-center gap-2 text-sm group"
              >
                <span>Browse All Courses</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-slate-900/70 hover:bg-slate-800/80 text-white text-center font-semibold px-7 py-3.5 rounded-2xl border border-slate-700/60 backdrop-blur-md transition-all duration-200 text-sm flex items-center justify-center gap-2"
              >
                <span>Admissions Inquiry</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Institutional Verified Strengths & Metrics ── */}
      <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl shadow-xl dark:shadow-2xl p-6 sm:p-8 lg:p-9">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`text-center space-y-1.5 ${
                  idx % 2 !== 0 && idx !== 3 ? 'border-r-0 sm:border-r border-slate-100 dark:border-slate-800' : ''
                } ${
                  idx !== stats.length - 1 ? 'lg:border-r lg:border-slate-100 dark:lg:border-slate-800/80' : ''
                }`}
              >
                <span className="text-3xl sm:text-4xl font-black text-brand dark:text-brand-300 block tracking-tight">
                  {stat.value}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                  {stat.label}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Institutional Introduction & Academic Mission ── */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 group">
                <img
                  src="/gallery/awarding/Avarding1.webp"
                  alt="CLIC Campus Awarding Ceremony"
                  className="w-full h-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-300 bg-brand/30 px-2.5 py-1 rounded-full backdrop-blur-md">
                    Academic Heritage
                  </span>
                  <h4 className="text-base sm:text-lg font-bold mt-1">Celebrating Student Achievement</h4>
                  <p className="text-xs text-slate-300 font-light">Equipping youth with practical skills for regional & national careers.</p>
                </div>
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:-right-6 bg-brand text-white p-4 sm:p-5 rounded-2xl shadow-xl border-2 border-white dark:border-slate-900 hidden sm:block">
                <span className="text-2xl font-black block">Est. 2012</span>
                <span className="text-[11px] font-semibold text-brand-100 uppercase tracking-wider">Over a Decade of Trust</span>
              </div>
            </div>

            {/* Text & Mission Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-2">
                <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 border border-brand/10 px-3.5 py-1.5 rounded-full inline-block">
                  About Our Institution
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                  Welcome to <span className="text-brand dark:text-brand-400">CLIC Campus</span>
                </h2>
                <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300">
                  To Deliver Quality Education, Develop Practical Skills and Empower Every Learner to Succeed.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                Located on Sagama Road in Akkaripattu, CLIC Campus is dedicated to bridging the divide between academic qualifications and modern employment demands. Through our specialized schools in Information Technology, English Language, Creative Graphic Design, and Office Administration, students receive intensive hands-on lab training under experienced faculty.
              </p>

              {/* Pillars checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  '100% Practical Computer Lab Sessions',
                  'Recognized Diploma Certifications',
                  'Individual Guidance by Experienced Lecturers',
                  'Affordable Fees & Special Combo Discounts',
                  'Flexible Full-Time & Weekend Batches',
                  'Dedicated Admissions & Career Counseling'
                ].map((pillar) => (
                  <div key={pillar} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand dark:text-brand-300 hover:text-brand-900 dark:hover:text-white group"
                >
                  <span>Learn more about our legacy and leadership</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. Academic Schools & Departments Showcase ── */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200/70 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2 max-w-2xl">
              <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 border border-brand/10 px-3.5 py-1 rounded-full inline-block">
                Academic Faculties
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Our Schools & Departments
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
                Explore specialized academic divisions designed to develop targeted expertise and career readiness.
              </p>
            </div>
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand dark:text-brand-300 hover:underline shrink-0"
            >
              <span>Explore All Academic Programs</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Schools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {schoolsData.map((school) => (
              <motion.div
                key={school.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* School Image header */}
                  <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={school.image}
                      alt={school.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    <div className="absolute top-3.5 right-3.5">
                      <span className="text-[10px] font-bold text-white bg-brand/80 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {school.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] font-bold text-brand-300 uppercase tracking-widest block">
                        {school.code} • {school.courseCount} Program{school.courseCount > 1 ? 's' : ''} Available
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                        {school.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light line-clamp-3">
                      {school.description}
                    </p>

                    {/* Career pathways */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                        Key Career Outcomes:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {school.careerOutlooks.slice(0, 3).map((career) => (
                          <span
                            key={career}
                            className="text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-lg"
                          >
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-5 sm:px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Lead: <strong className="text-slate-700 dark:text-slate-300">{school.headOfDept}</strong>
                  </span>
                  <Link
                    to={`/courses?dept=${encodeURIComponent(school.dept)}`}
                    className="text-xs font-bold text-brand dark:text-brand-300 hover:text-brand-800 flex items-center gap-1 group/btn"
                  >
                    <span>View Courses</span>
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. Featured Courses Catalog Showcase ── */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 border border-brand/10 px-3.5 py-1.5 rounded-full inline-block">
              Flagship Qualifications
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Featured Diploma Programs
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light">
              Explore our core diploma credentials designed for immediate employment and career enhancement.
            </p>
          </div>

          {/* Featured Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.slice(0, 6).map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-brand/5 group transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image & Header */}
                <div>
                  <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-brand-900 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {course.dept}
                      </span>
                      <span className="text-[10px] font-bold text-white bg-emerald-600/90 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {course.level}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-xs text-white/80 font-medium flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5 text-brand-300" />
                        {course.duration}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3.5">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light line-clamp-3">
                      {course.desc}
                    </p>

                    {/* Syllabus preview chips */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">
                        Core Syllabus Modules:
                      </span>
                      <div className="space-y-1">
                        {course.syllabus.slice(0, 2).map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-350">
                            <CheckCircle className="h-3 w-3 text-brand dark:text-brand-300 shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer: Fee & Action */}
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-900/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Tuition Fee</span>
                    <span className="text-sm font-extrabold text-slate-900 dark:text-white">{course.fees}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/contact?course=${encodeURIComponent(course.title)}`}
                      className="bg-brand hover:bg-brand-800 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors shadow-xs"
                    >
                      Inquire
                    </Link>
                    <Link
                      to={`/courses?highlight=${course.id}`}
                      className="border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold px-3 py-2 rounded-xl transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Action */}
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 bg-brand text-white hover:bg-brand-800 font-bold px-8 py-4 rounded-2xl shadow-md transition-all duration-200 text-sm"
            >
              <span>Explore Complete Course Catalog & Syllabuses</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 6. Course Combination Offers Banner ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-950 via-slate-950 to-brand-900 text-white relative overflow-hidden">
        {/* Subtle background ambient lights */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-600/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-rose-600/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-brand-200 text-xs font-bold uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                <BadgePercent className="h-4 w-4 text-amber-300" />
                Special Combination Discounts
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Save Up To <span className="text-amber-300">Rs. 25,000/=</span> With Dual & Triple Combos
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-xl">
                Maximize your employment potential by bundling high-demand courses together. Enroll in English + IT for just <strong>Rs. 28,000/=</strong> (Saving Rs. 22,000), or master English, IT & Sinhala together with our all-rounder triple bundle.
              </p>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link
                  to="/courses#course-offers"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-7 py-3.5 rounded-2xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Sparkles className="h-4 w-4" />
                  <span>View All 13 Combo Offers</span>
                </Link>
                <Link
                  to="/contact?course=Smart%20Combo%20(English%20%2B%20IT)"
                  className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-6 py-3.5 rounded-2xl transition-all text-sm flex items-center justify-center"
                >
                  Inquire Smart Combo
                </Link>
              </div>
            </div>

            {/* Top Combo Card Feature */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-7 space-y-5 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold bg-amber-400 text-slate-950 px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular Combo
                  </span>
                  <span className="text-xs text-brand-200 font-semibold">2026 Intake</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">English + IT Smart Combo</h3>
                  <p className="text-xs text-slate-300 mt-1">Dual diploma credential covering corporate English fluency & computer technology.</p>
                </div>

                <div className="bg-slate-950/60 rounded-2xl p-4 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Individual Total Fee:</span>
                    <span className="line-through">Rs. 50,000/=</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-emerald-400 font-bold">
                    <span>Combo Discount Savings:</span>
                    <span>− Rs. 22,000/=</span>
                  </div>
                  <div className="border-t border-white/10 pt-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-white uppercase tracking-wider">Final Combo Tuition:</span>
                    <span className="text-xl font-black text-amber-300">Rs. 28,000/=</span>
                  </div>
                </div>

                <Link
                  to="/contact?course=English%20%2B%20IT%20Smart%20Combo"
                  className="w-full bg-brand hover:bg-brand-600 text-white font-bold py-3.5 rounded-xl transition-all text-center block text-xs uppercase tracking-wider shadow-md"
                >
                  Enroll In Smart Combo Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 7. Why Choose Us / Institutional Strengths ── */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 border border-brand/10 px-3.5 py-1.5 rounded-full inline-block">
              Institutional Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Why Study at CLIC Campus?
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light">
              We stand apart through our commitment to practical exposure, industry-relevant curriculum, and personalized student mentoring.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 p-7 sm:p-8 rounded-3xl shadow-xs hover:shadow-xl hover:shadow-brand/5 group transition-all duration-300 flex items-start gap-5"
              >
                <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-4 rounded-2xl group-hover:bg-brand group-hover:text-white transition-colors duration-300 shrink-0">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 8. Campus Highlights & Activities ── */}
      <section className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200/70 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2 max-w-2xl">
              <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 border border-brand/10 px-3.5 py-1 rounded-full inline-block">
                Campus Life & Milestones
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Latest Highlights & Events
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
                Discover authentic student life, award ceremonies, academic seminars, and community service at CLIC Campus.
              </p>
            </div>
            <Link
              to="/about#campus-gallery"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-brand dark:text-brand-300 hover:underline shrink-0"
            >
              <span>View Full Campus Photo Gallery</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {campusHighlights.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-brand/5 group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold text-white bg-brand/80 backdrop-blur-md px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[11px] font-semibold text-brand dark:text-brand-300 block">
                      {item.date}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-3.5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/40">
                  <Link
                    to="/about"
                    className="text-xs font-bold text-brand dark:text-brand-300 hover:text-brand-900 flex items-center gap-1 group/btn"
                  >
                    <span>Read Campus Story</span>
                    <ChevronRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 9. Student Voices & Verified Testimonials ── */}
      <section className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14 space-y-3">
            <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 border border-brand/10 px-3.5 py-1.5 rounded-full inline-block">
              Student Experiences
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              What Our Scholars Say
            </h2>
          </div>

          {/* Testimonial Card Slider */}
          <div className="relative bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-10 md:p-12 shadow-sm min-h-[300px] flex flex-col justify-between">
            
            {/* Ambient quote mark */}
            <div className="absolute top-6 left-6 text-brand/10 dark:text-slate-800 text-6xl font-serif select-none pointer-events-none">
              “
            </div>

            <div className="relative z-10 flex-grow flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-6 w-full"
                >
                  <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed font-light">
                    "{testimonials[currentSlide].quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].name}
                      className="h-13 w-13 sm:h-14 sm:w-14 rounded-2xl object-cover border-2 border-brand/20 shadow-md bg-slate-100 dark:bg-slate-800"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-xs text-brand dark:text-brand-300 font-semibold">
                        {testimonials[currentSlide].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-8">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
                <span className="text-xs font-bold text-slate-500 ml-1.5">5.0 Star Rating</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                  aria-label="Next Slide"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 10. Direct Admissions & Campus Call To Action ── */}
      <section className="py-16 sm:py-20 bg-brand text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-800/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-950/50 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-brand-100 text-xs font-semibold backdrop-blur-md">
            <MapPin className="h-3.5 w-3.5 text-brand-200" />
            <span>Akkaripattu Campus • Sagama Road</span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
            Ready to Begin Your Educational Journey?
          </h2>

          <p className="text-sm sm:text-base text-brand-100 max-w-xl mx-auto font-light leading-relaxed">
            Our admissions specialists are ready to guide you through course selection, syllabus details, and flexible installment plans. Get in touch with us today.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3.5 justify-center items-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-brand text-center font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-200 text-sm"
            >
              Submit an Admissions Inquiry
            </Link>
            <a
              href="tel:+94777635657"
              className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white text-center font-semibold px-8 py-4 rounded-2xl transition-all duration-200 text-sm"
            >
              Call Campus Hotline: 077 763 5657
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
