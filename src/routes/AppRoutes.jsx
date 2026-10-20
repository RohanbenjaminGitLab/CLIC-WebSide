import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Staff = lazy(() => import('../pages/Staff'));
const Courses = lazy(() => import('../pages/Courses'));
const Services = lazy(() => import('../pages/Services'));
const Contact = lazy(() => import('../pages/Contact'));

function PageLoader() {
  return (
    <div className="flex-grow min-h-[60vh] flex flex-col items-center justify-center p-8">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-3 border-brand/20 border-t-brand animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-brand" />
        </div>
      </div>
      <p className="mt-4 text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest animate-pulse">
        Loading Campus Hub...
      </p>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        {/* Dynamic Fallback to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
