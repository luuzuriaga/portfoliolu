import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';
import news from "../public/images/news_explorer.png";
import aroundus from "../public/images/around-USA.png";
import geek from "../public/images/geek.png";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroOpacity = Math.max(1 - scrollY / 700, 0);

  const technologies = [
    { name: 'HTML5', color: '#E34F26', icon: 'https://github.com/user-attachments/assets/3afe139d-12b4-45d7-af43-c170461563eb' },
    { name: 'CSS3', color: '#1572B6', icon: 'https://github.com/user-attachments/assets/823f35f6-0cd9-44a4-acfa-8f3e687c1b9d' },
    { name: 'JavaScript', color: '#F7DF1E', icon: 'https://github.com/user-attachments/assets/a86e44d1-c4a6-4297-b487-65e9594fbbb3' },
    { name: 'React', color: '#61DAFB', icon: 'https://github.com/user-attachments/assets/5e0ea6e3-1fb0-40a7-b0f3-e03cbd9c0471' },
    { name: 'Vite', color: '#646CFF', icon: 'https://github.com/user-attachments/assets/ba6e40f7-f0a4-4952-93e0-b11ce109c93b' },
    { name: 'Node.js', color: '#339933', icon: 'https://github.com/user-attachments/assets/bcd4bf21-52f1-498b-8363-ebde88e88f4c' },
    { name: 'Express', color: '#FFFFFF', icon: 'https://github.com/user-attachments/assets/f9bbe27e-bc3a-4714-8b18-a9422dfde6d7' },
    { name: 'MongoDB', color: '#47A248', icon: 'https://github.com/user-attachments/assets/94871ae8-7c1f-4cff-9168-0b4f2b2d405b' },
    { name: 'Firebase', color: '#FFCA28', icon: 'https://github.com/user-attachments/assets/f778ce5f-f3ef-4ff2-bd7d-e9edf7977539' },
    { name: 'Figma', color: '#F24E1E', icon: 'https://github.com/user-attachments/assets/5b2a6798-48a4-4e93-a1a7-c077f84219c1' },
    { name: 'Python', color: '#3776AB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' }
  ];

  const projects = [
    {
      id: "01",
      title: "News explorer",
      tags: ["React", "Vite", "API", "NewsAPI", "CSS3"],
      year: "2025",
      image: news,
      demo: "https://news-explorer-frontend-lac.vercel.app",
      repo: "https://github.com/luuzuriaga/news-explorer-frontend"
    },
    {
      id: "02",
      title: "Around US",
      tags: ["React", "Vite", "API", "CSS3", "Google Cloud"],
      year: "2025",
      image: aroundus,
      demo: "https://around-the-us-web.vercel.app/",
      repo: "https://github.com/luuzuriaga/web_project_api_full"
    },
    {
      id: "03",
      title: "Geek Store",
      tags: ["javascript", "vercel", "api"],
      year: "2023",
      image: geek,
      demo: "https://geek-store-web.vercel.app/",
      repo: "https://github.com/luuzuriaga/GeekStore"
    }
  ];

  return (
    <div className="portfolio-dark">
      <nav className={`nav ${scrollY > 50 ? 'nav-blur' : ''}`}>
        <div className="container nav-content">
          <div className="logo">LU</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#stack">Stack</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="hero-bg-image"></div>
        <div className="hero-dark-layer"></div>
        <motion.div className="container hero-container" style={{ opacity: heroOpacity }}>
          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="hero-text">
              <h1>Hi, I'm <br /> <span className="neon-text">Lucero Uzuriaga</span></h1>
              <p className="subtitle">Full Stack Developer</p>
              <p className="description">I create modern, responsive web applications with clean code and exceptional user experiences.</p>
              <div className="hero-btns">
                <a href="#contact" className="btn-neon">Let's Connect</a>
                <a href="#about" className="btn-outline">About Me</a>
              </div>
            </motion.div>
            <div className="terminal-container">
              <div className="window code-window">
                <div className="window-header">
                  <div className="mac-btns"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div>
                  <span className="title">code_lucero.dev</span>
                </div>
                <div className="window-body code-text">
                  <p>01 <span className="p-blue">function</span> <span className="p-yellow">Lucero</span>() {'{'}</p>
                  <p>02 &nbsp;&nbsp;<span className="p-blue">const</span> name = <span className="p-green">"Lucero"</span>;</p>
                  <p>03 &nbsp;&nbsp;<span className="p-blue">const</span> role = <span className="p-green">"Full Stack Developer"</span>;</p>
                  <p>04 &nbsp;&nbsp;<span className="p-pink">return</span> ([name, role]);</p>
                  <p>05 {'}'}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Projects <span className="neon-text">highlight</span></h2>
          <div className="projects-list">
            {projects.map((project) => (
              <motion.div 
                key={project.id}
                className="project-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="project-content">
                  <div className="project-info-left">
                    <span className="project-number">{project.id}</span>
                    <div className="project-details">
                      <h3>{project.title}</h3>
                      <div className="project-tags">
                        {project.tags.map(tag => (
                          <motion.span 
                            key={tag} 
                            className="tag-pill"
                            whileHover={{ 
                              scale: 1.1, 
                              backgroundColor: "var(--neon-green)", 
                              color: "#150d30",
                              borderColor: "var(--neon-green)"
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>
                      <div className="project-actions">
                        <a href={project.demo} target="_blank" rel="noreferrer" className="action-link demo">
                          <span>Live Demo</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                        <a href={project.repo} target="_blank" rel="noreferrer" className="action-link repo">
                          <span>GitHub</span>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="project-image-preview">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info-right">
                    <span className="project-year">{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} transition={{duration: 0.6}} className="window portrait-window">
              <div className="window-header">
                <div className="mac-btns"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div>
                <span className="title">lucero_portrait.jpg</span>
              </div>
              <div className="window-body portrait-body">
                <img src="/images/foto3.jpg" alt="Lucero" className="responsive-img" />
                <p className="img-label"><span className="p-pink">location:</span> <span className="p-green">"Peru / Remote"</span></p>
              </div>
            </motion.div>

            <div className="about-info">
              <div className="info-stack">
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{duration: 0.6, delay: 0.1}} className="window info-mini">
                  <div className="window-header">
                    <div className="mac-btns"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div>
                    <span className="title">biography.md</span>
                  </div>
                  <div className="window-body">
                    <span className="p-blue">## Profile</span>
                    <p>I’m passionate about technology and design. I focus on creating<span className="p-yellow"> interfaces</span> that tell a story through the user experience.</p>
                  </div>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 50 }} transition={{duration: 0.6, delay: 0.2}} className="window info-mini">
                  <div className="window-header">
                    <div className="mac-btns"><span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span></div>
                    <span className="title">interests.json</span>
                  </div>
                  <div className="window-body">
                    <p><span className="p-pink">"passions"</span>: [</p>
                    <p>&nbsp;&nbsp;<span className="p-green">"Nature & Tech"</span>,</p>
                    <p>&nbsp;&nbsp;<span className="p-green">"Creative UI"</span>,</p>
                    <p>&nbsp;&nbsp;<span className="p-green">"Continuous Learning"</span></p>
                    <p>]</p>
                  </div>
                </motion.div>
                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} className="about-actions">
                  <a href="./docs/Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume">
                    <span className="p-blue">view</span>_resume<span className="p-yellow">()</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STACK SECTION */}
      <section id="stack" className="stack-section">
        <div className="container">
          <h2 className="section-title">Tech Stack</h2>
          <div className="stack-grid">
            {technologies.map((tech, index) => (
              <motion.div key={index} whileHover={{ y: -8, borderColor: tech.color }} className="tech-card">
                <div className="tech-icon-wrapper">
                   <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
                </div>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: WHY ME / SOLUTIONS */}
      <section className="why-me-section">
        <div className="container">
          <h2 className="section-title">Why work <span className="neon-text">with me?</span></h2>
          <div className="services-grid">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="service-card"
            >
              <div className="service-icon">🚀</div>
              <h3>Custom Development</h3>
              <p>I develop tailored Full Stack applications, from design to functional deployment, ensuring scalability and performance."</p>
              <ul className="service-list">
                <li>SPA with React & Vite</li>
                <li>RESTful APIs</li>
                <li>E-commerce & Dashboards</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="service-card highlighted"
            >
              <div className="service-icon">🎨</div>
              <h3>UI/UX Focused</h3>
              <p>I don't just write code, I design experiences. I focus on clean, intuitive interfaces with smooth animations that captivate the user.</p>
              <ul className="service-list">
                <li>Responsive Design</li>
                <li>Micro-interactions</li>
                <li>Web Accessibility</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="service-card"
            >
              <div className="service-icon">🤝</div>
              <h3>Agile & Committed</h3>
              <p>I seek to collaborate on projects that challenge my limits. My approach is constant communication, fast learning, and delivering real value.</p>
              <ul className="service-list">
                <li>Clean Code</li>
                <li>Git/GitHub Workflow</li>
                <li>Problem Solving</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer-connect">
        <div className="container">
          <motion.div whileInView={{ scale: 1, opacity: 1 }} initial={{ scale: 0.9, opacity: 0 }} className="connect-card">
            <h2 className="connect-title">Let's <span className="neon-text">Connect</span></h2>
            <p className="connect-subtitle">¿Tienes un proyecto en mente? Escríbeme y hagámoslo realidad.</p>
            <div className="contact-button-wrapper">
              <a href="mailto:Lucero.uzuriaga2020@gmail.com" className="btn-contact-main">
                <span>Send Email</span>
              </a>
            </div>
            <div className="social-links">
               <a href="https://github.com/luuzuriaga" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                  <span>GitHub</span>
               </a>
               <a href="https://www.linkedin.com/in/lucerouzuriaga/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                  <span>LinkedIn</span>
               </a>
            </div>
            <p className="copyright">© 2025 Lucero Uzuriaga</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;