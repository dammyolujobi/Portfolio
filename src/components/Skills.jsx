import { motion } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    name: "backend & apis",
    skills: ["Python", "Rust", "FastAPI", "Flask", "REST APIs", "JWT Auth"]
  },
  {
    name: "databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "SQL", "Database Design"]
  },
  {
    name: "tools & devops",
    skills: ["Git", "Docker", "Linux", "Neovim", "CLI Tools", "cargo"]
  },
  {
    name: "data & ml (when needed)",
    skills: ["pandas", "NumPy", "scikit-learn", "PyTorch", "Data Analysis"]
  },
]

const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mono">
            <span className="accent">03.</span> tech stack
          </h2>

          <div className="skills-intro">
            <p className="mono">
              const stack = &#123; // what i actually use to build stuff
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="skill-category"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
              >
                <h3 className="category-name mono">
                  <span className="bracket">{'{'}</span> {category.name}
                </h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="skill-item mono"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      <span className="bullet">→</span> {skill}
                    </motion.div>
                  ))}
                </div>
                <div className="closing-bracket mono">&#125;</div>
              </motion.div>
            ))}
          </div>

          <div className="skills-outro mono">
            <p>&#125; // and always learning more...</p>
          </div>

          <div className="certification-box">
            <div>
              <h4>Recent Certification</h4>
              <p className="mono">Deloitte Data Analytics Job Simulation @ Forage (Feb 2025)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
