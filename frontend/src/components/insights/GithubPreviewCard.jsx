import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useGithubStats } from '../../hooks/useGithubStats'

export default function GithubPreviewCard() {
  const navigate = useNavigate()
  const username = import.meta.env.VITE_MY_USERNAME || 'darshanh20'
  const { totalStars, topLanguages, publicRepos, loading, error } = useGithubStats(username)

  if (error) {
    return null
  }

  const topLanguage = topLanguages[0]?.name || 'JavaScript'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/50 border-t border-b border-cyan-500/10"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                GitHub Insights
              </h2>
              <p className="text-slate-400 text-lg">
                Explore my coding activity, contribution patterns, and technical expertise across diverse projects.
              </p>
            </div>

            {/* Stats Grid */}
            {!loading && (
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Stars', value: totalStars, icon: '⭐' },
                  { label: 'Repos', value: publicRepos, icon: '📦' },
                  { label: 'Top', value: topLanguage, icon: '💻' }
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 rounded-lg p-3 md:p-4 text-center hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <p className="text-2xl mb-1">{stat.icon}</p>
                    <p className="text-slate-400 text-xs md:text-sm font-medium">{stat.label}</p>
                    <p className="text-lg md:text-xl font-bold text-cyan-300 mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 150, 200, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/insights')}
              className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>View Full Insights</span>
              <span className="text-xl">→</span>
            </motion.button>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="relative w-full h-64 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-2xl animate-pulse" />
              <div className="relative bg-gradient-to-br from-slate-900/60 to-slate-950/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <div className="text-6xl">📊</div>
                  <p className="text-cyan-300 font-semibold">GitHub Activity</p>
                  <p className="text-slate-400 text-sm">Stats, graphs & insights</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
