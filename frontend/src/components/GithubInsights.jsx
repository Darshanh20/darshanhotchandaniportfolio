import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import { useGithubStats } from '../hooks/useGithubStats'

const LANGUAGE_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  React: '#61dafb',
  'C++': '#00599c',
  Java: '#007396',
  CSS: '#563d7c',
  HTML: '#e34c26',
  Supabase: '#3ecf8e',
  SQL: '#336791',
  Shell: '#89e051',
  Markdown: '#083fa1',
  Vue: '#4fc08d',
  Go: '#00add8',
  Rust: '#ce422b',
  PHP: '#777bb4'
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

const CustomLanguageTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 border border-cyan-500/30 rounded-lg p-3 backdrop-blur-xl">
        <p className="text-cyan-300 font-semibold">{payload[0].payload.name}</p>
        <p className="text-slate-200 text-sm">
          Repos: <span className="text-cyan-400 font-bold">{payload[0].payload.count}</span>
        </p>
        <p className="text-slate-400 text-xs">{payload[0].payload.percentage}% of projects</p>
      </div>
    )
  }
  return null
}

export default function GithubInsights() {
  const username = import.meta.env.VITE_MY_USERNAME || 'darshanh20'
  const { totalStars, topLanguages, followers, following, publicRepos, contributionGraph, streakStats, loading, error } = useGithubStats(username)

  if (error) {
    return (
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/50 border-t border-b border-cyan-500/10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-red-400">Error loading GitHub data. Please check your username.</p>
        </div>
      </motion.section>
    )
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-slate-950/50 via-slate-900/30 to-slate-950/50 border-t border-b border-cyan-500/10"
    >
      {/* Background accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 bg-clip-text text-transparent">
              GitHub Insights
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              My GitHub activity, contribution patterns, and coding language preferences.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Total Stars', value: totalStars, icon: '⭐' },
              { label: 'Public Repos', value: publicRepos, icon: '📦' },
              { label: 'Followers', value: followers, icon: '👥' },
              { label: 'Following', value: following, icon: '🔗' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 rounded-xl p-4 md:p-6 text-center hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <p className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</p>
                <p className="text-slate-400 text-sm md:text-base font-medium mb-2">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Contribution Graph */}
          {!loading && (
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gradient-to-b from-slate-900/40 to-slate-950/40 backdrop-blur-xl border border-cyan-500/15 rounded-2xl p-6 md:p-10 shadow-2xl overflow-x-auto">
                <h3 className="text-2xl font-bold text-cyan-300 mb-6">Contribution Graph</h3>
                <img src={contributionGraph} alt="GitHub Contribution Graph" className="w-full h-auto" loading="lazy" />
              </div>

              {/* Streak Stats */}
              <div className="bg-gradient-to-b from-slate-900/40 to-slate-950/40 backdrop-blur-xl border border-cyan-500/15 rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden">
                <h3 className="text-2xl font-bold text-cyan-300 mb-6">Contribution Streak</h3>
                <img src={streakStats} alt="GitHub Streak Stats" className="w-full h-auto" loading="lazy" />
              </div>
            </motion.div>
          )}

          {/* Languages Chart */}
          {topLanguages.length > 0 && (
            <motion.div variants={itemVariants} className="bg-gradient-to-b from-slate-900/40 to-slate-950/40 backdrop-blur-xl border border-cyan-500/15 rounded-2xl p-6 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-bold text-cyan-300 mb-8">Top Languages</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={topLanguages}
                  margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
                  style={{ fontFamily: 'inherit' }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 150, 200, 0.1)" vertical={false} />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    tick={{ fill: '#cbd5e1', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(0, 150, 200, 0.15)' }}
                    tickLine={{ stroke: 'rgba(0, 150, 200, 0.15)' }}
                  />
                  <YAxis
                    tick={{ fill: '#cbd5e1', fontSize: 12 }}
                    axisLine={{ stroke: 'rgba(0, 150, 200, 0.15)' }}
                    tickLine={{ stroke: 'rgba(0, 150, 200, 0.15)' }}
                  />
                  <Tooltip content={<CustomLanguageTooltip />} cursor={{ fill: 'rgba(0, 150, 200, 0.1)' }} />
                  <Bar dataKey="count" radius={[8, 8, 0, 0]} animationDuration={1500} animationEasing="ease-in-out">
                    {topLanguages.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={LANGUAGE_COLORS[entry.name] || '#0096c8'} opacity={0.85} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              {/* Language List */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {topLanguages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: LANGUAGE_COLORS[lang.name] || '#0096c8' }}
                    />
                    <div className="flex-1">
                      <p className="text-slate-300 text-sm font-medium">{lang.name}</p>
                      <p className="text-slate-500 text-xs">{lang.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400" />
              <p className="text-slate-400 mt-4">Loading GitHub insights...</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  )
}
