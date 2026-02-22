import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-content">
        <a href="#home" className="logo mono">
          &lt;olujobi <span>/</span>&gt;
        </a>
        
        <div className="nav-links">
          <a href="#about" className="mono">// about</a>
          <a href="#projects" className="mono">// projects</a>
          <a href="#skills" className="mono">// skills</a>
          <a href="#contact" className="nav-btn">let's talk</a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
