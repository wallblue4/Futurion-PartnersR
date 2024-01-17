import React from 'react';
import FUTURIONLW from "../assets/FUTURION logo white.jpg";
import AssetstheMachine from "../assets/Firefly-Machine-learning-61452-_1_-_1_.webp";
import MathforEng from "../assets/Firefly-mathematics-for-engineering-74475.webp";
import DavidSantiagoPh from "../assets/Santiago.jpeg";
import DanielHurtadoPh from "../assets/Daniel.png";
import JuanMedinaPh from "../assets/Sebastian.png";
import KevinFabioRamosPh from "../assets/1674778784978.jpeg";
import RobinsonBeltranPh from "../assets/Robinson.png";


const Main = (props) => {
    return (
        <div>
    <main className="pt-3">
    <section className="hero mt-5 mt-md-4 mt-lg-3"  >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-left">
            <h1 className="display-3 wow fadeInUp">Llevamos tu negocio al <span className="text-primary">próximo nivel</span></h1>
            <p className="lead wow fadeInUp" data-wow-delay="0.2s">Impulsamos el crecimiento digital de empresas a través de soluciones tecnológicas innovadoras y estrategias de vanguardia.</p>
            <a href="#contacto" className="btn btn-primary custom-button wow fadeInUp" data-wow-delay="0.4s">Contáctanos</a>
          </div>
          <div className="col-md-6 text-center">
            <img src={FUTURIONLW} className="img-fluid wow fadeInUp scale-in-hor-right" alt="Imagen de tecnología"/>
          </div>
        </div>
        
      </div>
    </section>

    <section className="servicios" id="servicios">
      <div className="container">
        <h2 className="text-center display-4 m-5">Servicios que te ayudarán a crecer</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="fas fa-chart-line fa-5x"></i>
            <h3>Planificación estratégica</h3>
            <p>Desarrollamos un plan de acción personalizado para que alcances tus objetivos de negocio.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-server fa-5x"></i>
            <h3>Implementación de sistemas</h3>
            <p>Instalamos y configuramos las herramientas tecnológicas que necesitas para optimizar tus procesos.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-rocket fa-5x"></i>
            <h3>Desarrollo de aplicaciones a medida</h3>
            <p>Creamos soluciones digitales únicas que se adaptan a las necesidades específicas de tu empresa.</p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <i className="fas fa-cogs fa-5x"></i>
            <h3>Soporte técnico continuo</h3>
            <p>Proporcionamos asistencia y mantenimiento para garantizar el funcionamiento adecuado de tus sistemas.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-users fa-5x"></i>
            <h3>Capacitación y formación</h3>
            <p>Ofrecemos programas de entrenamiento para el uso efectivo de las nuevas tecnologías en tu empresa.</p>
          </div>
          <div className="col-md-4">
            <i className="fas fa-shield-alt fa-5x"></i>
            <h3>Seguridad informática</h3>
            <p>Implementamos medidas de seguridad para proteger tus datos y sistemas contra amenazas cibernéticas.</p>
          </div>
        </div>
      </div>
    </section>
    <section>
        <div className="container" id="casos-exito">
            <h2 className="text-center display-4 m-5">Creando oportunidades inimaginables en un mundo en constante cambio.</h2>
            <div className="row">
            <div className="col-md-6">
                <div className="card mb-3">
                <img src={AssetstheMachine} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Empresa de tecnología</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    <a href="#v1" className="btn btn-primary custom-button wow fadeInUp" data-wow-delay="0.4s">Ver más</a>
                </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card mb-3">
                <img src={MathforEng} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Empresa de tecnología</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    <a href="#v2" className="btn btn-primary custom-button wow fadeInUp" data-wow-delay="0.4s">Ver más</a>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
    <section style={{"backgroundColor": "#052455"}}>
      <div className="container" id="equipo">
          <h2 className="text-center text-white display-4 m-5">Equipo</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
              <div className="col mb-3">
                  <div className="card h-100">
                      <img src={DavidSantiagoPh} className="card-img-top" alt="..." style={{"width": "auto", "height": "370px"}}/>
                      <div className="card-body">
                          <h5 className="card-title">David Santiago Ramos</h5>
                          <p className="card-text">Chief Executive Officer.</p>
                          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Ver más</button>
                      </div>
                  </div>
              </div>
              <div className="col mb-3">
                  <div className="card h-100">
                      <img src={DanielHurtadoPh} className="card-img-top" alt="..." style={{"width": "auto", "height": "370px"}}/>
                      <div className="card-body">
                          <h5 className="card-title">Daniel Hurtado</h5>
                          <p className="card-text">Estudiante de ingeniería electrónica de la Universidad de Los Andes con gran interés por la ciencia de datos, el aprendizaje automático y la visión por ordenador.</p>
                          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling2" aria-controls="offcanvasScrolling">Ver más</button>
                      </div>
                  </div>
              </div>
              <div className="col mb-3">
                  <div className="card h-100">
                      <img src={JuanMedinaPh} className="card-img-top" alt="..." style={{"width": "auto", "height": "370px"}}/>
                      <div className="card-body">
                          <h5 className="card-title">Juan Sebastián Medina</h5>
                          <p className="card-text">Estudiante de ingeniería de sistemas de la Universidad Nacional de Colombia.</p>
                          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling3" aria-controls="offcanvasScrolling">Ver más</button>
                      </div>
                  </div>
              </div>
              <div className="col mb-3">
                <div className="card h-100">
                    <img src={RobinsonBeltranPh} className="card-img-top" alt="..." style={{"width": "auto", "height": "370px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Robinson Beltrán</h5>
                        <p className="card-text">Estudiante de ingeniería mecatrónica de la Universidad .</p>
                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling4" aria-controls="offcanvasScrolling">Ver más</button>
                    </div>
                </div>
            </div>
            <div className="col mb-3">
              <div className="card h-100">
                  <img src={KevinFabioRamosPh} className="card-img-top img-fluid" alt="..." style={{"width": "auto", "maxHeight": "370px"}}/>
                  <div className="card-body">
                      <h5 className="card-title">Kevin Fabio Ramos</h5>
                      <p className="card-text">Estudiante de ingeniería de sistemas de la Universidad Nacional de Colombia. Desarrollador de software con experiencia en SQL, desarrollo back-end y metodologías ágiles como Scrum.</p>
                      <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling5" aria-controls="offcanvasScrolling">Ver más</button>
                  </div>
                  
              </div>
          </div>
             
          </div>
      </div>
     </section>
  
    <section>
      
        <div className="container" id="contacto">
          <h2 className="text-center display-4 m-5">Contacto</h2>
      </div>
      <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Dirección de email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g tecnologia@example.com"/>
          <div id="emailHelp" className="form-text">Nunca compartiremos tu correo electrónico con nadie.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre"/>
        </div>
        <div className="mb-3">
          <label htmlFor="organization" className="form-label">Empresa</label>
          <input type="text" className="form-control" id="empresa"/>
          </div>
        <div className="mb-3"> 
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea className="form-control" id="message" rows="3"></textarea>	
        </div>
        <button type="submit" className="btn btn-primary custom-button wow fadeInUp" data-wow-delay="0.4s">Enviar</button>
      </form>
      </div>
        </section>



  </main>
        </div>
    );
};

export default Main;
