import { motion } from 'framer-motion'

export default function SoftSkillsAndFunFactsSection() {
  const softSkills = [
    { icon: '💬', skill: 'Communication' },
    { icon: '🤝', skill: 'Teamwork & Collaboration' },
    { icon: '⏱️', skill: 'Time Management' },
    { icon: '🧩', skill: 'Problem Solving' },
    { icon: '🔄', skill: 'Adaptability' },
    { icon: '📢', skill: 'Public Speaking' }
  ]

  const funFacts = [
    { icon: '🎤', fact: 'I write rap lyrics' },
    { icon: '🎨', fact: 'I design UIs' }, 
    { icon: '📺', fact: 'I love cricket' },
    { icon: '⚡', fact: 'My favorite tech: React, Tailwind, Supabase' },
    { icon: '🎵', fact: 'My coding playlist is full of lofi & trap beats' },
    { icon: '✨', fact: 'I love building clean UI animations' }
  ]

  const accentColors = ['#00B4B4', '#FF2D78', '#7FE8E8', '#FF6B1A', '#C8F026', '#FFD600']

  const Card = ({ title, items, colorOffset = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        background: '#FFFFFF',
        border: '2px solid #0A0A0A',
        boxShadow: '5px 5px 0px #0A0A0A',
        padding: '2rem',
        transition: 'all 0.15s ease'
      }}
      whileHover={{ x: -3, y: -3, boxShadow: '8px 8px 0px #0A0A0A' }}
    >
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: 'clamp(24px, 3vw, 32px)',
        color: '#0A0A0A',
        textTransform: 'uppercase',
        letterSpacing: '-0.02em',
        marginBottom: '1.5rem'
      }}>
        {title}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '0.75rem 1rem',
              background: accentColors[(idx + colorOffset) % accentColors.length],
              border: '2px solid #0A0A0A',
              boxShadow: '3px 3px 0px #0A0A0A',
              transition: 'all 0.15s ease',
              cursor: 'default'
            }}
            whileHover={{ rotate: -1, scale: 1.02 }}
          >
            <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '14px',
              fontWeight: '500',
              color: idx === 1 || idx === 4 ? '#FFFFFF' : '#0A0A0A'
            }}>
              {item.skill || item.fact}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section style={{
      padding: 'clamp(60px, 8vw, 120px) 4vw',
      backgroundColor: '#0A0A0A'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(28px, 4vw, 52px)',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: '1rem'
          }}>
            More About Me
          </h2>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '15px',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.65'
          }}>
            Beyond code, here's what makes me tick—my core strengths and the little things that inspire my work.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          <Card title="Soft Skills" items={softSkills} colorOffset={0} />
          <Card title="Fun Facts About Me" items={funFacts} colorOffset={3} />
        </div>
      </div>
    </section>
  )
}
