import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()

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
    window.open('/Resume.pdf', '_blank')
    closeMenu()
  }

  const handleGithubClick = () => {
    navigate('/insights')
    closeMenu()
  }

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId)
    closeMenu()
  }

  // Track scroll for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
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
    { id: 'github', label: 'GitHub Insights', onClick: handleGithubClick, isButton: true },
    { id: 'resume', label: 'Resume', onClick: handleResumeClick, isButton: true },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'aboutme', label: 'About Me', href: '#aboutme' },
    { id: 'connectme', label: 'Connect', href: '#connectme' }
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Logo */}
      <button onClick={handleLogoClick} className="name">
        DARSHAN HOTCHANDANI
      </button>

      {/* Desktop Navigation */}
      <ul className="navlinks">
        {navItems.map((item) => (
          <li key={item.id}>
            {item.isButton ? (
              <button onClick={item.onClick}>
                {item.label}
              </button>
            ) : (
              <a
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className="hamburger">
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="navlinks active">
          {navItems.map((item) => (
            <li key={item.id}>
              {item.isButton ? (
                <button onClick={item.onClick}>
                  {item.label}
                </button>
              ) : (
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
