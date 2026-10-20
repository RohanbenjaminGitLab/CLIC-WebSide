import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Phone, Mail, ArrowRight, Sparkles, Check } from 'lucide-react';
import { staffMembers } from '../data/staffData';

// Individual Staff Card Component with robust image fallback handling
function StaffCard({ member, index }) {
  const [imgSrc, setImgSrc] = useState(member.image);
  const [copied, setCopied] = useState(false);

  const handleImageError = () => {
    if (imgSrc !== member.fallbackImage && member.fallbackImage) {
      setImgSrc(member.fallbackImage);
    } else {
      // Default SVG fallback avatar data URI
      setImgSrc(
        `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="%23651631"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/></svg>`
      );
    }
  };

  const handleCopyPhone = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const phoneToCopy = member.phone || '+94777635657';
    navigator.clipboard.writeText(phoneToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cleanPhone = member.phone ? member.phone.replace(/[\s()-]/g, '') : '94777635657';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-brand/5 dark:hover:shadow-brand-950/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] max-w-md"
    >
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-50/60 dark:bg-brand-950/20 translate-x-10 -translate-y-10 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

      <div>
        {/* Profile Image & Avatar */}
        <div className="relative mb-6 w-28 h-28 sm:w-32 sm:h-32 shrink-0">
          <div className="absolute inset-0 bg-brand/10 dark:bg-brand/20 rounded-2xl sm:rounded-3xl rotate-3 group-hover:rotate-6 transition-transform duration-300" />
          <img
            src={imgSrc}
            onError={handleImageError}
            alt={`${member.name} - ${member.designation}`}
            width={128}
            height={128}
            className="relative z-10 w-full h-full object-cover rounded-2xl sm:rounded-3xl border-2 border-white dark:border-slate-800 shadow-md group-hover:scale-[1.02] transition-transform duration-300 bg-slate-100 dark:bg-slate-800"
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>

        {/* Designation Badge */}
        <span className="inline-block text-xs font-semibold text-brand dark:text-brand-300 bg-brand/5 dark:bg-brand-950/50 border border-brand/10 dark:border-brand-500/20 px-3 py-1 rounded-full mb-2">
          {member.designation}
        </span>

        {/* Name */}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand dark:group-hover:text-brand-300 transition-colors">
          {member.name}
        </h3>

        {/* Short Description */}
        {member.description && (
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mt-2.5 mb-6">
            {member.description}
          </p>
        )}
      </div>

      {/* Phone Number & Direct Actions */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 mt-auto flex items-center justify-between gap-3">
        {member.phone ? (
          <a
            href={`tel:${cleanPhone}`}
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-brand dark:hover:text-brand-300 transition-colors group/tel"
            aria-label={`Call ${member.name} at ${member.phone}`}
          >
            <span className="p-2 rounded-xl bg-brand/5 dark:bg-brand-950/60 text-brand dark:text-brand-300 group-hover/tel:bg-brand group-hover/tel:text-white transition-colors duration-200 shrink-0">
              <Phone className="h-4 w-4" />
            </span>
            <span className="font-semibold tracking-wide whitespace-nowrap">{member.phone}</span>
          </a>
        ) : (
          <a
            href={`tel:+94777635657`}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand dark:hover:text-brand-300 transition-colors group/tel"
            aria-label={`Contact ${member.name} through campus reception`}
            title="Campus Desk Line"
          >
            <span className="p-2 rounded-xl bg-brand/5 dark:bg-brand-950/60 text-brand dark:text-brand-300 group-hover/tel:bg-brand group-hover/tel:text-white transition-colors duration-200 shrink-0">
              <Phone className="h-4 w-4" />
            </span>
            <span className="font-semibold tracking-wide whitespace-nowrap">+94 77 763 5657</span>
          </a>
        )}

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Quick Copy Phone Button */}
          <button
            onClick={handleCopyPhone}
            type="button"
            aria-label={`Copy contact number for ${member.name}`}
            title={copied ? "Copied!" : "Copy Phone"}
            className={`p-2 rounded-xl border transition-all duration-200 ${
              copied
                ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 text-emerald-600 dark:text-emerald-400'
                : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            {copied ? <Check className="h-4 w-4" /> : <span className="text-[10px] font-bold uppercase px-0.5">Copy</span>}
          </button>

          {/* Email Link */}
          {member.email && (
            <a
              href={`mailto:${member.email}?subject=Inquiry for ${encodeURIComponent(member.name)}`}
              className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-brand hover:border-brand dark:hover:text-brand-300 dark:hover:border-brand-400 transition-colors"
              title={`Email ${member.name}`}
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Staff() {
  return (
    <div className="w-full flex-grow pt-20 sm:pt-24 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-10 sm:py-12">
        
        {/* 1. Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-brand dark:text-brand-300 text-xs sm:text-sm font-bold uppercase tracking-widest bg-brand/5 dark:bg-brand/10 px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 border border-brand/10 dark:border-brand-500/20">
            <Users className="h-4 w-4 text-brand dark:text-brand-300" />
            Our Academic & Administrative Team
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Meet Our <span className="text-brand dark:text-brand-300">Staff</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">
            Dedicated professionals committed to supporting our students and delivering quality education.
          </p>
        </div>

        {/* 2. Staff Grid Section (3 on Row 1, 2 on Row 2 on Desktop) */}
        <section className="mb-16 sm:mb-20">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {staffMembers.map((member, index) => (
              <StaffCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </section>

        {/* 3. Supporting Information / Inquiry Banner */}
        <section className="bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4 shadow-sm relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-36 h-36 rounded-full bg-brand-50/50 dark:bg-brand-950/20 blur-xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-brand-50/50 dark:bg-brand-950/20 blur-xl pointer-events-none" />

          <div className="inline-flex p-3 rounded-2xl bg-brand/5 dark:bg-brand-950/40 text-brand dark:text-brand-300 mx-auto">
            <Sparkles className="h-6 w-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Have Questions for our Faculty or Staff?
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-light max-w-2xl mx-auto">
            Our student support and admissions desk are always available to help you choose the right diploma, schedule campus visits, and guide your enrollment.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand hover:bg-brand-950 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 flex items-center gap-2"
            >
              <span>Contact Campus Desk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/courses"
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300"
            >
              Browse Available Courses
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
