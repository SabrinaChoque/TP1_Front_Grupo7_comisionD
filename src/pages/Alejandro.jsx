import React from "react";
import '../styles/Alejandro.css'; 
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import sql from '../assets/Sql.png';
import python from '../assets/python.png';
import looker from '../assets/looker.png';
import aplicacion_movil from '../assets/aplicacion_movil.png';
import base_de_datos from '../assets/base_de_datos.png';
import pagina_web from '../assets/pagina_web.png';

function Alejandro() {
  return (
    <>
    <div className="fondo-alejandro">
      <header>
        <div className="caja-nombre">
          <h1>Alejandro [Tu Apellido]</h1>
        </div>
      </header>

      <main>
        <div className="titulo">Habilidades en programación</div>

        <div className="listado_habilidades">
          <p className="parrafo_habilidades">
            <ul>
              <li>JavaScript moderno – ES6+, uso de módulos, async/await.</li>
              <li>React – componentes funcionales, hooks y rutas.</li>
              <li>Node.js – desarrollo backend básico con Express.</li>
              <li>HTML y CSS – diseño responsive con Flexbox y Grid.</li>
              <li>SQL – consultas, relaciones y modelado de datos.</li>
            </ul>
          </p>
        </div>

        <div className="proyectos_trabajados">Proyectos trabajados</div>

        <div className="contenedor_proyectos">

          <div className="proyecto_uno">
            <h2>Proyecto n° 1: [Nombre del Proyecto]</h2>
            <p>[Descripción del proyecto 1 que hayas realizado, por ejemplo algo con base de datos o backend]</p>
            <div><img src={base_de_datos} alt="Base de datos" /></div>
          </div>

          <div className="proyecto_uno">
            <h2>Proyecto n° 2: [Nombre del Proyecto]</h2>
            <p>[Descripción del proyecto 2, como una página web o sistema en React]</p>
            <div><img src={pagina_web} alt="Página web" /></div>
          </div>

          <div className="proyecto_uno">
            <h2>Proyecto n° 3: [Nombre del Proyecto]</h2>
            <p>[Descripción del proyecto 3, por ejemplo una app móvil o de escritorio]</p>
            <div><img src={aplicacion_movil} alt="Aplicación móvil" /></div>
          </div>

        </div>

        <div className="Iconos_tecnologias">
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={js} alt="JavaScript" />
          <img src={react} alt="React" className="rotar" />
          <img src={python} alt="Python" />
          <img src={sql} alt="SQL" />
          <img src={looker} alt="Looker" />
        </div>
      </main>

      <footer className="footer">
        <div>© 2025 Alejandro [Tu Apellido]. Todos los derechos reservados</div>
      </footer>
    </div>
    </>
  );
}

export default Alejandro;
