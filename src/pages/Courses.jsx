import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, Banknote, BookOpen, ChevronRight, Award, BadgePercent, Tag, Sparkles } from 'lucide-react';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeCourseModal, setActiveCourseModal] = useState(null);
  const [activeOfferModal, setActiveOfferModal] = useState(null);

  // Departments list as requested
  const departments = ['All', 'English', 'IT', 'Graphic Designing', 'Web Designing', 'Sinhala', 'Office Package'];

  const courses = [
    {
      id: 'diploma-english',
      title: 'Diploma in English',
      dept: 'English',
      duration: '3 Months (Full-time & Part-time)',
      fees: 'Rs. 25,000/=',
      lecturers: [
        {
          name: 'Kurunathapillai Mahathevan',
          role: 'Director & English Lecturer',
          image: '/images/staff/Sir.webp',
          bio: 'Leading CLIC Campus with strategic vision and guiding the English program with a focus on practical communication, grammar mastery, and professional language skills.'
        },
        {
          name: 'Mrs. Saruja Kishanth',
          role: 'Manager & English Lecturer',
          image: '/images/staff/Manager1.webp',
          bio: 'Mrs. Saruja Kishanth plays a key role in coordinating the English program, supporting students with spoken fluency, writing skills, and business communication.'
        }
      ],
      desc: 'Enhance your English communication skills for corporate and academic excellence. Covers grammar, writing, professional speaking, and business communication.',
      syllabus: ['Spoken English & Pronunciation', 'Business Communication & Email Writing', 'Advanced Grammar Structures', 'Presentation & Public Speaking Skills']
    },
    {
      id: 'diploma-it',
      title: 'Diploma in IT',
      dept: 'IT',
      duration: '3 Months (Full-time & Part-time)',
      fees: 'Rs. 25,000/=',
      lecturers: [
        {
          name: 'S. Rohan Benjamin',
          role: 'IT Lecturer & Software Developer',
          image: '/rohan.webp',
          bio: 'S. Rohan Benjamin has over 2 years of experience in Web Development and MS Office, specializing in modern web technologies, software solutions, and professional document management.'
        },
        {
          name: 'Dayani',
          role: 'IT Lecturer',
          image: '/Diyaniakka.jpeg',
          bio: 'Dayani has over 3 years of experience in MS Office, with strong expertise across the complete Microsoft Office suite, including Word, Excel, PowerPoint, and Access, along with modern web technologies and software solutions.'
        },
        {
          name: 'Kanagarethnam Mathumitha',
          role: 'IT Lecturer',
          image: '/Mathumitha.png',
          bio: ' Mathumitha has over 1 years of experience in MS Office, with strong expertise across the complete Microsoft Office suite, including Word, Excel, PowerPoint, and Access, along with modern web technologies and software solutions.'
        }
      ],
      desc: 'A comprehensive foundation in Information Technology covering hardware, software, MS Office, and digital tools essential for today\'s workplace.',
      syllabus: ['Computer Hardware & Operating Systems', 'MS Office (Word, Excel, PowerPoint)', 'Internet & Digital Literacy', 'Introduction to Programming & Databases']
    },
    {
      id: 'diploma-graphic-designing',
      title: 'Diploma in Graphic Designing',
      dept: 'Graphic Designing',
      duration: '3 Months (Full-time & Part-time)',
      fees: 'Rs. 25,000/=',
      lecturers: [
        {
          name: 'CLIC Campus Faculty',
          role: 'Graphic Design Instructor',
          image: '',
          bio: 'Our Graphic Designing course is delivered by experienced design professionals who guide students through industry-standard tools and real-world creative projects, building a portfolio-ready skill set.'
        }
      ],
      desc: 'Master industry-standard tools like Adobe Photoshop and Illustrator to create stunning visual content for digital marketing, social media, and print media.',
      syllabus: ['Adobe Photoshop Essentials', 'Vector Illustration with Illustrator', 'Typography & Layout Design', 'Digital Branding & Portfolio Creation']
    },
    {
      id: 'diploma-web-designing',
      title: 'Diploma in Web Designing',
      dept: 'Web Designing',
      duration: '3 Months (Full-time & Part-time)',
      fees: 'Rs. 25,000/=',
      lecturers: [
        {
          name: 'S. Rohan Benjamin',
          role: 'IT Lecturer & Software Developer',
          image: '/rohan.webp',
          bio: 'S. Rohan Benjamin brings hands-on expertise in modern web technologies, guiding students through the fundamentals of building attractive and responsive websites from concept to deployment.'
        }
      ],
      desc: 'Build beautiful, responsive, and dynamic websites from scratch using HTML5, CSS3, JavaScript, and modern frontend design principles.',
      syllabus: ['HTML5 & Semantic Web Structure', 'CSS3 & Responsive Design', 'JavaScript Fundamentals', 'UI/UX Design & Prototyping']
    },
    {
      id: 'diploma-sinhala',
      title: 'Diploma in Sinhala',
      dept: 'Sinhala',
      duration: '3 Months (Full-time & Part-time)',
      fees: 'Rs. 20,000/=',
      lecturers: [
        {
          name: 'CLIC Campus Faculty',
          role: 'Sinhala Language Instructor',
          image: '',
          bio: 'Our Sinhala language program is delivered by qualified instructors with a strong focus on reading, writing, and spoken Sinhala to help students communicate confidently in professional and everyday settings.'
        }
      ],
      desc: 'Develop strong Sinhala language skills covering reading, writing, grammar, and spoken communication for professional and everyday use.',
      syllabus: ['Sinhala Reading & Comprehension', 'Written Sinhala & Grammar', 'Spoken Sinhala Communication', 'Professional Sinhala for the Workplace']
    },
    {
      id: 'diploma-office-package',
      title: 'Diploma in Office Package',
      dept: 'Office Package',
      duration: '3 Months (Full-time & Part-time)',
      fees: 'Rs. 25,000/=',
      lecturers: [
        {
          name: 'S. Rohan Benjamin',
          role: 'IT Lecturer & Software Developer',
          image: '/rohan.webp',
          bio: 'S. Rohan Benjamin has over 2 years of experience in Web Development and MS Office, specializing in modern web technologies, software solutions, and professional document management.'
        }
      ],
      desc: 'Become highly proficient in Microsoft Office tools (Word, Excel, PowerPoint, Access) to streamline corporate administration and reporting.',
      syllabus: ['Advanced MS Word Formatting', 'MS Excel Data Analysis & Formulas', 'Professional MS PowerPoint Presentations', 'MS Access Database Management']
    }
  ];

  // Course Combinations & Special Discount Offers (from official CLIC Campus price list)
  const courseOffers = [
    {
      id: 'offer-01',
      courses: 'English + IT',
      offerTitle: 'Smart Combo — Best Saving',
      actualFee: 50000,
      discount: 22000,
      finalFee: 28000,
      validity: '2025 Intake — Limited Seats',
      isActive: true,
      desc: 'Our biggest combo saving! Enroll in both the Diploma in English and Diploma in IT together and save Rs. 22,000 compared to enrolling individually. Perfect for students seeking both language and technology skills.'
    },
    {
      id: 'offer-02',
      courses: 'English + Graphic Designing',
      offerTitle: 'Creative Language Combo',
      actualFee: 50000,
      discount: 10000,
      finalFee: 40000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'Combine professional English communication with creative design skills. Ideal for students entering the marketing, advertising, or media industries.'
    },
    {
      id: 'offer-03',
      courses: 'IT + Graphic Designing',
      offerTitle: 'Tech & Design Combo',
      actualFee: 50000,
      discount: 10000,
      finalFee: 40000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'Pair your IT knowledge with visual design expertise. A powerful combination for future UI/UX designers, digital artists, and multimedia professionals.'
    },
    {
      id: 'offer-04',
      courses: 'English + Web Designing',
      offerTitle: 'Digital Professional Combo',
      actualFee: 50000,
      discount: 10000,
      finalFee: 40000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'Master professional English alongside modern web design techniques. Ideal for aspiring digital marketers, freelancers, and content creators.'
    },
    {
      id: 'offer-05',
      courses: 'IT + Web Designing',
      offerTitle: 'Full-Stack Tech Combo',
      actualFee: 50000,
      discount: 10000,
      finalFee: 40000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'Build a solid foundation in IT fundamentals and web design. This combo prepares students for careers in web development, IT support, and software administration.'
    },
    {
      id: 'offer-06',
      courses: 'Web Designing + Graphic Designing',
      offerTitle: 'Visual & Web Design Combo',
      actualFee: 50000,
      discount: 10000,
      finalFee: 40000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'The ultimate creative combo. Master both visual graphic design and website design to build a complete creative portfolio for the digital industry.'
    },
    {
      id: 'offer-07',
      courses: 'English + Sinhala',
      offerTitle: 'Bilingual Language Combo',
      actualFee: 45000,
      discount: 10000,
      finalFee: 35000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'Develop strong bilingual communication skills in both English and Sinhala. Perfect for government job applicants, teachers, and public-facing professionals.'
    },
    {
      id: 'offer-08',
      courses: 'IT + Sinhala',
      offerTitle: 'Tech & Language Combo',
      actualFee: 45000,
      discount: 10000,
      finalFee: 35000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'Combine IT skills with Sinhala language proficiency — a highly relevant combo for students seeking government IT roles or local tech positions.'
    },
    {
      id: 'offer-09',
      courses: 'English + IT + Sinhala',
      offerTitle: 'Triple Combo — All-Rounder',
      actualFee: 70000,
      discount: 25000,
      finalFee: 45000,
      validity: '2026 Intake — Limited Seats',
      isActive: true,
      desc: 'The all-rounder triple combo — English, IT, and Sinhala together at a massive discount. Save Rs. 25,000 and build a comprehensive skill set that opens doors across multiple career paths.'
    },
    {
      id: 'offer-10',
      courses: 'English + IT + Graphic Designing',
      offerTitle: 'Triple Power Combo',
      actualFee: 70000,
      discount: 20000,
      finalFee: 50000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'English communication, IT foundations, and creative graphic design — three of the most in-demand skills bundled together at Rs. 20,000 savings.'
    },
    {
      id: 'offer-11',
      courses: 'English + IT + Web Designing',
      offerTitle: 'Digital Career Triple Combo',
      actualFee: 70000,
      discount: 20000,
      finalFee: 50000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'Prepare for a complete digital career with English, IT, and Web Designing. This triple combo is ideal for aspiring web professionals and digital entrepreneurs.'
    },
    {
      id: 'offer-12',
      courses: 'Web Designing + Sinhala',
      offerTitle: 'Web & Language Combo',
      actualFee: 45000,
      discount: 5000,
      finalFee: 40000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'Pair web design skills with Sinhala language competency. Useful for students building local websites, community platforms, or seeking bilingual tech roles.'
    },
    {
      id: 'offer-13',
      courses: 'Graphic Designing + Sinhala',
      offerTitle: 'Creative & Language Combo',
      actualFee: 45000,
      discount: 5000,
      finalFee: 40000,
      validity: '2026 Intake — Available Now',
      isActive: true,
      desc: 'Combine visual design creativity with Sinhala language skills. Ideal for students interested in creating Sinhala-language digital content, posters, and media.'
    }
  ];

  // URL Query Sync
  useEffect(() => {
    const deptQuery = searchParams.get('dept');
    if (deptQuery && departments.includes(deptQuery)) {
      setSelectedDept(deptQuery);
    } else {
      setSelectedDept('All');
    }
  }, [searchParams]);

  const handleDeptFilter = (dept) => {
    setSelectedDept(dept);
    if (dept === 'All') {
      searchParams.delete('dept');
    } else {
      searchParams.set('dept', dept);
    }
    setSearchParams(searchParams);
  };

  // Filter Logic
  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.dept.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDept = selectedDept === 'All' || course.dept === selectedDept;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="w-full flex-grow pt-20 sm:pt-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-12">

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 px-3 py-1 rounded-full">
            Academics & Curriculums
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Explore Professional Courses
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
            Search our globally-accredited portfolio across 5 major departments. Click any course to view full fees structures, duration, and lecturer information.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-3xl shadow-sm mb-12 space-y-6">

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search course title, description, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white dark:bg-slate-950 text-slate-950 dark:text-white placeholder-slate-400 pl-12 pr-10 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand transition-colors text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-650"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Department Tabs */}
          <div className="flex flex-wrap items-center gap-2 border-t border-slate-100 dark:border-slate-800 pt-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Filter Dept:</span>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => handleDeptFilter(dept)}
                className={`text-xs font-semibold px-4 py-2.5 rounded-xl border transition-all duration-300 ${selectedDept === dept
                  ? 'bg-brand border-brand text-white shadow-md shadow-brand/10'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800'
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Empty Search State */}
        {filteredCourses.length === 0 && (
          <div className="text-center bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-12 rounded-3xl shadow-sm">
            <BookOpen className="h-12 w-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-1">No Courses Found</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto font-light">
              We couldn't find any courses matching "{searchQuery}" under the "{selectedDept}" department. Try adjusting search terms or choosing another filter.
            </p>
          </div>
        )}

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl shadow-sm hover:shadow-lg dark:hover:shadow-brand/5 group transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >

                {/* Card Header details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-brand bg-brand/5 dark:bg-brand/10 dark:text-brand-300 border border-brand-500/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {course.dept}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400 font-semibold">
                      <Clock className="h-3.5 w-3.5 text-slate-300" />
                      {course.duration.split(' ')[0]} {course.duration.split(' ')[1]}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-950 dark:text-white leading-snug group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light line-clamp-3">
                    {course.desc}
                  </p>
                </div>

                {/* Card Footer details */}
                <div className="border-t border-slate-100 dark:border-slate-800/80 px-6 py-4 bg-brand-50/20 dark:bg-slate-900/40 flex items-center justify-between gap-3">
                  {/* Stacked lecturer avatars */}
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {course.lecturers.slice(0, 3).map((lec, i) => (
                        <div
                          key={i}
                          title={lec.name}
                          className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0"
                          style={{ zIndex: course.lecturers.length - i }}
                        >
                          {lec.image ? (
                            <img src={lec.image} alt={lec.name} className="h-full w-full object-cover" />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-brand/10 text-brand dark:text-brand-300 text-[10px] font-bold">
                              {lec.name.charAt(0)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <span className="ml-2.5 text-xs text-slate-500 dark:text-slate-400 font-medium leading-tight">
                      {course.lecturers.length === 1
                        ? course.lecturers[0].name.split(' ').slice(0, 2).join(' ')
                        : `${course.lecturers.length} Lecturers`}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className="text-xs font-bold text-brand dark:text-brand-300 flex items-center gap-0.5 hover:gap-1 transition-all group/btn shrink-0"
                  >
                    View Details
                    <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Course Offers Section ── */}
        <section className="mt-20 sm:mt-24" id="course-offers">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 px-4 py-1.5 rounded-full">
              <BadgePercent className="h-4 w-4" />
              Special Discounts
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Course Combination Offers
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-light">
              Explore our special course combination offers and save more when you enroll in two or three courses together. Click <strong className="font-semibold text-slate-700 dark:text-slate-300">View Offer Details</strong> to see full pricing information.
            </p>
          </div>

          {/* Offers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseOffers.map((offer, idx) => {
              const discountPct = Math.round((offer.discount / offer.actualFee) * 100);
              const isExpanded = activeOfferModal === offer.id;
              return (
                <motion.div
                  key={offer.id}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className={`bg-white dark:bg-slate-900 border rounded-3xl shadow-sm group transition-all duration-300 overflow-hidden flex flex-col ${offer.isActive
                    ? 'border-slate-100 dark:border-slate-800/80 hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-1'
                    : 'border-slate-100 dark:border-slate-800/40 opacity-60'
                    }`}
                >
                  {/* Card Top */}
                  <div className="p-5 sm:p-6 space-y-4 flex-1">

                    {/* Badges Row */}
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      {/* Active / Expired badge */}
                      {offer.isActive ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Active Offer
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          Expired
                        </span>
                      )}
                      {/* Discount % pill */}
                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold text-white bg-brand dark:bg-brand px-2.5 py-1 rounded-full">
                        <Tag className="h-3 w-3" />
                        {discountPct}% OFF
                      </span>
                    </div>

                    {/* Course combination name */}
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Course Combination</p>
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                        {offer.courses}
                      </h3>
                      <p className="text-xs text-brand dark:text-brand-300 font-semibold mt-0.5">{offer.offerTitle}</p>
                    </div>

                    {/* Pricing Block */}
                    <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 rounded-2xl p-4 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-medium">
                          <Banknote className="h-3.5 w-3.5 text-slate-400" />
                          Actual Fee
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 line-through">
                          Rs. {offer.actualFee.toLocaleString()}/=
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-xs text-brand dark:text-brand-300 font-medium">
                          <BadgePercent className="h-3.5 w-3.5" />
                          You Save
                        </span>
                        <span className="text-xs font-bold text-brand dark:text-brand-300">
                          − Rs. {offer.discount.toLocaleString()}/=
                        </span>
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-2 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wide">Final Fee</span>
                        <span className="text-base font-extrabold text-slate-900 dark:text-white">
                          Rs. {offer.finalFee.toLocaleString()}/=
                        </span>
                      </div>
                    </div>

                    {/* Validity */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500 font-medium">
                      <Clock className="h-3.5 w-3.5 shrink-0" />
                      {offer.validity}
                    </div>

                    {/* Expanded Offer Details */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          key="offer-detail"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-1 space-y-3">
                            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                              {offer.desc}
                            </p>
                            <div className="flex items-center gap-2 bg-brand/5 dark:bg-brand/10 border border-brand/10 rounded-xl px-3.5 py-2.5">
                              <Sparkles className="h-4 w-4 text-brand dark:text-brand-300 shrink-0" />
                              <p className="text-[11px] font-semibold text-brand dark:text-brand-300">
                                Enroll in this combination to save <strong>Rs. {offer.discount.toLocaleString()}/=</strong> — pay only <strong>Rs. {offer.finalFee.toLocaleString()}/=</strong> total.
                              </p>
                            </div>
                            <Link
                              to={`/contact?course=${encodeURIComponent(offer.courses)}`}
                              className="w-full bg-brand hover:bg-brand-950 text-white text-center font-bold px-5 py-2.5 rounded-xl shadow-md transition-colors text-xs flex items-center justify-center gap-1"
                            >
                              Inquire About This Offer
                              <ChevronRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card Footer — View Offer Details Button */}
                  <div className="border-t border-slate-100 dark:border-slate-800/80 px-5 sm:px-6 py-3.5 bg-slate-50/50 dark:bg-slate-900/40">
                    <button
                      onClick={() => setActiveOfferModal(isExpanded ? null : offer.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-brand dark:text-brand-300 hover:text-brand-950 dark:hover:text-white transition-colors group/btn"
                    >
                      <span>{isExpanded ? 'Hide Offer Details' : 'View Offer Details'}</span>
                      <ChevronRight
                        className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-0.5'
                          }`}
                      />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom note */}
          <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-8 font-light">
            * All prices are in Sri Lankan Rupees (LKR / Rs.). Discounts apply when enrolling in two or three courses simultaneously.
            Contact us at <a href="tel:+940777635657" className="text-brand dark:text-brand-300 font-semibold hover:underline">0777 635 657</a> for more information.
          </p>
        </section>

      </div>

      {/* 5. Course Details Modal */}
      <AnimatePresence>
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:py-10 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCourseModal(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-5 sm:p-8 z-10 border border-slate-100 dark:border-slate-800 overflow-hidden my-auto"
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
                  <span className="text-[10px] font-bold text-brand bg-brand/5 dark:bg-brand/10 dark:text-brand-300 border border-brand-500/10 px-3 py-1 rounded-full uppercase tracking-wider w-fit block">
                    {activeCourseModal.dept}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white leading-tight">
                    {activeCourseModal.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {activeCourseModal.desc}
                </p>

                {/* Course Metadata Specs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl">
                  <div className="flex items-center gap-3.5">
                    <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-2.5 rounded-xl">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Duration</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-950 dark:text-white">{activeCourseModal.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-2.5 rounded-xl">
                      <Banknote className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Estimated Tuition</span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-950 dark:text-white">{activeCourseModal.fees}</span>
                    </div>
                  </div>
                </div>

                {/* Core Syllabus Modules */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Syllabus Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCourseModal.syllabus.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-350 font-medium">
                        <Award className="h-4 w-4 text-brand dark:text-brand-300 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lecturers Section — supports 1 to 3 lecturers */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    {activeCourseModal.lecturers.length === 1 ? 'Course Lecturer' : `Course Lecturers (${activeCourseModal.lecturers.length})`}
                  </h4>
                  <div className={`grid gap-3 ${activeCourseModal.lecturers.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'
                    }`}>
                    {activeCourseModal.lecturers.map((lec, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-white dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/50"
                      >
                        {/* Avatar */}
                        <div className="h-14 w-14 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                          {lec.image ? (
                            <img
                              src={lec.image}
                              alt={lec.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-brand/10 text-brand dark:text-brand-300 text-xl font-extrabold">
                              {lec.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        {/* Info */}
                        <div className="space-y-0.5 min-w-0">
                          <h5 className="text-sm font-bold text-slate-950 dark:text-white leading-snug">
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
                    className="bg-brand hover:bg-brand-950 text-white text-center font-bold px-6 py-3 rounded-xl shadow-md transition-colors text-xs flex items-center gap-1"
                  >
                    Inquire About This Course
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
