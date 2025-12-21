import { useEffect } from 'react';
import './index.css';

function App() {
  // Efecto para el fondo del Nav al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      if (window.scrollY > 50) {
        nav.style.background = 'rgba(26, 20, 16, 0.9)';
        nav.style.backdropFilter = 'blur(10px)';
      } else {
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navegación Estilo Premium */}
      <nav className="nav">
        <div className="container nav__content">
          <div className="nav__logo">LU</div>
          <ul className="nav__items">
            <li><a href="#work" className="nav__link">Work</a></li>
            <li><a href="#frameworks" className="nav__link">Tech Stack</a></li>
            <li><a href="#about" className="nav__link">About</a></li>
            <li><a href="#contact" className="nav__link">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section con Imagen Estilo Van Gogh */}
      <header className="header">
        <div className="header__overlay"></div>
        <div className="container header__container">
          <div className="header__content">
            <h1 className="header__title">
              Hi, I'm <span className="gradient-text">Lucero Uzuriaga</span>
            </h1>
            <p className="header__subtitle">Web Developer</p>
            <p className="header__description">
              I create modern, responsive web applications with clean code and exceptional user experiences.
            </p>
            <div className="header__buttons">
              <a href="#contact" className="btn btn--primary">Let's Connect</a>
              <a href="#work" className="btn btn--secondary">View My Work</a>
            </div>
          </div>
          <div className="header__scroll">
            <span>Scroll Down</span>
            <div className="arrow"></div>
          </div>
        </div>
      </header>

      {/* Resto de secciones (Work, About, etc.) */}
      <main className="content-wrapper">
         {/* Aquí puedes seguir pegando las secciones de Proyectos que te pasé antes */}
      </main>
    </>
  );
}

export default App;