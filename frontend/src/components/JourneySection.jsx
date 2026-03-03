import { motion } from 'framer-motion'
import codeclauseIcon from '@assets/codeclause.jpeg'
import collegeIcon from '@assets/college.jpeg'
import schoolIcon from '@assets/school.jpg'
import './JourneySection.css'

// Journey data with all milestone information
const JOURNEY_DATA = [
  {
    id: 1,
    title: "Bhartiya Vidya Bhavan's",
    period: '2011-2023',
    description: 'Completed my foundational education here, where I developed core academic skills and built a strong base in mathematics, science, and technology.',
    icon: schoolIcon,
  },
  {
    id: 2,
    title: 'Charotar University',
    period: 'B.Tech IT, 2023 - 2027',
    description: 'Currently pursuing B.Tech in Information Technology, building a strong foundation in computer science, software engineering, and full-stack development.',
    icon: collegeIcon,
  },
  {
    id: 3,
    title: 'CodeClause Intern',
    period: 'May 2025 - June 2025',
    description: 'Web Developer at CodeClause, building real-world projects like a secure, no-login file-sharing platform using React, Supabase, and Netlify.',
    icon: codeclauseIcon,
  }
]

export default function JourneySection() {
  return (
    <section className="journey">
      <motion.em
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        A snapshot of my academic path and hands-on experience
      </motion.em>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="section-title section-title--light"
      >
        My Journey
      </motion.h2>

      <div className="journey-box">
        <div className="timeline-line"></div>
        
        <div className="journey-items">
          {JOURNEY_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              className="journey-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={item.icon} alt={item.title} />
              <div className="journey-content">
                <h3>{item.title}</h3>
                <p className="period">{item.period}</p>
                <p className="description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
