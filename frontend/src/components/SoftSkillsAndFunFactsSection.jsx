import { motion } from 'framer-motion'

export default function SoftSkillsAndFunFactsSection() {
  const softSkills = [
    { icon: '💬', skill: 'Communication' },
    { icon: '🤝', skill: 'Teamwork & Collaboration' },
    { icon: '⏱️', skill: 'Time Management' },
    { icon: '🧩', skill: 'Problem Solving' },
    { icon: '🔄', skill: 'Adaptability' },
    { icon: '👁️', skill: 'Attention to Detail' }
  ]

  const funFacts = [
    { icon: '🎤', fact: 'I write rap lyrics' },
    { icon: '🎨', fact: 'I design UIs' },
    { icon: '📺', fact: 'I love anime & cricket' },
    { icon: '⚡', fact: 'My favorite tech: React, Tailwind, Supabase' },
    { icon: '🎵', fact: 'My coding playlist is full of lofi & trap beats' },
    { icon: '✨', fact: 'I love building clean UI animations' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
  }

  const Card = ({ title, items, bgGradient }) => (
    <motion.div
      variants={cardVariants}
      className="group relative h-full"
    >
      {/* Card Background Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card Container */}
      <div className="relative bg-gradient-to-br from-slate-900/40 to-slate-950/40 backdrop-blur-xl border border-cyan-500/20 group-hover:border-cyan-500/40 rounded-2xl p-8 md:p-10 h-full transition-all duration-300">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-400/50 to-cyan-500/0 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-8">
          {title}
        </h3>

        {/* Items Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex items-start gap-4 group/item"
            >
              {/* Icon Background */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 group-hover/item:from-cyan-500/20 group-hover/item:to-blue-500/20 flex items-center justify-center transition-all duration-300">
                <span className="text-xl">{item.icon}</span>
              </div>

              {/* Text */}
              <div className="flex-grow pt-1">
                <p className="text-slate-200 group-hover/item:text-cyan-300 transition-colors duration-300 font-medium">
                  {item.skill || item.fact}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="flex-shrink-0 w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 mt-1.5" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )

  return (
    <section className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-slate-950/30 via-slate-900/20 to-slate-950/30">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
            More About Me
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Beyond code, here's what makes me tick—my core strengths and the little things that inspire my work.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          <Card title="Soft Skills" items={softSkills} />
          <Card title="Fun Facts About Me" items={funFacts} />
        </div>
      </div>
    </section>
  )
}
