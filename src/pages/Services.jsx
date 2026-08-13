import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Home, Briefcase, Users, Award, ShieldCheck, Compass, CheckCircle, ChevronRight, X, Clock, MapPin, Sparkles } from 'lucide-react';

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedTab, setSelectedTab] = useState('All');

  const categories = ['All', 'Academic & Career', 'Living & Facilities', 'Financial & Wellness'];

  const servicesList = [
    {
      id: 'campus-library',
      category: 'Academic & Career',
      title: '24/7 Digital & Physical Library',
      shortDesc: 'Access over 250,000 physical volumes, digital journal subscriptions, quiet pods, and high-speed research workbenches.',
      fullDesc: 'Our campus library serves as the intellectual hub of CLIC. Equipped with silent study zones, collaborative group rooms, automated loan kiosks, and instant access to IEEE, ACM, and Springer journals.',
      icon: BookOpen,
      timing: 'Open 24 Hours / 7 Days',
      location: 'Central Academic Block, Floor 2 & 3',
      features: [
        'High-Speed Wi-Fi & Desktop Terminal Stations',
        'Private Collaborative Meeting Pods',
        'Direct Access to International E-Journal Databases',
        'Automated RFID Book Reservation Kiosks'
      ]
    },
    {
      id: 'student-hostel',
      category: 'Living & Facilities',
      title: 'Student Hostel & Residence',
      shortDesc: 'Modern, fully furnished single and shared living quarters with 24/7 security, climate control, and on-site dining halls.',
      fullDesc: 'CLIC Residence Halls provide a safe, vibrant living community just 2 minutes from lecture rooms. Features climate-controlled rooms, weekly housekeeping, high-speed fiber internet, and nutritious meal plans.',
      icon: Home,
      timing: '24/7 Security & Warden Desk',
      location: 'South Campus Quadrangle',
      features: [
        'Air-Conditioned Single & Double En-Suite Rooms',
        'Balanced Multi-Cuisine Dining Facilities',
        'Laundry & Recreation Lounge Complexes',
        '24/7 Biometric Access & CCTV Monitoring'
      ]
    },
    {
      id: 'career-placement',
      category: 'Academic & Career',
      title: 'Career & Placement Cell',
      shortDesc: 'Dedicated career advisors offering resume optimization, mock interviews, portfolio reviews, and top tier corporate placement drives.',
      fullDesc: 'Our placement cell bridges scholars directly with leading global tech companies, finance enterprises, and research institutions. Benefit from personal career roadmaps and exclusive campus recruiting days.',
      icon: Briefcase,
      timing: 'Mon – Fri: 09:00 AM – 05:00 PM',
      location: 'Student Innovation Center, Hall A',
      features: [
        'One-on-One Technical Mock Interviews',
        'Resume & LinkedIn Profile Audits',
        'Exclusive Campus Placement Drives',
        'Corporate Internship Matching Portal'
      ]
    },
    {
      id: 'student-counseling',
      category: 'Financial & Wellness',
      title: 'Academic Advising & Support',
      shortDesc: 'Personalized course planning, confidential mental health counseling, and peer tutoring networks to foster student success.',
      fullDesc: 'We believe student wellbeing is foundational to academic excellence. Our accredited counselors and academic advisors guide students through degree mapping, stress management, and peer study groups.',
      icon: Users,
      timing: 'Mon – Sat: 08:30 AM – 06:00 PM',
      location: 'Wellness & Student Support Suite',
      features: [
        'Confidential Mental Health & Wellness Sessions',
        'Peer-to-Peer Academic Tutoring Network',
        'Credit Load & Graduation Path Counseling',
        'Accessibility & Learning Accommodations'
      ]
    },
    {
      id: 'scholarships-grants',
      category: 'Financial & Wellness',
      title: 'Scholarships & Financial Grants',
      shortDesc: 'Merit-based tuition waivers up to 50%, need-based grants, research fellowships, and flexible semester payment plans.',
      fullDesc: 'CLIC Campus is committed to ensuring high-quality education remains accessible. We offer merit scholarships for high achievers, need-based financial aid, and on-campus work-study assistantships.',
      icon: Award,
      timing: 'Mon – Fri: 09:00 AM – 04:30 PM',
      location: 'Administration Wing, Office 104',
      features: [
        'Merit Scholarships (Up to 50% Tuition Waiver)',
        'Need-Based Emergency Financial Assistance',
        'On-Campus Student Work-Study Positions',
        'Flexible Semester Installment Payment Plans'
      ]
    },
    {
      id: 'campus-clubs',
      category: 'Living & Facilities',
      title: 'Clubs, Sports & Campus Life',
      shortDesc: 'Vibrant student clubs including Robotics Society, Debate Union, Sports Leagues, Music Ensembles, and Annual Tech Fests.',
      fullDesc: 'Engage beyond the classroom! Join over 20+ active student clubs, participate in inter-university robotics tournaments, train in our indoor sports arena, and organize campus cultural festivals.',
      icon: Compass,
      timing: 'Mon – Sun: 07:00 AM – 10:00 PM',
      location: 'Student Activity Complex & Sports Arena',
      features: [
        '20+ Recognized Student Clubs & Societies',
        'Indoor Sports Complex & Fitness Gym',
        'Annual National Hackathons & Tech Expos',
        'Cultural Art, Drama, & Music Ensembles'
      ]
    }
  ];

  const filteredServices = servicesList.filter((service) => 
    selectedTab === 'All' || service.category === selectedTab
  );

  return (
    <div className="w-full flex-grow pt-20 sm:pt-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-brand dark:text-brand-300" />
            Campus Life & Welfare
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Comprehensive <br />
            <span className="text-brand dark:text-brand-300">Student Services</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            We provide a world-class supportive ecosystem covering 24/7 library archives, comfortable residence halls, career placement centers, and wellness counseling.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedTab(cat)}
              className={`text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl border transition-all duration-300 ${
                selectedTab === cat
                  ? 'bg-brand border-brand text-white shadow-md shadow-brand/10'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-brand-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <AnimatePresence>
            {filteredServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-lg dark:hover:shadow-brand/5 group transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="p-8 space-y-5">
                    {/* Icon & Category Tag */}
                    <div className="flex items-center justify-between">
                      <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-3.5 rounded-2xl group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold text-brand bg-brand/5 dark:bg-brand/10 dark:text-brand-300 border border-brand/20 px-3 py-1 rounded-full uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-slate-950 dark:text-white group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Quick Specs */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <Clock className="h-3.5 w-3.5 text-brand shrink-0" />
                        <span>{service.timing}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <MapPin className="h-3.5 w-3.5 text-brand shrink-0" />
                        <span>{service.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="border-t border-slate-100 dark:border-slate-800 px-8 py-4 bg-brand-50/20 dark:bg-slate-900/40 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Available to all scholars
                    </span>
                    <button
                      onClick={() => setActiveModal(service)}
                      className="text-xs font-bold text-brand dark:text-brand-300 flex items-center gap-1 hover:gap-1.5 transition-all group/btn"
                    >
                      View Details
                      <ChevronRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Quick Inquiry Callout Banner */}
        <section className="bg-brand text-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-600/30 blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold">Need Help or Service Assistance?</h3>
            <p className="text-sm sm:text-base text-brand-100 font-light leading-relaxed">
              Our Student Support Helpdesk is available daily to answer questions regarding hostel allocations, library access cards, scholarship waivers, and career counseling slots.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="bg-white text-brand hover:bg-slate-100 font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl shadow-md transition-colors text-sm"
              >
                Contact Student Helpdesk
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:py-10 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-5 sm:p-8 z-10 border border-slate-100 dark:border-slate-800 overflow-hidden my-auto"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 p-2 rounded-xl transition-colors"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-6 max-h-[75vh] sm:max-h-[80vh] overflow-y-auto pr-1">
                <div className="flex items-center gap-3">
                  <div className="bg-brand/5 text-brand dark:text-brand-300 p-3 rounded-2xl">
                    {(() => {
                      const ModalIcon = activeModal.icon;
                      return <ModalIcon className="h-6 w-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand uppercase tracking-wider block">
                      {activeModal.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">
                      {activeModal.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {activeModal.fullDesc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-brand shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Hours</span>
                      <span className="text-xs font-semibold text-slate-950 dark:text-white">{activeModal.timing}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-brand shrink-0" />
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Location</span>
                      <span className="text-xs font-semibold text-slate-950 dark:text-white">{activeModal.location}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Key Service Amenities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeModal.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
                        <CheckCircle className="h-4 w-4 text-brand shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-6 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-700"
                  >
                    Close Window
                  </button>
                  <Link
                    to="/contact"
                    onClick={() => setActiveModal(null)}
                    className="bg-brand hover:bg-brand-950 text-white font-bold px-6 py-3 rounded-xl shadow-md transition-colors text-xs flex items-center gap-1"
                  >
                    Inquire About This Service
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
