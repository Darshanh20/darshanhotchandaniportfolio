import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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

const SEO_BY_PATH = {
  '/': {
    title: 'Darshan Hotchandani | Full Stack Developer and UI/UX Designer',
    description:
      'Portfolio of Darshan Hotchandani, featuring full stack projects, UI/UX work, technical skills, and contact details.',
  },
  '/insights': {
    title: 'GitHub Insights | Darshan Hotchandani',
    description:
      'Live GitHub activity, coding patterns, and repository insights from Darshan Hotchandani.',
  },
}

function upsertHeadTag(selector, createTag) {
  const existingTag = document.head.querySelector(selector)
  if (existingTag) {
    return existingTag
  }

  const newTag = createTag()
  document.head.appendChild(newTag)
  return newTag
}

function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const seo = SEO_BY_PATH[location.pathname] || SEO_BY_PATH['/']
    const canonicalUrl = `${window.location.origin}${location.pathname}`

    document.title = seo.title

    const descriptionTag = upsertHeadTag('meta[name="description"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      return meta
    })
    descriptionTag.setAttribute('content', seo.description)

    const canonicalTag = upsertHeadTag('link[rel="canonical"]', () => {
      const link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      return link
    })
    canonicalTag.setAttribute('href', canonicalUrl)

    const ogTitleTag = upsertHeadTag('meta[property="og:title"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:title')
      return meta
    })
    ogTitleTag.setAttribute('content', seo.title)

    const ogDescriptionTag = upsertHeadTag('meta[property="og:description"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:description')
      return meta
    })
    ogDescriptionTag.setAttribute('content', seo.description)

    const ogUrlTag = upsertHeadTag('meta[property="og:url"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('property', 'og:url')
      return meta
    })
    ogUrlTag.setAttribute('content', canonicalUrl)

    const twitterTitleTag = upsertHeadTag('meta[name="twitter:title"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'twitter:title')
      return meta
    })
    twitterTitleTag.setAttribute('content', seo.title)

    const twitterDescriptionTag = upsertHeadTag('meta[name="twitter:description"]', () => {
      const meta = document.createElement('meta')
      meta.setAttribute('name', 'twitter:description')
      return meta
    })
    twitterDescriptionTag.setAttribute('content', seo.description)
  }, [location.pathname])

  return null
}

function AppRoutes() {
  return (
    <>
      <SeoManager />
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
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
