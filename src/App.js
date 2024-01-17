
import './styles/styles.css';
import Header from './components/Header';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Main></Main>
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasScrollingLabel">David Santiago Ramos</h5>
      <h6 className="card-subtitle mb-2 text-body-secondary">Lider de operaciones y M&A</h6>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <p>Apasionado de la economía conductual y la psicología del consumidor, curioso por descubrir qué ocurre en la mente de las personas al tomar decisiones en diferentes contextos. Utilizando técnicas de ciencia de datos e inteligencia artificial, busco descubrir los factores que activan ciertos comportamientos y preferencias. Mi objetivo es ayudar a las empresas a diseñar mejores productos, servicios y estrategias que generen valor tanto para los clientes como para los negocios. </p>
    </div>
  </div>
  <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling2" aria-labelledby="offcanvasScrollingLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Daniel Hurtado</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <p>Hábil en programación Python y competente en herramientas de análisis de datos como Pandas, Numpy, Matplotlib, TensorFlow y scikit-learn. He adquirido conocimientos prácticos en visión por computador a través de proyectos reales en Robocol.</p>
    </div>
  </div>
  <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling3" aria-labelledby="offcanvasScrollingLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Juan Sebastián Medina</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <p>Ingeniero de Software y Fundador en el Campo de la Inteligencia Artificial, con experiencia destacada en el desarrollo utilizando frameworks como React, Next y Express. He liderado equipos exitosos en la implementación de soluciones innovadoras y participado en investigaciones pioneras en el ámbito de la computación cuántica y algoritmia. Mi enfoque se centra en la vanguardia de la innovación, colaborando con expertos en el desarrollo de tecnologías de próxima generación y abordando los desafíos más apasionantes del campo de la inteligencia artificial.</p>
    </div>
  </div>
  <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling4" aria-labelledby="offcanvasScrollingLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Robinson Beltrán</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <p>Hábil en programación Python y competente en herramientas de análisis de datos como Pandas, Numpy, Matplotlib, TensorFlow y scikit-learn. He adquirido conocimientos prácticos en visión por computador a través de proyectos reales en Robocol.</p>
    </div>
  </div>
  <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling5" aria-labelledby="offcanvasScrollingLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Kevin Fabio Ramos</h5>
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body">
      <p>Además, trabaja como desarrollador de software en esta universidad, donde pone en práctica sus habilidades en proyectos de interés público que involucran soluciones digitales.</p>
    </div>
  </div>
    </div>


  );
}

export default App;
