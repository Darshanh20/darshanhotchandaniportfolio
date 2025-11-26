import { useState, useEffect } from 'react'
import resumePDF from '../Assets/resume.pdf'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const handleLogoClick = () => {
    window.location.href = '/'
    closeMenu()
    setActiveSection('home')
  }

  const handleResumeClick = () => {
    window.open(resumePDF, '_blank')
    closeMenu()
  }

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    closeMenu()
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Check if user is at the top of the page
      if (window.scrollY < 300) {
        setActiveSection('home')
        return
      }

      const sections = ['aboutme', 'projects', 'connectme']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'resume', label: 'Resume', onClick: handleResumeClick, isButton: true },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'aboutme', label: 'About Me', href: '#aboutme' },
    { id: 'connectme', label: 'Connect With Me', href: '#connectme' }
  ]

  return (
    <nav className="fixed left-0 right-0 z-50 bg-gradient-to-b from-slate-950/80 border-cyan-500/10">
      {/* Content */}
      <div className="px-6 sm:px-8 lg:px-12 py-4 flex justify-between items-center max-w-full">
        
        {/* Logo - DH Monogram */}
        <button
          onClick={handleLogoClick}
          className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16"
        >
          
          {/* Inner circle */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border border-cyan-400/40 group-hover:border-cyan-300/70 transition-all duration-300">
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-cyan-300 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-cyan-300 transition-all duration-300">
              DH
            </span>
          </div>
          
          {/* Subtle hover animation */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)' }}></div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            item.isButton ? (
              <button
                key={item.id}
                onClick={item.onClick}
                className="relative group px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Text */}
                <span className="relative block group-hover:text-cyan-300 transition-colors duration-300">
                  {item.label}
                </span>
                
                {/* Underline animation */}
                <div className="absolute bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            ) : (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className="relative group px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300"
              >
                {/* Hover background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-lg border border-cyan-400/30 transition-all duration-300"></div>
                )}
                
                {/* Text */}
                <span className={`relative block transition-colors duration-300 ${
                  activeSection === item.id ? 'text-cyan-300 font-semibold' : 'group-hover:text-cyan-300'
                }`}>
                  {item.label}
                </span>
                
                {/* Underline animation */}
                <div className={`absolute bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
              </a>
            )
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative group w-10 h-10 flex items-center justify-center"
        >
          {/* Hover glow */}
          <div className="absolute inset-0 bg-cyan-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Hamburger Icon */}
          <div className="relative w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`h-0.5 w-full bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-px bg-gradient-to-b from-slate-900/95 to-slate-950/95 backdrop-blur-xl border-b border-cyan-500/10 animate-in fade-in duration-200">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              item.isButton ? (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:bg-gradient-to-r hover:from-cyan-500/15 hover:to-blue-500/15 hover:text-cyan-300 hover:border hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <span className="block relative">{item.label}</span>
                </button>
              ) : (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/40'
                      : 'text-slate-300 hover:bg-gradient-to-r hover:from-cyan-500/15 hover:to-blue-500/15 hover:text-cyan-300 hover:border hover:border-cyan-400/30'
                  }`}
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
