import { motion } from 'framer-motion'

/**
 * JourneyCard Component
 * Neo-brutalist style card for journey milestones
 */
const JourneyCard = ({ item }) => {
  // Map colors to accent colors
  const colorMap = {
    'from-blue-500 to-blue-600': '#00B4B4',
    'from-cyan-500 to-cyan-600': '#FF2D78',
    'from-orange-500 to-orange-600': '#FF6B1A'
  }
  
  const accentColor = colorMap[item.color] || '#00B4B4'
  
  return (
    <motion.div
      whileHover={{ x: -3, y: -3 }}
      transition={{ duration: 0.15 }}
      className="relative group h-full"
      style={{
        background: '#F0EDE6',
        border: '2px solid #0A0A0A',
        padding: '1.5rem',
        boxShadow: `5px 5px 0px ${accentColor}`,
        transition: 'all 0.15s ease'
      }}
    >
      {/* Top section: Icon */}
      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div
          style={{
            width: '64px',
            height: '64px',
            border: '2px solid #0A0A0A',
            boxShadow: `3px 3px 0px ${accentColor}`,
            overflow: 'hidden',
            flexShrink: 0
          }}
        >
          <img
            src={item.icon}
            alt={item.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.4rem',
        fontWeight: 400,
        color: '#0A0A0A',
        marginBottom: '0.5rem',
        textTransform: 'uppercase',
        letterSpacing: '-0.02em'
      }}>
        {item.title}
      </h3>

      {/* Period */}
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '12px',
        fontWeight: 600,
        color: accentColor,
        marginBottom: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      }}>
        {item.period}
      </p>

      {/* Description */}
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: '14px',
        color: '#0A0A0A',
        lineHeight: 1.65
      }}>
        {item.description}
      </p>
    </motion.div>
  )
}

export default JourneyCard
