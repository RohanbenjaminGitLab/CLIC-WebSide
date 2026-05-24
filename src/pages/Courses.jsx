import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, DollarSign, BookOpen, ChevronRight, Award } from 'lucide-react';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [activeCourseModal, setActiveCourseModal] = useState(null);

  // Departments list as requested
  const departments = ['All', 'Computing', 'Business', 'English', 'Engineering', 'Graphic Design'];

  const courses = [
    {
      id: 'bsc-software-engineering',
      title: 'B.Sc. (Hons) in Software Engineering',
      dept: 'Computing',
      duration: '3 Years (Full-time)',
      fees: '$9,500 / Year',
      lecturer: {
        name: 'Dr. Julian Sterling',
        role: 'Professor of Distributed Systems',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
        bio: 'Dr. Sterling has over 15 years of software design experience in Silicon Valley, specializing in heavy-load database pipelines and cloud computing.'
      },
      desc: 'Build advanced programming competencies in full-stack JavaScript, system architecture, database design, and cloud infrastructures.',
      syllabus: ['Advanced Algorithms', 'Cloud System Architecture (AWS/GCP)', 'Mobile Application Development', 'Machine Learning Foundations']
    },
    {
      id: 'msc-data-science',
      title: 'M.Sc. in Data Science & Artificial Intelligence',
      dept: 'Computing',
      duration: '2 Years (Full-time)',
      fees: '$12,000 / Year',
      lecturer: {
        name: 'Dr. Clara Thorne',
        role: 'AI Research Director',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop',
        bio: 'Dr. Thorne acts as the chief research director at the CLIC Computing Incubator, advising on commercial computer vision products.'
      },
      desc: 'A research-intensive postgraduate program covering statistical learning models, big data processing, and neural network pipelines.',
      syllabus: ['Deep Learning & Neural Networks', 'Natural Language Processing', 'Big Data Engineering (Spark)', 'Statistical Modeling & R']
    },
    {
      id: 'bba-finance-marketing',
      title: 'Bachelor of Business Administration (BBA)',
      dept: 'Business',
      duration: '3 Years (Full-time)',
      fees: '$8,000 / Year',
      lecturer: {
        name: 'Prof. Marcus Vance',
        role: 'Corporate Management Fellow',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
        bio: 'Prof. Marcus Vance spent two decades in Goldman Sachs before joining CLIC, mentoring students in corporate valuation models.'
      },
      desc: 'Master corporate finance structures, global marketing mechanics, supply chain configurations, and modern team leadership strategy.',
      syllabus: ['Corporate Financial Analysis', 'Global Consumer Behavior', 'Strategic Management', 'Digital Brand Building']
    },
    {
      id: 'mba-digital-entrepreneurship',
      title: 'MBA in Digital Entrepreneurship',
      dept: 'Business',
      duration: '1.5 Years (Full-time)',
      fees: '$14,500 / Year',
      lecturer: {
        name: 'Sarah Lin',
        role: 'Startup Venture Lead',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
        bio: 'Sarah is an active startup angel investor and corporate accelerator partner, helping early-stage ventures bootstrap efficiently.'
      },
      desc: 'Specifically designed for future startup founders, focusing on SaaS metrics, venture capital models, product growth, and scaling strategies.',
      syllabus: ['Venture Capital & Seed Funding', 'Growth Hacking & SaaS Metrics', 'Product Strategy & MVP Design', 'Interpersonal Negotiations']
    },
    {
      id: 'ba-english-literature',
      title: 'BA in English Literature & Linguistics',
      dept: 'English',
      duration: '3 Years (Full-time)',
      fees: '$6,500 / Year',
      lecturer: {
        name: 'Dr. Evelyn Hawthorne',
        role: 'Associate Linguistics Professor',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop',
        bio: 'Dr. Hawthorne conducts active researches in cognitive semantics, comparative structural linguistics, and historical prose.'
      },
      desc: 'Explore historical English prose, advanced narrative structures, creative writing methodologies, and modern corporate communications.',
      syllabus: ['Historical Prose & Poetry Analysis', 'Modern Syntax & Grammar Systems', 'Creative Copywriting & Editing', 'Cognitive Semantics']
    },
    {
      id: 'beng-robotics',
      title: 'B.Eng. in Robotics & Mechanical Technology',
      dept: 'Engineering',
      duration: '4 Years (Full-time)',
      fees: '$10,500 / Year',
      lecturer: {
        name: 'Prof. Arthur Pendleton',
        role: 'Robotics Engineering Mentor',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
        bio: 'Prof. Arthur is a former NASA aerospace engineer, advising CLIC students on control loop systems and microcontroller structures.'
      },
      desc: 'Learn mechanical designs, electronic circuit fabrication, robotic controller architectures, microcontrollers, and sensor arrays.',
      syllabus: ['Microcontroller Architectures (Arduino/Pi)', 'Control Loop Systems & Sensors', 'Computer Aided CAD & SolidWorks', 'Kinematics & Dynamics']
    },
    {
      id: 'beng-electrical-energy',
      title: 'B.Eng. in Electrical & Sustainable Energy',
      dept: 'Engineering',
      duration: '4 Years (Full-time)',
      fees: '$10,000 / Year',
      lecturer: {
        name: 'Dr. Samuel Cho',
        role: 'Clean Grid Fellow',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop',
        bio: 'Dr. Samuel Cho is a leading consultant for state grid companies, focusing on green transition grids and battery safety design.'
      },
      desc: 'A comprehensive study of high-voltage transmission networks, micro-grid setups, sustainable battery storage architectures, and power grids.',
      syllabus: ['High Voltage Transmission', 'Renewable Microgrid Infrastructure', 'Power Storage & Cell Designs', 'Electronic Power Regulators']
    },
    {
      id: 'ba-graphic-design',
      title: 'BA (Hons) in Graphic Design & UI/UX Art',
      dept: 'Graphic Design',
      duration: '3 Years (Full-time)',
      fees: '$8,500 / Year',
      lecturer: {
        name: 'Elena Rostova',
        role: 'Head of Visual Communications',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
        bio: 'Elena has managed design teams at tech unicorns. She structures the course to mimic professional agency workflows.',
      },
      desc: 'Develop deep expertise in visual branding, color logic, vector layouts, visual systems, responsive wireframes, and interactive prototyping.',
      syllabus: ['Advanced Figma Prototyping', 'Color Theory & Brand Visuals', 'Vector Graphic Design (Illustrator)', 'Responsive Web Interface Design']
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
    <div className="w-full flex-grow pt-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
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
              className="w-full bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-white placeholder-slate-400 pl-12 pr-10 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 transition-colors text-sm"
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
                className={`text-xs font-semibold px-4.5 py-2.5 rounded-xl border transition-all duration-300 ${
                  selectedDept === dept
                    ? 'bg-brand border-brand text-white shadow-md shadow-brand/10'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
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
                <div className="border-t border-slate-100 dark:border-slate-800/80 px-6 py-4 bg-slate-50/50 dark:bg-slate-900/40 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src={course.lecturer.image}
                      alt={course.lecturer.name}
                      className="h-8 w-8 rounded-full object-cover border border-slate-200 dark:border-slate-800"
                    />
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {course.lecturer.name.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => setActiveCourseModal(course)}
                    className="text-xs font-bold text-brand dark:text-brand-300 flex items-center gap-0.5 hover:gap-1 transition-all group/btn"
                  >
                    View Details
                    <ChevronRight className="h-4.5 w-4.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* 5. Course Details Modal */}
      <AnimatePresence>
        {activeCourseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
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
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 border border-slate-100 dark:border-slate-800 overflow-hidden"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setActiveCourseModal(null)}
                className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 p-2 rounded-xl transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6 max-h-[80vh] overflow-y-auto pr-1">
                
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl">
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
                    <div className="bg-emerald-500/5 text-emerald-500 dark:text-emerald-400 p-2.5 rounded-xl">
                      <DollarSign className="h-5 w-5" />
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

                {/* Lecturer Card Details */}
                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Course Director & Lecturer</h4>
                  <div className="flex flex-col sm:flex-row gap-4 bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/50">
                    <img
                      src={activeCourseModal.lecturer.image}
                      alt={activeCourseModal.lecturer.name}
                      className="h-16 w-16 rounded-full object-cover border border-slate-200 dark:border-slate-800 shrink-0 self-start sm:self-center"
                    />
                    <div className="space-y-1">
                      <h5 className="text-sm font-bold text-slate-950 dark:text-white">
                        {activeCourseModal.lecturer.name}
                      </h5>
                      <span className="text-[10px] font-bold text-brand dark:text-brand-300 block uppercase tracking-wide">
                        {activeCourseModal.lecturer.role}
                      </span>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                        {activeCourseModal.lecturer.bio}
                      </p>
                    </div>
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
                    className="bg-brand hover:bg-primary-hover text-white text-center font-bold px-6 py-3 rounded-xl shadow-md transition-colors text-xs flex items-center gap-1"
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
