'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/app/utils/scrollto'
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];
  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };


 
  return (
    <nav className="fixed w-full bg-[#0a0a0a]/90 backdrop-blur-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-[#64ffda] cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            DEVXDEVOPS
          </motion.div>


          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fas fa-${isOpen ? 'times' : 'bars'}`} />
          </button>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`${
              isOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#0a0a0a]/90 md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-white hover:text-[#64ffda] transition-colors text-left"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </nav>
  );
}