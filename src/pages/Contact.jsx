import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, XCircle, Copy, Check } from 'lucide-react';
import { sendInquiryEmail } from '../services/email';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'General Inquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, success: true, message: '' });
  const [copyStatus, setCopyStatus] = useState({ email: false, phone: false });

  const coursesList = [
    'General Inquiry',
    'B.Sc. (Hons) in Software Engineering',
    'M.Sc. in Data Science & Artificial Intelligence',
    'Bachelor of Business Administration (BBA)',
    'MBA in Digital Entrepreneurship',
    'BA in English Literature & Linguistics',
    'B.Eng. in Robotics & Mechanical Technology',
    'B.Eng. in Electrical & Sustainable Energy',
    'BA (Hons) in Graphic Design & UI/UX Art'
  ];

  // Pre-populate course selection if passed via search query parameters
  useEffect(() => {
    const courseParam = searchParams.get('course');
    if (courseParam && coursesList.includes(courseParam)) {
      setFormData((prev) => ({ ...prev, course: courseParam }));
    }
  }, [searchParams]);

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
          course: 'General Inquiry',
          message: ''
        });
      } else {
        setToast({
          show: true,
          success: false,
          message: response.message
        });
      }
    } catch (err) {
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
    <div className="w-full flex-grow pt-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 px-3 py-1 rounded-full">
            Connect & Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Reach Out to <br />
            <span className="text-brand dark:text-brand-300">CLIC Campus</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Have questions regarding entry scores, fees structure, or accommodations? Fill out the interactive inquiry form below, and our support team will reach back inside 24 hours.
          </p>
        </div>

        {/* 1. Interactive Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-24 items-start">
          
          {/* Inquiry Form (Columns 1, 2, 3) */}
          <div className="lg:col-span-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">Submit Academic Inquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-white placeholder-slate-400 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-sm"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@domain.com"
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-white placeholder-slate-400 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Number */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +1 (555) 019-2834"
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-white placeholder-slate-400 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-sm"
                  />
                </div>

                {/* Course Selection */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Course Interest</label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-white px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-sm"
                  >
                    {coursesList.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Inquiry Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your questions, academic scores, or specific inquiries here..."
                  className="w-full bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-white placeholder-slate-400 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-brand-500 text-sm leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand hover:bg-primary-hover disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white disabled:text-slate-400 font-bold py-4 rounded-xl shadow-md transition-all duration-350 flex items-center justify-center gap-2 text-sm"
              >
                {loading ? (
                  <>
                    <span className="animate-spin h-4.5 w-4.5 border-2 border-brand border-t-transparent rounded-full" />
                    Submitting Inquiry...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Online Form
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Quick Contact Info Cards (Columns 4 & 5) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">Contact Information</h3>
            
            {/* Campus Address Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl flex gap-4 shadow-sm">
              <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                <MapPin className="h-5.5 w-5.5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-950 dark:text-white">Campus Address</h4>
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed font-light">
                  102 University Avenue, Academic Square, <br /> New York, NY 10003, USA
                </p>
              </div>
            </div>

            {/* Support Email Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl flex gap-4 shadow-sm relative group">
              <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                <Mail className="h-5.5 w-5.5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-950 dark:text-white">Support Email</h4>
                <p className="text-xs text-slate-550 dark:text-slate-400 font-light">
                  studentsupport@cliccampus.edu
                </p>
              </div>
              <button
                onClick={() => handleCopy('studentsupport@cliccampus.edu', 'email')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 p-2 rounded-lg text-slate-455 hover:text-brand transition-colors"
                aria-label="Copy Email"
              >
                {copyStatus.email ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Hotline Phone Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl flex gap-4 shadow-sm relative group">
              <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                <Phone className="h-5.5 w-5.5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-950 dark:text-white">Student Admissions Hotline</h4>
                <p className="text-xs text-slate-555 dark:text-slate-400 font-light">
                  +1 (800) 254-2267
                </p>
              </div>
              <button
                onClick={() => handleCopy('+1 (800) 254-2267', 'phone')}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800 p-2 rounded-lg text-slate-455 hover:text-brand transition-colors"
                aria-label="Copy Phone"
              >
                {copyStatus.phone ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-5 rounded-2xl flex gap-4 shadow-sm">
              <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-3 rounded-xl h-11 w-11 flex items-center justify-center shrink-0">
                <Clock className="h-5.5 w-5.5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-950 dark:text-white">Office Opening Hours</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  Monday – Friday: 08:30 AM – 05:30 PM <br />
                  Saturday: 09:00 AM – 01:00 PM (Closed on Sunday)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Embedded Google Maps Container */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-5.5 w-5.5 text-brand dark:text-brand-300" />
            <h3 className="text-lg font-bold text-slate-950 dark:text-white">Campus Location Map</h3>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-3 rounded-3xl shadow-sm overflow-hidden h-[400px]">
            <iframe
              title="CLIC Campus Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540209673!2d-73.99676832342598!3d40.74844047138903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2slk!4v1709400000000!5m2!1sen!2slk"
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
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl p-4.5 rounded-2xl w-full max-w-sm"
          >
            {toast.success ? (
              <CheckCircle className="h-6 w-6 text-emerald-500 shrink-0" />
            ) : (
              <XCircle className="h-6 w-6 text-red-500 shrink-0" />
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
