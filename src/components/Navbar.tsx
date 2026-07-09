import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 border-b",
          scrolled
            ? "bg-surface/80 backdrop-blur-xl border-outline-variant/30 py-3"
            : "bg-transparent border-transparent py-5"
        )}
      >
        <div className="flex justify-between items-center px-container-margin w-full max-w-[1600px] mx-auto">
          <a
            href="#"
            className="font-headline-md text-headline-md leading-tight font-bold tracking-tighter text-primary"
          >
            PHYSio <br /> CLINIC
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 font-label-caps text-label-caps uppercase relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="hidden lg:block font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300 uppercase"
            >
              Book Appointment
            </a>
            <button
              className="text-primary hover:opacity-70 transition-opacity duration-200 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-surface flex flex-col items-center justify-center p-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-primary p-2 focus:outline-none focus:ring-2 focus:ring-primary"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-headline-md text-3xl text-primary hover:text-on-surface-variant transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 btn-primary text-center"
              >
                Book Appointment
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
