import { motion } from 'framer-motion'
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useGithubStats } from '@hooks/useGithubStats'

const LANGUAGE_COLORS = {
  JavaScript: '#FFD600',
  TypeScript: '#00B4B4',
  Python: '#C8F026',
  React: '#7FE8E8',
  'C++': '#FF6B1A',
  Java: '#FF2D78',
  CSS: '#00B4B4',
  HTML: '#FF6B1A',
  Supabase: '#C8F026',
  SQL: '#7FE8E8',
  Shell: '#FFD600',
  Markdown: '#FF2D78',
  Vue: '#C8F026',
  Go: '#00B4B4',
  Rust: '#FF6B1A',
  PHP: '#FF2D78'
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
      <div style={{
        background: '#F0EDE6',
        border: '2px solid #0A0A0A',
        padding: '12px 16px',
        boxShadow: '3px 3px 0px #0A0A0A'
      }}>
        <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: '#0A0A0A' }}>
          {payload[0].payload.name}
        </p>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: '#0A0A0A' }}>
          Repos: <span style={{ fontWeight: 700 }}>{payload[0].payload.count}</span>
        </p>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '12px', color: 'rgba(10, 10, 10, 0.7)' }}>
          {payload[0].payload.percentage}% of projects
        </p>
      </div>
    )
  }
  return null
}

export default function GithubInsightsFull() {
  const username = import.meta.env.VITE_MY_USERNAME || 'darshanh20'
  const { totalStars, topLanguages, followers, following, publicRepos, contributionGraph, streakStats, loading, error } = useGithubStats(username)

  if (error) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0A0A0A'
      }}>
        <div style={{
          background: '#F0EDE6',
          border: '2px solid #0A0A0A',
          padding: '2rem',
          boxShadow: '5px 5px 0px #FF2D78',
          textAlign: 'center'
        }}>
          <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', color: '#FF2D78' }}>
            Error loading GitHub data
          </p>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', color: '#0A0A0A' }}>
            Please check your username.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      backgroundColor: '#0A0A0A',
      padding: 'clamp(60px, 8vw, 100px) 4vw'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', paddingTop: '40px' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} style={{ textAlign: 'center' }}>
            <h1 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(40px, 6vw, 80px)',
              color: '#FFFFFF',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '1rem'
            }}>
              GitHub Insights
            </h1>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.65'
            }}>
              My GitHub activity, contribution patterns, and coding language preferences.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              { label: 'Total Stars', value: totalStars, icon: '⭐', color: '#FFD600' },
              { label: 'Public Repos', value: publicRepos, icon: '📦', color: '#00B4B4' },
              { label: 'Followers', value: followers, icon: '👥', color: '#FF2D78' },
              { label: 'Following', value: following, icon: '🔗', color: '#C8F026' }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                style={{
                  background: '#F0EDE6',
                  border: '2px solid #0A0A0A',
                  padding: '1.5rem',
                  textAlign: 'center',
                  boxShadow: `4px 4px 0px ${stat.color}`,
                  transition: 'all 0.15s ease'
                }}
                whileHover={{ x: -2, y: -2, boxShadow: `6px 6px 0px ${stat.color}` }}
              >
                <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</p>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '12px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#0A0A0A',
                  marginBottom: '0.5rem'
                }}>{stat.label}</p>
                <p style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  color: '#0A0A0A'
                }}>
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contribution Graph */}
          {!loading && (
            <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{
                background: '#F0EDE6',
                border: '2px solid #0A0A0A',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                boxShadow: '5px 5px 0px #0A0A0A',
                overflowX: 'auto'
              }}>
                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  color: '#0A0A0A',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase'
                }}>Contribution Graph</h3>
                <img src={contributionGraph} alt="GitHub Contribution Graph" style={{ width: '100%', height: 'auto' }} loading="lazy" />
              </div>

              {/* Streak Stats */}
              <div style={{
                background: '#F0EDE6',
                border: '2px solid #0A0A0A',
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                boxShadow: '5px 5px 0px #FF2D78',
                overflow: 'hidden'
              }}>
                <h3 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  color: '#0A0A0A',
                  marginBottom: '1.5rem',
                  textTransform: 'uppercase'
                }}>Contribution Streak</h3>
                <img src={streakStats} alt="GitHub Streak Stats" style={{ width: '100%', height: 'auto' }} loading="lazy" />
              </div>
            </motion.div>
          )}

          {/* Languages Chart */}
          {topLanguages.length > 0 && (
            <motion.div variants={itemVariants} style={{
              background: '#F0EDE6',
              border: '2px solid #0A0A0A',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '5px 5px 0px #00B4B4'
            }}>
              <h3 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 'clamp(24px, 3vw, 32px)',
                color: '#0A0A0A',
                marginBottom: '2rem',
                textTransform: 'uppercase'
              }}>Top Languages</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart
                  data={topLanguages}
                  margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(10, 10, 10, 0.15)" vertical={false} />
                  <XAxis
                    dataKey="name"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    tick={{ fill: '#0A0A0A', fontSize: 12 }}
                    axisLine={{ stroke: '#0A0A0A' }}
                    tickLine={{ stroke: '#0A0A0A' }}
                  />
                  <YAxis
                    tick={{ fill: '#0A0A0A', fontSize: 12 }}
                    axisLine={{ stroke: '#0A0A0A' }}
                    tickLine={{ stroke: '#0A0A0A' }}
                  />
                  <Tooltip content={<CustomLanguageTooltip />} cursor={{ fill: 'rgba(10, 10, 10, 0.05)' }} />
                  <Bar dataKey="count" radius={[0, 0, 0, 0]} animationDuration={1500} animationEasing="ease-in-out">
                    {topLanguages.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={LANGUAGE_COLORS[entry.name] || '#00B4B4'} stroke="#0A0A0A" strokeWidth={2} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              {/* Language List */}
              <div style={{
                marginTop: '2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem'
              }}>
                {topLanguages.map((lang, idx) => (
                  <div key={lang.name} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: '#FFFFFF',
                    border: '2px solid #0A0A0A',
                    boxShadow: '2px 2px 0px #0A0A0A',
                    transition: 'all 0.15s ease'
                  }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: LANGUAGE_COLORS[lang.name] || '#00B4B4',
                      border: '2px solid #0A0A0A'
                    }} />
                    <div style={{ flex: 1 }}>
                      <p style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '16px',
                        color: '#0A0A0A'
                      }}>{lang.name}</p>
                      <p style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: '12px',
                        color: 'rgba(10, 10, 10, 0.6)'
                      }}>{lang.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Loading State */}
          {loading && (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{
                display: 'inline-block',
                width: '48px',
                height: '48px',
                border: '4px solid #F0EDE6',
                borderTopColor: '#00B4B4',
                animation: 'spin 1s linear infinite'
              }} />
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: 'rgba(255, 255, 255, 0.7)',
                marginTop: '1rem'
              }}>Loading GitHub insights...</p>
              <style>{`
                @keyframes spin {
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
