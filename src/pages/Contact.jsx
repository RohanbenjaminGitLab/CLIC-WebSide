import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, XCircle, Copy, Check, MessageSquare, Sparkles, ChevronRight } from 'lucide-react';
import { sendInquiryEmail } from '../services/email';
import { courses } from '../data/coursesData';

const COURSES_LIST = [
  'General Academic Inquiry',
  ...courses.map((c) => c.title),
  'Smart Combo (English + IT)',
  'Creative Language Combo (English + Graphic Designing)',
  'Tech & Design Combo (IT + Graphic Designing)',
  'Digital Professional Combo (English + Web Designing)',
  'Triple Combo (English + IT + Sinhala)',
  'Triple Power Combo (English + IT + Graphic Designing)'
];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const courseParam = searchParams.get('course');
  
  // Accept any incoming courseParam or default to General Academic Inquiry
  const initialCourse = courseParam ? decodeURIComponent(courseParam) : 'General Academic Inquiry';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: initialCourse,
    mode: 'Full-time & Part-time',
    message: ''
  });

  // Update if URL changes
  useEffect(() => {
    if (courseParam) {
      const timer = setTimeout(() => {
        setFormData((prev) => ({ ...prev, course: decodeURIComponent(courseParam) }));
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [courseParam]);

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, success: true, message: '' });
  const [copyStatus, setCopyStatus] = useState({ email: false, phone: false });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopyStatus((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => {
      setCopyStatus((prev) => ({ ...prev, [type]: false }));
    }, 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await sendInquiryEmail(formData);

      if (response.success) {
        setToast({
          show: true,
          success: true,
          message: response.message
        });

        // Reset Form
        setFormData({
          name: '',
          email: '',
          phone: '',
          course: 'General Academic Inquiry',
          mode: 'Full-time & Part-time',
          message: ''
        });
      } else {
        setToast({
          show: true,
          success: false,
          message: response.message
        });
      }
    } catch {
      setToast({
        show: true,
        success: false,
        message: 'Something went wrong. Please check your inputs and try again.'
      });
    } finally {
      setLoading(false);

      // Auto-hide toast after 5 seconds
      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 5000);
    }
  };

  return (
    <div className="w-full flex-grow pt-20 sm:pt-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-14">

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 border border-brand/10 px-4 py-1.5 rounded-full inline-block">
            Admissions & Student Advisory
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Connect with <span className="text-brand dark:text-brand-300">CLIC Campus</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">
            Have questions regarding course modules, diploma certificates, tuition fees, or batch schedules? Submit the admissions inquiry form below or reach out directly to our student advisory desk in Akkaripattu.
          </p>
        </div>

        {/* 1. Main Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mb-20 items-start">

          {/* Inquiry Form (Columns 1-7) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xs space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  Academic Inquiry & Registration Form
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Our student counselors will respond with complete syllabus details within 24 hours.
                </p>
              </div>
              <Sparkles className="h-5 w-5 text-brand dark:text-brand-300 shrink-0 hidden sm:block" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="name-input" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Full Name <span className="text-brand">*</span>
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. S. Mohammad"
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand text-sm"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label htmlFor="email-input" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Email Address <span className="text-brand">*</span>
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. student@gmail.com"
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div className="space-y-1">
                  <label htmlFor="phone-input" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Contact / Mobile No. <span className="text-brand">*</span>
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 077 123 4567"
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand text-sm"
                  />
                </div>

                {/* Preferred Study Mode */}
                <div className="space-y-1">
                  <label htmlFor="mode-select" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    Preferred Batch Mode
                  </label>
                  <select
                    id="mode-select"
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand text-sm cursor-pointer"
                  >
                    <option value="Full-time & Part-time">Full-time (Weekday Morning/Afternoon)</option>
                    <option value="Part-time (Evening)">Part-time (Evening Batches)</option>
                    <option value="Weekend Special">Weekend Batches (Saturday & Sunday)</option>
                  </select>
                </div>
              </div>

              {/* Course Interest */}
              <div className="space-y-1">
                <label htmlFor="course-select" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Program or Combo Offer of Interest <span className="text-brand">*</span>
                </label>
                <select
                  id="course-select"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand text-sm cursor-pointer"
                >
                  {/* If the current course is not in COURSES_LIST, append it at the top */}
                  {!COURSES_LIST.includes(formData.course) && formData.course && (
                    <option value={formData.course}>{formData.course}</option>
                  )}
                  {COURSES_LIST.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message-input" className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Inquiry Message or Questions <span className="text-brand">*</span>
                </label>
                <textarea
                  id="message-input"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your educational background, timing preferences, or specific questions about the course modules..."
                  className="w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder-slate-400 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand text-sm leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand hover:bg-brand-800 active:bg-brand-950 disabled:bg-slate-300 dark:disabled:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                {loading ? (
                  <>
                    <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    <span>Submitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>Submit Inquiry to CLIC Campus</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center font-light">
                🔒 Your personal information is kept confidential and used solely for admissions guidance.
              </p>
            </form>
          </div>

          {/* Quick Contact Info Cards (Columns 8-12) */}
          <div className="lg:col-span-5 space-y-5">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Direct Contact & Advisory Channels
            </h3>

            {/* Campus Address Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 rounded-2xl flex gap-4 shadow-xs">
              <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Campus Location</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  1st Floor, Pradesa Saba Market Complex,<br />
                  Sagama Road, Akkaraipattu, Sri Lanka
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=7.2157778,81.8491944"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-brand dark:text-brand-300 hover:underline inline-block pt-1"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Support Email Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 rounded-2xl flex gap-4 shadow-xs relative group">
              <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1 flex-1 min-w-0 pr-10">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Official Admissions Email</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 font-light truncate">
                  cliccampusinfo@gmail.com
                </p>
                <span className="text-[11px] text-slate-400 block">Typical response within 24 hours</span>
              </div>
              <button
                onClick={() => handleCopy('cliccampusinfo@gmail.com', 'email')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-500 hover:text-brand transition-colors shrink-0"
                aria-label="Copy Email Address"
                title="Copy Email"
              >
                {copyStatus.email ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Hotline Phone Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 rounded-2xl flex gap-4 shadow-xs relative group">
              <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1 flex-1 min-w-0 pr-10">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Student Admissions Hotline</h4>
                <a
                  href="tel:+94777635657"
                  className="text-sm font-extrabold text-brand dark:text-brand-300 hover:underline block"
                >
                  +94 77 763 5657
                </a>
                <span className="text-[11px] text-slate-400 block">Direct line to Student Advisory Desk</span>
              </div>
              <button
                onClick={() => handleCopy('0777635657', 'phone')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg text-slate-500 hover:text-brand transition-colors shrink-0"
                aria-label="Copy Phone Number"
                title="Copy Hotline"
              >
                {copyStatus.phone ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Direct WhatsApp Action */}
            <a
              href="https://wa.me/94777635657?text=Hello%20CLIC%20Campus%2C%20I%20would%20like%20to%20inquire%20about%20course%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-5 rounded-2xl flex items-center justify-between shadow-md transition-all group"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-white/20">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold leading-tight">Chat with Admissions on WhatsApp</h4>
                  <p className="text-xs text-white/90">Instant replies during campus working hours</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Working Hours Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-5 rounded-2xl flex gap-4 shadow-xs">
              <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Campus Desk Working Hours</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-light">
                  Monday – Sunday: 08:30 AM – 05:30 PM <br />
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">Open 7 days a week for admissions inquiries</span>
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 2. Interactive Campus Location Map */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-brand dark:text-brand-300" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Campus Location Map</h3>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=7.2157778,81.8491944"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-brand dark:text-brand-300 hover:underline"
            >
              Get Directions →
            </a>
          </div>
          
          <div className="bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 p-2 sm:p-3 rounded-3xl shadow-xs overflow-hidden h-[280px] sm:h-[350px] md:h-[420px]">
            <iframe
              title="CLIC Campus Location — Akkaraipattu"
              src="https://maps.google.com/maps?q=Akkaraipattu+Pradesa+Sabha+Market+Complex+Sagama+Road+Sri+Lanka&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full rounded-2xl border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-4 sm:p-5 rounded-2xl w-[calc(100vw-2rem)] max-w-sm"
          >
            {toast.success ? (
              <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0" />
            ) : (
              <XCircle className="h-6 w-6 text-rose-500 shrink-0" />
            )}
            <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-white leading-snug">
              {toast.message}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
