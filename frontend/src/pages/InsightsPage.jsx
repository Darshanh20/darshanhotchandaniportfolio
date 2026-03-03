import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import GithubInsightsFull from '@components/insights/GithubInsightsFull'

export default function InsightsPage() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0A0A0A' }}>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: 'fixed', top: '2rem', left: '2rem', zIndex: 50 }}
      >
        <button
          onClick={() => navigate('/')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '12px 20px',
            background: '#FFFFFF',
            border: '2px solid #0A0A0A',
            borderRadius: 0,
            boxShadow: '4px 4px 0px #0A0A0A',
            color: '#0A0A0A',
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 600,
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translate(-2px, -2px)'
            e.target.style.boxShadow = '6px 6px 0px #0A0A0A'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translate(0, 0)'
            e.target.style.boxShadow = '4px 4px 0px #0A0A0A'
          }}
        >
          <span>←</span>
          <span>Back</span>
        </button>
      </motion.div>

      {/* Content */}
      <GithubInsightsFull />
    </div>
  )
}
