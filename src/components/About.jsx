import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mono">
            <span className="accent">01.</span> about
          </h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                i build backends. APIs, databases, CLIs - the stuff that powers applications 
                but users never see. currently learning <span className="highlight">Rust</span> because 
                i like fast, reliable code.
              </p>
              <p>
                also do some <span className="highlight">data work</span> and 
                <span className="highlight"> machine learning</span> when projects need it. 
                databases, REST APIs, and clean architecture are my thing.
              </p>
              <p>
                right now i'm working on command-line tools, backend services, and anything 
                that involves databases. simple, functional, fast.
              </p>
              
              <div className="quick-facts">
                <div className="fact">
                  <span className="fact-label mono">location:</span>
                  <span className="fact-value">Nigeria 🇳🇬</span>
                </div>
                <div className="fact">
                  <span className="fact-label mono">education:</span>
                  <span className="fact-value">Covenant University</span>
                </div>
                <div className="fact">
                  <span className="fact-label mono">status:</span>
                  <span className="fact-value">building & learning</span>
                </div>
              </div>
            </div>

            <div className="about-visual">
              <div className="code-snippet">
                <div className="snippet-header mono">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="file-name">about_me.py</span>
                </div>
                <div className="snippet-code mono">
                  <div><span className="keyword">class</span> <span className="class-name">BackendDeveloper</span>:</div>
                  <div className="indent1"><span className="keyword">def</span> <span className="function">__init__</span>(self):</div>
                  <div className="indent2">self.name = <span className="string">"Olujobi Damilola"</span></div>
                  <div className="indent2">self.location = <span className="string">"Nigeria"</span></div>
                  <div className="indent2">self.languages = [</div>
                  <div className="indent3"><span className="string">"Python"</span>,</div>
                  <div className="indent3"><span className="string">"Rust"</span>,</div>
                  <div className="indent3"><span className="string">"SQL"</span></div>
                  <div className="indent2">]</div>
                  <div className="indent2">self.focus = [</div>
                  <div className="indent3"><span className="string">"REST APIs"</span>,</div>
                  <div className="indent3"><span className="string">"Databases"</span>,</div>
                  <div className="indent3"><span className="string">"CLI Tools"</span></div>
                  <div className="indent2">]</div>
                  <div>&nbsp;</div>
                  <div className="indent1"><span className="keyword">def</span> <span className="function">current_vibe</span>(self):</div>
                  <div className="indent2"><span className="keyword">return</span> <span className="string">"building backend systems"</span></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
