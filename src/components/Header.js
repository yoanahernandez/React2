import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg card container">
      <div className="container ">
        <a style={{ textShadow: "1px 1px 2px black" }}  className="navbar-brand text-primary" href="#home"><h3>MI PORTAFOLIO</h3></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a style={{ textShadow: "1px 1px 2px black" }} className="nav-link text-primary" href="#about"><h5>SOBRE MI</h5></a>
            </li>
            <li className="nav-item">
              <a style={{ textShadow: "1px 1px 2px black" }} className="nav-link  text-primary" href="#projects"><h5>PROYECTOS</h5></a>
            </li>
            <li className="nav-item">
              <a style={{ textShadow: "1px 1px 2px black" }} className="nav-link  text-primary" href="#contact"><h5>CONTACTO</h5></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
