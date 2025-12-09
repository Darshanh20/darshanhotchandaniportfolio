import { useState } from 'react'
import p1_1 from '@assets/p1(1).png'
import p1_2 from '@assets/p1(2).png'
import p1_3 from '@assets/p1(3).png'
import p1_4 from '@assets/p1(4).png'
import p3_1 from '@assets/p3(1).png'
import p3_2 from '@assets/p3(2).png'
import p5_1 from '@assets/p5(1).png'
import p5_2 from '@assets/p5(2).png'
import p6_1 from '@assets/p6(1).png'
import p6_2 from '@assets/p6(2).png'
import p6_3 from '@assets/p6(3).png'
import p6_4 from '@assets/p6(4).png'
import p7_1 from '@assets/p7(1).png'
import p7_2 from '@assets/p7(2).png'
import p7_3 from '@assets/p7(3).png'
import p7_4 from '@assets/p7(4).png'
import p8_1 from '@assets/p8(1).png'
import p8_2 from '@assets/p8(2).png'
import p8_3 from '@assets/p8(3).png'
import p8_4 from '@assets/p8(4).png'
import p9_1 from '@assets/p9(1).png'
import p9_2 from '@assets/p9(2).png'
import p9_3 from '@assets/p9(3).png'
import p9_4 from '@assets/p9(4).png'
import './ProjectsSection.css'

const PROJECTS = [
  {
    id: 2,
    title: 'TRAVELSY',
    type: 'group',
    images: [p5_1, p5_2],
    description: 'TRAVELSY is a web-based platform designed as a one-stop solution for travelers, built for the SIH Hackathon. The website allows users to book tickets, view travel photos, explore locations, and find travel-related information in one place.',
    techStack: ['HTML5', 'CSS3', 'MySQL', 'Bootstrap'],
    links: [
      { label: 'GitHub Link', url: 'https://github.com/rajank18/Travelsy' }
    ]
  },
  {
    id: 3,
    title: 'Brief - The Ultimate Resume Builder',
    type: 'individual',
    images: [p7_1, p7_2, p7_3, p7_4],
    description: 'The Ultimate Resume Builder is a sleek and user-friendly web application I developed for my portfolio. It allows users to create professional resumes with ease, using customizable templates and real-time previews. Built with React and Supabase, the platform supports secure authentication, dynamic form inputs, and downloadable image resumes.',
    techStack: ['React', 'Supabase', 'JavaScript', 'Tailwind CSS'],
    links: [
      { label: 'GitHub Link', url: 'https://github.com/Darshanh20/CodeClauseInternship_Interactive-Resume-Builder' },
      { label: 'Use Here', url: 'https://resumebuilderbrief.netlify.app/' }
    ]
  },
  {
    id: 4,
    title: 'Vaccine Care',
    type: 'group',
    images: [p3_1, p3_2],
    description: 'Vaccine Care is a healthcare application designed to help users track vaccinations, schedule appointments, and access vaccine-related information. The app ensures a seamless and user-friendly experience for individuals managing their immunization records.',
    techStack: ['Flutter', 'React', 'Node.js', 'Tailwind CSS','Supabase'],
    links: [
      { label: 'GitHub Link', url: 'https://github.com/rajank18/VaccineCare' }
    ]
  },
  {
    id: 5,
    title: 'ShareEZ',
    type: 'individual',
    images: [p6_1, p6_2, p6_3, p6_4],
    description: 'ShareEZ is a secure, anonymous file-sharing app I built during my internship at CodeClause. Users can upload files without signing in, generate customizable passwords, and set optional expiry dates for links. The app creates a secure shareable link and password to control access, all wrapped in a simple, user-friendly interface with a dark theme.',
    techStack: ['React', 'Node.js', 'Supabase', 'JWT'],
    links: [
      { label: 'GitHub Link', url: 'https://github.com/Darshanh20/CodeClauseInternship_File-Sharing-Platform' },
      { label: 'Use Here', url: 'https://shareez.netlify.app/' }
    ]
  },
  {
    id: 6,
    title: 'MoneyLog',
    type: 'group',
    images: [p1_1, p1_2, p1_3, p1_4],
    description: 'MONEYLOG is a smart expense-tracking application designed to simplify financial management. Managing expenses can be tedious and stressful, so MONEYLOG provides an intuitive and efficient solution to track spending, categorize transactions, and gain insights into financial habits.',
    techStack: ['Flutter', 'Supabase', 'Firebase'],
    links: [
      { label: 'GitHub Link', url: 'https://github.com/rajank18/SGP_S4' }
    ]
  },
  {
    id: 7,
    title: 'ProGrade',
    type: 'group',
    images: [p8_1, p8_2, p8_3, p8_4],
    description: 'ProGrade is a rubrics-based project evaluation system designed to streamline academic assessments. It allows faculty to create, customize, and apply structured rubrics for fair, consistent, and transparent project grading. With an intuitive interface built using React and Node.js, ProGrade simplifies evaluation workflows while improving accuracy. It bridges the gap between students and faculty by ensuring clarity, feedback, and organized result tracking.',
    techStack: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    links: [
      { label: 'GitHub Link', url: 'https://github.com/rajank18/SGP_S5' },
      { label: 'Use Here', url: 'https://pro-grade.vercel.app/' }
    ]
  },
  {
  id: 8,
  title: 'DXMUSIC',
  type: 'individual',
  images: [p9_1, p9_2, p9_3, p9_4],
  description: 'DXMUSIC is a personal music portfolio website I built as both an artist and a developer to showcase my songs, visuals, and creative work. The platform includes a secure admin panel with protected routes where I can manage tracks, upload new songs, update details, and view analytics through a dedicated dashboard. Users can explore my music, interact with the interface, and even leave reviews directly on the website. DXMUSIC combines smooth UI design with functional tooling to bring both my technical and artistic sides together in one place.',
  techStack: ['React', 'Node.js', 'Express', 'Postgresql', 'Tailwind CSS'],
  links: [
    { label: 'GitHub Link', url: 'https://github.com/Darshanh20/personal_streaming_platform' },
    { label: 'Use Here', url: 'https://dhxmusic.vercel.app/' }
  ]
}

]



export default function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageClick = (image, projectTitle) => {
    setSelectedImage({ src: image, title: projectTitle })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      
      <div className="legend">
        <div><span className="dot known-dot"></span> Group Projects</div>
        <div><span className="dot learning-dot"></span> Individual Projects</div>
      </div>

      <div className="projects-grid">
        {PROJECTS.sort((a, b) => b.id - a.id).map((project) => (
          <article key={project.id} className={`project-card ${project.type}`}>
            <div className="project-images">
              {project.images.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={`${project.title} ${idx + 1}`}
                  onClick={() => handleImageClick(img, project.title)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {project.techStack && project.techStack.length > 0 && (
                <div className="tech-stack">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
              )}
              
              <div className="project-links">
                {project.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <p className="modal-title">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
