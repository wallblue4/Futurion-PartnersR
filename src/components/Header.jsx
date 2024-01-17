import React from 'react';

const Header = (props) => {
    return (
        <header className="header mt-lg-3 mt-xl-5 mt-4">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{"backgroundColor": "#052455"}}>
          <div className="container">
            <a className="navbar-brand" href="/">Futurion Partners | Novitas Futuri: Excidere Limites</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Inicio
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#servicios">Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#casos-exito">Casos de éxito</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#equipo">Equipo</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contacto">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
    );
};

export default Header;
