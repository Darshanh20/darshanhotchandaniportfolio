import { motion } from 'framer-motion'
import canvaicon from '@assets/canva.jpeg'
import cppIcon from '@assets/cpp.png'
import cssIcon from '@assets/css.png'
import figmaIcon from '@assets/figma.png'
import githubIcon from '@assets/github.jpg'
import htmlIcon from '@assets/html.png'
import jsIcon from '@assets/js.png'
import mysqlIcon from '@assets/Mysql.png'
import nodejsIcon from '@assets/nodejs.png'
import postgresqlIcon from '@assets/postgresql.png'
import pythonIcon from '@assets/python.png'
import reactIcon from '@assets/react.png'
import rendericon from '@assets/render.jpeg'
import supabaseIcon from '@assets/Supabase.png'
import tailwindIcon from '@assets/tailwind.png'
import verceicon from '@assets/vercel.png'
import './SkillsSection.css'

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    viewport={{ once: true, amount: 0.3 }}
    className="skill-card-wrapper"
  >
    <div className="skill-card">
      <div className="skill-icon">
        <img src={skill.icon} alt={skill.name} />
      </div>
      <h3>{skill.name}</h3>
    </div>
  </motion.div>
)

const SkillGroup = ({ category, skills }) => (
  <div className="skill-group">
    <h3 className="skill-group-title">{category}</h3>
    <div className="skill-grid">
      {skills.map((skill, index) => (
        <SkillCard key={skill.name} skill={skill} index={index} />
      ))}
    </div>
  </div>
)

const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'React', icon: reactIcon },
      { name: 'Tailwind', icon: tailwindIcon },
    ]
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'Node.js', icon: nodejsIcon },
      { name: 'Supabase', icon: supabaseIcon },
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'PostgreSQL', icon: postgresqlIcon },
    ]
  },
  {
    category: 'Design',
    skills: [
      { name: 'Figma', icon: figmaIcon },
      { name: 'Canva', icon: canvaicon }
    ]
  },
  {
    category: 'Other Skills',
    skills: [
      { name: 'Python', icon: pythonIcon },
      { name: 'C++', icon: cppIcon },
      { name: 'GitHub', icon: githubIcon },
      { name: 'Vercel', icon: verceicon },
      { name: 'Render', icon: rendericon }
    ]
  }
]

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
      className="tech-stack-section"
    >
      <div className="tech-stack-container">
        <h2 className="section-title">Tech Stack</h2>
        
        <div className="skill-categories">
          {SKILL_CATEGORIES.map((group) => (
            <SkillGroup 
              key={group.category} 
              category={group.category} 
              skills={group.skills} 
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
