import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, CheckCircle, ChevronDown, Download, AlertCircle, HelpCircle, Award, ClipboardCheck, BookOpen } from 'lucide-react';

export default function Admission() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const steps = [
    {
      title: 'Online Inquiry',
      desc: 'Fill out the digital inquiry form under the Contact page with your selected course and academic interests.',
      icon: FileText
    },
    {
      title: 'Document Review',
      desc: 'Our academic review committee will audit your prior transcripts, certificates, and ID documents.',
      icon: ClipboardCheck
    },
    {
      title: 'Advising Call',
      desc: 'Participate in a 15-minute diagnostic call with an advisor to align on career goals and placement options.',
      icon: BookOpen
    },
    {
      title: 'Securing Seat',
      desc: 'Receive your conditional admission offer letter, submit tuition deposit, and register for student hostel/services.',
      icon: CheckCircle
    }
  ];

  const requirements = [
    {
      title: 'Academic Transcripts',
      details: 'High school diploma or undergraduate certificates showing strong GPA performance.',
      criteria: 'Attested copy of original reports'
    },
    {
      title: 'Language Competency',
      details: 'For international students, standard English certification or campus diagnostic clearance.',
      criteria: 'IELTS 6.0+ / TOEFL 78 / Internal Test'
    },
    {
      title: 'Personal Statement',
      details: 'A brief 500-word essay mapping out your learning goals, background, and career plans.',
      criteria: 'Required for Scholarship consideration'
    },
    {
      title: 'Identifications',
      details: 'Clear color copy of your passport bio page or national ID, along with two recent passport photos.',
      criteria: 'Valid for at least 6 months'
    }
  ];

  const faqs = [
    {
      q: 'Are scholarship models available for incoming scholars?',
      a: 'Yes, CLIC Campus offers Merit-Based Scholarships (up to 50% tuition waiver) based on outstanding prior GPAs and personal portfolios. We also provide Need-Based financial assistance options. You can highlight your eligibility during Step 3 (Advising Call).'
    },
    {
      q: 'What is the academic calendar schedule at CLIC?',
      a: 'We host two major intake terms per academic year: Fall Term starting in September, and Spring Term starting in January. It is highly recommended to complete your online inquiry at least 45 days prior to the term starting.'
    },
    {
      q: 'Is student hostel accommodation available on campus?',
      a: 'Absolutely. CLIC Campus operates premium hostel facilities for male and female students within a 5-minute walking distance from the lecture rooms. Hostels include high-speed Wi-Fi, laundry facilities, study lounges, and 24/7 campus security.'
    },
    {
      q: 'Can I transfer course credits from another university?',
      a: 'Credit transfers are allowed subject to matching curriculum standards. Our academic senate will review your course descriptions and syllabi from your prior institution to determine transfer equivalence.'
    }
  ];

  const handleDownload = () => {
    setDownloading(true);
    setDownloadSuccess(false);
    
    // Simulate prospectus PDF file generation and download delay
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      
      // Auto-reset success alert
      setTimeout(() => setDownloadSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="w-full flex-grow pt-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 px-3 py-1 rounded-full">
            Onboarding & Admission
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Begin Your Academic <br />
            <span className="text-brand dark:text-brand-300">Admissions Pathway</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Follow our streamlined onboarding steps to secure your enrollment. Review eligibility criteria, download the digital catalog, or read our admission FAQ guides.
          </p>
        </div>

        {/* 1. Admission Stepper Process */}
        <section className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl p-6 sm:p-10 shadow-sm mb-16">
          <div className="text-center max-w-md mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Our 4-Step Application Stepper</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">Click any step card below to view detailed timelines.</p>
          </div>

          {/* Stepper Header Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-4.5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-brand/5 border-brand text-slate-950 dark:text-white shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 transition-colors ${
                    isActive ? 'bg-brand text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest block">Step 0{idx + 1}</span>
                    <h4 className="text-sm font-bold mt-0.5">{step.title}</h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stepper Selected Step Content */}
          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-brand bg-brand/5 dark:bg-brand/10 dark:text-brand-300 border border-brand-500/10 px-2.5 py-0.5 rounded-full uppercase">
                    Detailed Timeline
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-950 dark:text-white">
                  {steps[activeStep].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                  {steps[activeStep].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* 2. Requirements & Brochure Download Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 items-start">
          
          {/* Eligibility Requirements (Columns 1 & 2) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-brand dark:text-brand-300" />
              Minimum Admission Eligibility Requirements
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {requirements.map((req) => (
                <div
                  key={req.title}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-3"
                >
                  <h4 className="text-sm font-bold text-slate-950 dark:text-white">
                    {req.title}
                  </h4>
                  <p className="text-xs text-slate-555 dark:text-slate-400 leading-relaxed font-light">
                    {req.details}
                  </p>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block bg-slate-50 dark:bg-slate-950/60 p-2 rounded-lg border border-slate-100 dark:border-slate-800/50">
                    Criteria: {req.criteria}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Download Brochure Card (Column 3) */}
          <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-8 rounded-3xl shadow-sm text-center space-y-6 lg:sticky lg:top-24">
            <div className="bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 p-5 rounded-2xl w-fit mx-auto">
              <Award className="h-10 w-10" />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Download Academic Brochure</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                Retrieve our digital prospectus (PDF) featuring full course details, credit loads, hostel structures and internship partners.
              </p>
            </div>

            <button
              onClick={handleDownload}
              disabled={downloading}
              className={`w-full text-xs font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 ${
                downloading
                  ? 'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed shadow-none'
                  : 'bg-brand hover:bg-primary-hover text-white'
              }`}
            >
              {downloading ? (
                <>
                  <span className="animate-spin h-4.5 w-4.5 border-2 border-brand border-t-transparent rounded-full" />
                  Generating Catalog...
                </>
              ) : (
                <>
                  <Download className="h-4.5 w-4.5" />
                  Download prospectus flyer
                </>
              )}
            </button>

            <AnimatePresence>
              {downloadSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  className="bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 text-xs font-semibold p-3.5 rounded-xl border border-emerald-500/20"
                >
                  Prospectus download successful! Check your system download folder.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* 3. FAQ Accordion Section */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 dark:text-white flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-brand dark:text-brand-300" />
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light">
              Find instant answers regarding scholarship models, credit transfers, and hostel configurations.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-950 dark:text-white"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-555 dark:text-slate-400 font-light leading-relaxed border-t border-slate-50 dark:border-slate-900/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
