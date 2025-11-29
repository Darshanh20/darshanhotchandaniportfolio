import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import SkillsSection from './components/SkillsSection'
import TechStackGraph from './components/TechStackGraph'
import JourneySection from './components/JourneySection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import SoftSkillsAndFunFactsSection from './components/SoftSkillsAndFunFactsSection'
import ContactSection from './components/ContactSection'
import AnimatedBackground from './components/AnimatedBackground'
import InsightsPage from './pages/InsightsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AnimatedBackground />
              <Navbar />
              <main className="pt-24 sm:pt-20">
                <HeroSection />
                <SkillsSection />
                <TechStackGraph />
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
                <SoftSkillsAndFunFactsSection />
              </main>
              <Footer />
            </>
          }
        />
        <Route path="/insights" element={<InsightsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
