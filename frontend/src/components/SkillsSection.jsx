import { motion } from 'framer-motion'
import './SkillsSection.css'
import htmlIcon from '../Assets/html.png'
import cssIcon from '../Assets/css.png'
import jsIcon from '../Assets/js.png'
import reactIcon from '../Assets/react.png'
import tailwindIcon from '../Assets/tailwind.png'
import nodejsIcon from '../Assets/nodejs.png'
import supabaseIcon from '../Assets/Supabase.png'
import mysqlIcon from '../Assets/Mysql.png'
import postgresqlIcon from '../Assets/postgresql.png'
import figmaIcon from '../Assets/figma.png'
import pythonIcon from '../Assets/python.png'
import cppIcon from '../Assets/cpp.png'
import githubIcon from '../Assets/github.jpg'

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
    ]
  },
  {
    category: 'Other Skills',
    skills: [
      { name: 'Python', icon: pythonIcon },
      { name: 'C++', icon: cppIcon },
      { name: 'GitHub', icon: githubIcon },
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
