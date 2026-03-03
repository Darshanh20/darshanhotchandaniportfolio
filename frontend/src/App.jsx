import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutSection from '@components/AboutSection'
import ContactSection from '@components/ContactSection'
import Footer from '@components/Footer'
import HeroSection from '@components/HeroSection'
import JourneySection from '@components/JourneySection'
import Navbar from '@components/Navbar'
import ProjectsSection from '@components/ProjectsSection'
import SkillsSection from '@components/SkillsSection'
import SoftSkillsAndFunFactsSection from '@components/SoftSkillsAndFunFactsSection'
import InsightsPage from '@pages/InsightsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <main className="pt-20">
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
