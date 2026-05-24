import { BrowserRouter as Router } from 'react-router-dom';
import useTheme from './hooks/useTheme';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
        
        {/* Dynamic scroll manager */}
        <ScrollToTop />

        {/* Global sticky Glassmorphism Header */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        {/* Route Switched Main Sections */}
        <main className="flex-grow flex flex-col">
          <AppRoutes />
        </main>

        {/* Global responsive Footer */}
        <Footer />

        {/* Animated scroll-up floating widget */}
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
