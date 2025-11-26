import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts'

const TECH_DATA = [
  { name: 'React', usage: 95, category: 'Frontend' },
  { name: 'JavaScript', usage: 90, category: 'Frontend' },
  { name: 'HTML', usage: 92, category: 'Frontend' },
  { name: 'CSS', usage: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', usage: 88, category: 'Frontend' },
  { name: 'Node.js', usage: 85, category: 'Backend' },
  { name: 'Express', usage: 80, category: 'Backend' },
  { name: 'Supabase', usage: 75, category: 'Backend' },
  { name: 'PostgreSQL', usage: 78, category: 'Database' },
  { name: 'MySQL', usage: 70, category: 'Database' },
  { name: 'MongoDB', usage: 65, category: 'Database' }
]

const COLORS_BY_CATEGORY = {
  Frontend: [
    '#00d5ff', // Cyan
    '#00c9ff', // Bright Cyan
    '#00a3d9', // Light Cyan
    '#00d9ff', // Neon Cyan
    '#0096c8'  // Blue
  ],
  Backend: [
    '#ff6b6b', // Red
    '#ff5252', // Bright Red
    '#ff4444', // Deep Red
    '#ff7f7f'  // Light Red
  ],
  Database: [
    '#ffd700', // Gold
    '#ffed4e', // Bright Gold
    '#ffc700', // Deep Gold
    '#ffe066'  // Light Gold
  ]
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 border border-cyan-500/30 rounded-lg p-3 backdrop-blur-xl">
        <p className="text-cyan-300 font-semibold">{payload[0].payload.name}</p>
        <p className="text-slate-200 text-sm">
          Usage: <span className="text-cyan-400 font-bold">{payload[0].value}%</span>
        </p>
        <p className="text-slate-400 text-xs mt-1">{payload[0].payload.category}</p>
      </div>
    )
  }
  return null
}

export default function TechStackGraph() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
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
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
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
              Tech Stack Proficiency
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
              A breakdown of my technical expertise and usage frequency across different technologies and frameworks.
            </p>
          </motion.div>

          {/* Chart Container */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-b from-slate-900/40 to-slate-950/40 backdrop-blur-xl border border-cyan-500/15 rounded-2xl p-6 md:p-10 shadow-2xl"
          >
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={TECH_DATA}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
                style={{ fontFamily: 'inherit' }}
              >
                <defs>
                  <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00d5ff" stopOpacity={0.9} />
                    <stop offset="95%" stopColor="#0096c8" stopOpacity={0.7} />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(0, 150, 200, 0.1)"
                  vertical={false}
                />

                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={120}
                  tick={{ fill: '#cbd5e1', fontSize: 12 }}
                  axisLine={{ stroke: 'rgba(0, 150, 200, 0.15)' }}
                  tickLine={{ stroke: 'rgba(0, 150, 200, 0.15)' }}
                />

                <YAxis
                  domain={[0, 100]}
                  tick={{ fill: '#cbd5e1', fontSize: 12 }}
                  axisLine={{ stroke: 'rgba(0, 150, 200, 0.15)' }}
                  tickLine={{ stroke: 'rgba(0, 150, 200, 0.15)' }}
                  label={{ value: 'Usage %', angle: -90, position: 'insideLeft' }}
                />

                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0, 150, 200, 0.1)' }} />

                <Bar
                  dataKey="usage"
                  fill="url(#colorBar)"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1500}
                  animationEasing="ease-in-out"
                >
                  {TECH_DATA.map((entry, index) => {
                    const categoryColors = COLORS_BY_CATEGORY[entry.category]
                    const colorIndex = TECH_DATA.filter(
                      (d, i) => d.category === entry.category && i <= index
                    ).length - 1
                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={categoryColors[colorIndex % categoryColors.length]}
                        opacity={0.85}
                      />
                    )
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {[
              { label: 'Technologies', value: '11+' },
              { label: 'Primary Stack', value: 'MERN' },
              { label: 'Top Skill', value: 'React' },
              { label: 'Experience', value: '1+ Years' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-500/5 border border-cyan-500/20 rounded-xl p-4 md:p-6 text-center hover:border-cyan-500/40 transition-all duration-300"
              >
                <p className="text-slate-400 text-sm md:text-base font-medium mb-2">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Category Legend */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-6 justify-center">
            {[
              { name: 'Frontend', color: 'from-cyan-500 to-cyan-400' },
              { name: 'Backend', color: 'from-red-500 to-red-400' },
              { name: 'Database', color: 'from-yellow-500 to-yellow-400' }
            ].map((cat) => (
              <div key={cat.name} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${cat.color}`} />
                <span className="text-slate-400 text-sm font-medium">{cat.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
