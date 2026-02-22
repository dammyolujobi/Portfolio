import { motion } from 'framer-motion'
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = formState
    
    const mailtoLink = `mailto:olujobidamilola82@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
    
    window.location.href = mailtoLink
    setStatus('opening your email client...')
    
    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' })
      setStatus('')
    }, 2000)
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mono">
            <span className="accent">04.</span> let's connect
          </h2>

          <div className="contact-content">
            <div className="contact-info">
              <div className="info-text">
                <h3>need a backend dev?</h3>
                <p>
                  working on something cool? need help with an API or database? 
                  or just wanna talk about rust and backend stuff - hit me up.
                </p>
              </div>

              <div className="contact-methods">
                <a href="mailto:olujobidamilola82@gmail.com" className="contact-method">
                  <div>
                    <div className="method-label mono">email</div>
                    <div className="method-value">olujobidamilola82@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+23490681120143" className="contact-method">
                  <div>
                    <div className="method-label mono">phone</div>
                    <div className="method-value">+234 906 811 20143</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/olujobi-damilola-a9a8472b9/" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div>
                    <div className="method-label mono">linkedin</div>
                    <div className="method-value">@olujobi-damilola-a9a8472b9</div>
                  </div>
                </a>

                <a href="https://github.com/dammyolujobi" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <div>
                    <div className="method-label mono">github</div>
                    <div className="method-value">@dammyolujobi</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <div className="form-header mono">
                <span className="form-comment">// send me a message</span>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="mono">name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="mono">email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="mono">message:</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="what's on your mind?"
                  />
                </div>

                <button type="submit" className="submit-btn mono">
                  send message →
                </button>

                {status && (
                  <motion.div 
                    className="form-status mono"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {status}
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
