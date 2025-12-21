export default function Navbar() {
  return (
    <nav className="nav" role="navigation">
      <div className="container nav__content">
        <div className="nav__logo">LU</div>
        <ul className="nav__items">
          <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
          <li className="nav__item"><a href="#frameworks" className="nav__link">Tech Stack</a></li>
          <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
          <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}