import { motion } from 'framer-motion'
import './Projects.css'

const projectData = [
  {
    title: "Todo CLI",
    type: "Command-Line Tool",
    description: "simple note-taking CLI built in Rust. add notes from terminal with automatic timestamps. learning rust while building something useful.",
    tech: ["Rust", "chrono", "CLI"],
    impact: "fast, lightweight, actually use it daily",
    link: "https://github.com/dammyolujobi/todo-cli"
  },
  {
    title: "E-commerce Platform",
    type: "Full-Stack Backend",
    description: "backend for an e-commerce app. Flask APIs handling products, orders, inventory. React frontend consuming the API. MongoDB for data. actually deployed and working.",
    tech: ["Flask", "MongoDB", "REST API", "React"],
    impact: "handles 1000+ products with real-time stock updates",
    link: "https://github.com/dammyolujobi/Ecommerce"
  },
  {
    title: "News Classifier API",
    type: "NLP Backend",
    description: "FastAPI service that classifies news articles. PyTorch model under the hood, PostgreSQL for storage. built the entire pipeline from data preprocessing to production API.",
    tech: ["FastAPI", "PyTorch", "PostgreSQL", "Docker"],
    impact: "classifies articles in under 100ms",
    link: "https://github.com/dammyolujobi/News-Article-Classifier"
  },
  {
    title: "Student Performance Predictor",
    type: "ML Analytics",
    description: "ML model predicting student outcomes. cleaned data, engineered features, compared algorithms. more about the data engineering than the modeling honestly.",
    tech: ["Python", "pandas", "scikit-learn", "SQL"],
    impact: "identifies at-risk students early",
    link: "https://github.com/dammyolujobi/Student-Performance-Predictor"
  },
  {
    title: "Hostel Management System",
    type: "Full-Stack Application",
    description: "comprehensive system for managing hostel operations. built with TypeScript for type safety. handles room allocation, student records, and facility management.",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "Express"],
    impact: "streamlines hostel admin tasks",
    link: "https://github.com/dammyolujobi/HOSTEL-MANAGEMENT-SYSTEM"
  },
]

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mono">
            <span className="accent">02.</span> stuff i've built
          </h2>

          <div className="projects-grid">
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="project-header">
                  <span className="project-number mono">0{index + 1}</span>
                  <span className="project-type mono">{project.type}</span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag mono">{tech}</span>
                  ))}
                </div>
                
                <div className="project-impact mono">
                  <span className="impact-icon">→</span> {project.impact}
                </div>
                
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link mono">
                    view on github →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
