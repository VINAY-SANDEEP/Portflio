'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export default function MobileMenu({ isOpen, onClose, activeSection }) {
  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 bottom-0 w-72 bg-gradient-to-b from-primary/95 to-primary/90 backdrop-blur-md shadow-lg z-50"
          >
            <div className="p-6">
              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 text-textSecondary hover:text-secondary p-2 rounded-lg hover:bg-secondary/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.button>

              <div className="mt-12 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={500}
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeSection === item.to
                          ? 'bg-secondary/10 text-secondary'
                          : 'text-textSecondary hover:text-secondary hover:bg-secondary/5'
                      }`}
                    >
                      {item.name}
                    </ScrollLink>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 