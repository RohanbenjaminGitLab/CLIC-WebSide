import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Compass, Users, CheckCircle, GraduationCap, Star, ArrowLeft } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const stats = [
    { value: '12K+', label: 'Enrolled Students', desc: 'Active scholars globally' },
    { value: '150+', label: 'Expert Faculty', desc: 'PhD holders & researchers' },
    { value: '98%', label: 'Placement Rate', desc: 'In top global enterprises' },
    { value: '45+', label: 'Global Partners', desc: 'Elite corporate & academic links' },
  ];

  const benefits = [
    {
      title: 'Advanced Research Labs',
      desc: 'Work on cutting-edge software engineering, AI frameworks, robotic cells, and interactive digital labs.',
      icon: Award
    },
    {
      title: 'Global Curriculum',
      desc: 'Our modular syllabus is verified and structured with inputs from tier-1 Silicon Valley and international industries.',
      icon: Compass
    },
    {
      title: 'Dedicated Placement Cell',
      desc: 'One-on-one career mock sessions, resume optimizations, and exclusive campus placement drives.',
      icon: Users
    },
    {
      title: 'Flexible Learning Models',
      desc: 'Interactive physical classes combined with live digital resources, library archives, and project workshops.',
      icon: CheckCircle
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Software Engineer at Google',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop',
      quote: 'The Computing program at CLIC Campus completely redesigned my outlook on software systems. The hands-on project reviews and direct industry placements prepared me for a seamless transition into Google.'
    },
    {
      name: 'David Carter',
      role: 'Financial Analyst at Goldman Sachs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop',
      quote: 'The Business track here was highly intensive but immensely rewarding. The case studies and mentoring from veteran industry experts gave me the strategic confidence to succeed in core corporate finance.'
    },
    {
      name: 'Elena Rostova',
      role: 'Creative Director at Figma',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop',
      quote: 'The design workshops at CLIC are structured perfectly to simulate real studio workflows. Learning design thinking alongside modern vector frameworks gave me a critical edge in user-experience engineering.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay testimonials
  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex-grow pt-16">
      
      {/* 1. Full-screen Hero Section */}
      <section className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        
        {/* Parallax Background Video/Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop')",
            backgroundAttachment: 'scroll'
          }}
        />
        {/* Dark overlay with signature plum tone gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-brand-950/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand/20 backdrop-blur-md border border-brand-500/30 px-3.5 py-1.5 rounded-full text-brand-300 text-xs sm:text-sm font-semibold uppercase tracking-wider w-fit"
            >
              <GraduationCap className="h-4.5 w-4.5 text-brand-300" />
              Empowering Future Innovators
            </motion.div>

            {/* Title with Plum signature color scroll effects */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans"
            >
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-400 to-accent">
                Future Campus
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light"
            >
              Step into a premium ecosystem designed for advanced learning, real-world industry applications, and stellar global careers. Your pathway to elite leadership begins here.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-4"
            >
              <Link
                to="/admission"
                className="w-full sm:w-auto bg-brand hover:bg-primary-hover text-white text-center font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-brand/20 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Apply Online Now
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              <Link
                to="/courses"
                className="w-full sm:w-auto bg-slate-900/60 hover:bg-slate-800/80 text-white text-center font-semibold px-8 py-4 rounded-2xl border border-slate-700/50 backdrop-blur-md transition-all duration-300"
              >
                Explore Courses
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Statistics Section */}
      <section className="relative z-25 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 rounded-3xl shadow-xl dark:shadow-2xl p-8 sm:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div 
                key={stat.label} 
                className={`text-center space-y-1 ${
                  idx !== stats.length - 1 ? 'lg:border-r border-slate-100 dark:border-slate-800' : ''
                }`}
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-brand dark:text-brand-300 block">
                  {stat.value}
                </span>
                <h3 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wide">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 px-3 py-1 rounded-full">
              Core Institutional Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Why Choose CLIC Campus?
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light">
              We stand apart through our commitment to practical exposure, cutting-edge software integrations, and robust global placement channels.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 p-8 rounded-3xl shadow-sm hover:shadow-lg dark:hover:shadow-brand/5 group transition-all duration-300 flex items-start gap-5"
              >
                <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-4 rounded-2xl group-hover:bg-brand group-hover:text-white transition-colors duration-300 shrink-0">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Student Testimonials Slider */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16 space-y-3">
            <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 px-3 py-1 rounded-full">
              Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              What Our Students Say
            </h2>
          </div>

          {/* Testimonial Card Slider */}
          <div className="relative bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 sm:p-12 shadow-sm min-h-[320px] flex flex-col justify-between">
            
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-brand-200 dark:text-slate-800 text-6xl font-serif select-none pointer-events-none">
              “
            </div>

            <div className="relative z-10 flex-grow flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed font-light">
                    {testimonials[currentSlide].quote}
                  </p>
                  
                  {/* User Profile info */}
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonials[currentSlide].image} 
                      alt={testimonials[currentSlide].name}
                      className="h-14 w-14 rounded-full object-cover border-2 border-brand/20 shadow-md"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                        {testimonials[currentSlide].name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                        {testimonials[currentSlide].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slider Controls */}
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 pt-6 mt-8">
              
              {/* Stars indicators */}
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-current" />
                ))}
              </div>

              {/* Arrow controls */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-350 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
                  aria-label="Previous Slide"
                >
                  <ArrowLeft className="h-4.5 w-4.5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-350 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-sm"
                  aria-label="Next Slide"
                >
                  <ArrowRight className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 5. CTA Applied Section */}
      <section className="py-20 bg-brand text-white transition-colors relative overflow-hidden">
        
        {/* Subtle decorative circles */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-600/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-800/30 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Shape Your Academic Path?
          </h2>
          <p className="text-base text-brand-100 max-w-xl mx-auto font-light leading-relaxed">
            Submit your application details or inquiries today. Our student onboarding specialists will review your academic background and schedule an online advising call.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/admission"
              className="bg-white hover:bg-slate-100 text-brand text-center font-bold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              Apply Online Today
            </Link>
            <Link
              to="/contact"
              className="border border-white/40 hover:bg-white/10 text-white text-center font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
            >
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
