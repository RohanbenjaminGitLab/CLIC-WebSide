import { motion } from 'framer-motion';
import { Target, Compass, Award, Calendar, BookOpen, UserCheck, ShieldAlert, Zap } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: '2012',
      title: 'Foundation Stone',
      desc: 'CLIC Campus was established with a singular focus: merging professional training with direct tech careers, launching with just 2 branches.'
    },
    {
      year: '2016',
      title: 'Global Accreditation Hub',
      desc: 'Formed elite partnerships with British and American standard educational bodies, expanding computing and engineering programs.'
    },
    {
      year: '2020',
      title: 'Advanced AI & Research Labs',
      desc: 'Inaugurated our multi-million dollar computing research centers and cloud labs, establishing state-of-the-art visual design clusters.'
    },
    {
      year: '2023',
      title: 'Innovation Incubation Center',
      desc: 'Launched the Student Startup Fund, allowing students to prototype and seek corporate funding right within the campus incubation cells.'
    },
    {
      year: '2026',
      title: 'CLIC Smart Campus Launch',
      desc: 'Completed our fully eco-friendly digital campus hosting 12,000+ national and international scholars in state-of-the-art premises.'
    }
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop',
      title: 'Main Academic Wing',
      category: 'Campus Grounds'
    },
    {
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
      title: 'Collaborative Study Spaces',
      category: 'Student Hub'
    },
    {
      url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop',
      title: 'Central Digital Archive',
      category: 'Library'
    },
    {
      url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600&auto=format&fit=crop',
      title: 'Advanced Computing Center',
      category: 'Research Labs'
    },
    {
      url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop',
      title: 'Engineering Workshop Cell',
      category: 'Robotics Wing'
    },
    {
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
      title: 'Graphic Design Studio',
      category: 'Arts Wing'
    }
  ];

  return (
    <div className="w-full flex-grow pt-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 px-3 py-1 rounded-full">
            Our Legacy & Leadership
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Shaping Leaders of <br />
            <span className="text-brand dark:text-brand-300">Tomorrow</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            CLIC Campus represents the pinnacle of modern academic instruction, combining intensive academic rigor with hands-on technical internships.
          </p>
        </div>

        {/* 1. Vision & Mission Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-brand-50/50 dark:bg-brand-950/20 translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-300" />
            <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-4 rounded-2xl w-fit mb-6">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-3">Our Mission</h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              To provide affordable, internationally accredited, and market-driven higher education. We actively bridge the skills gap by educating students through real-world labs, robust internship networks, and industry mentors.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
          >
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-cyan-50/50 dark:bg-cyan-950/10 translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-300" />
            <div className="bg-cyan-500/5 dark:bg-cyan-950/30 text-cyan-500 dark:text-cyan-400 p-4 rounded-2xl w-fit mb-6">
              <Compass className="h-7 w-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-950 dark:text-white mb-3">Our Vision</h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              To be the premier globally recognized Smart Campus, driving sustainable innovation and research. We visualize a future where every CLIC scholar has immediate access to startup ecosystems, placement pipelines, and deep technical competencies.
            </p>
          </motion.div>
        </section>

        {/* 2. Principal/Director Message Section */}
        <section className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl p-8 sm:p-12 mb-24 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-brand/10 dark:bg-brand/20 rounded-2xl translate-x-3 translate-y-3 z-0 group-hover:translate-x-1.5 group-hover:translate-y-1.5 transition-transform duration-350" />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                  alt="Dr. Arlene Vance"
                  className="relative z-10 w-64 h-80 object-cover rounded-2xl border-4 border-white dark:border-slate-800 shadow-md"
                />
              </div>
            </div>

            {/* Message Details Column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="space-y-1">
                <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 px-3 py-1 rounded-full">
                  Director's Address
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white">
                  Welcome from our Managing Director
                </h3>
              </div>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 italic leading-relaxed font-light">
                "Welcome to the CLIC ecosystem. Here at CLIC Campus, our singular focus is to craft a highly empowering academic ecosystem that matches modern industry workflows. We believe education must extend far beyond theoretical textbooks; our curriculum requires students to solve authentic problems, operate complex engineering cells, build software architectures, and participate in active industry projects."
              </p>
              <div>
                <h4 className="text-base font-bold text-slate-950 dark:text-white">Dr. Arlene Vance</h4>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                  Managing Director, CLIC Academic Senate
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Historical Timeline Section */}
        <section className="mb-24">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
              Institutional Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-550 dark:text-slate-455 font-light">
              Trace our developmental pathway from a local tech institute into a powerhouse smart campus.
            </p>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-800 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 max-w-3xl space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle Pin Marker */}
                  <div className="absolute -left-[5px] md:left-1/2 md:-translate-x-1.5 h-3.5 w-3.5 rounded-full bg-brand dark:bg-brand-300 border-4 border-white dark:border-slate-950 z-20 shadow-md" />

                  {/* Spacer for structural balance */}
                  <div className="hidden md:block w-1/2 px-8" />

                  {/* Timeline Card */}
                  <div className="w-full md:w-1/2 px-4 md:px-8">
                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative">
                      <span className="absolute -top-3.5 left-6 bg-brand dark:bg-brand-900 border border-brand-500/25 text-white text-xs font-bold px-3 py-0.5 rounded-full">
                        {item.year}
                      </span>
                      <h4 className="text-base font-bold text-slate-950 dark:text-white mt-1 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 4. Campus Gallery Section */}
        <section id="gallery" className="scroll-mt-24">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
              Campus Gallery
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light">
              Explore our smart ecosystem housing state-of-the-art facilities designed to inspire daily.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-2xl group shadow-sm cursor-pointer aspect-video"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] text-brand-300 uppercase tracking-widest font-bold">
                    {image.category}
                  </span>
                  <h4 className="text-sm font-semibold text-white">
                    {image.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
