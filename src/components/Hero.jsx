import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const roles = ['backend dev', 'rust enthusiast', 'api builder']
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1))
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setText(currentRole.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, roleIndex])

  return (
    <section id="home" className="hero section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.p 
            className="hero-greeting mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            hey there 👋
          </motion.p>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            I'm <span className="gradient-text">Olujobi David</span>
          </motion.h1>
          
          <motion.div 
            className="hero-role mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="role-static">{'> '}</span>
            <span className="role-dynamic">{text}</span>
            <span className="cursor">_</span>
          </motion.div>
          
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            building backend systems and APIs that actually work.<br/>
            CS student @ Covenant University who likes rust and clean code.
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <a href="#projects" className="cta-primary">
              see my work
            </a>
            <a href="mailto:olujobidamilola82@gmail.com" className="cta-secondary mono">
              email me →
            </a>
          </motion.div>

          <motion.div 
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <a href="https://github.com/dammyolujobi" target="_blank" rel="noopener noreferrer" className="mono">
              github
            </a>
            <span className="separator">/</span>
            <a href="https://www.linkedin.com/in/olujobi-damilola-a9a8472b9/" target="_blank" rel="noopener noreferrer" className="mono">
              linkedin
            </a>
            <span className="separator">/</span>
            <a href="tel:+23490681120143" className="mono">
              phone
            </a>
          </motion.div>
        </motion.div>

        {/* Floating code blocks decoration */}
        <div className="floating-elements">
          <motion.div 
            className="code-block"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="mono">cargo build</span>
          </motion.div>
          <motion.div 
            className="code-block"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="mono">FastAPI</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
