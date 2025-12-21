export default function Header() {
  return (
    <header className="header" id="top">
      <div className="container">
        <div className="header__content">
          <div className="header__text">
            <h1 className="header__title">
              Hi, I'm <span className="gradient-text">Lucero Uzuriaga</span>
            </h1>
            <p className="header__subtitle">Web Developer</p>
            <p className="header__description">
              I create modern, responsive web applications with clean code...
            </p>
            <div className="header__buttons">
              <a href="#contact" className="btn btn--primary">Let's Connect</a>
              <a href="#work" className="btn btn--secondary">View My Work</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}