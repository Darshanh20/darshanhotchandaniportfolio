import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import JourneySection from './components/JourneySection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-20">
        <HeroSection />
        <SkillsSection />
        <div id="journey">
          <JourneySection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="aboutme">
          <AboutSection />
        </div>
        <div id="connectme">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
