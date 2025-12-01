import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import GithubInsightsFull from '@components/insights/GithubInsightsFull'

export default function InsightsPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-8 left-8 z-50"
      >
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border border-cyan-500/30 hover:border-cyan-500/60 rounded-lg text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-medium"
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
