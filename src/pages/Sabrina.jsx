import React from "react";
import '../styles/Sabrina.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import clinica from '../assets/ClinicaSprice.jpg';
import club from '../assets/ClubDeportivo.jpg';
import inmobiliaria from '../assets/InmobiliariaAlquilarte.jpg';

function Sabrina() {
  return (
    <>
     <div className="sabrina-fondo">
      <div className="sabrina-header">
        <div className="sabrina-banner">
          <h1>Sabrina Choque</h1>
          <p className="sabrina-subtitulo">Desarrolladora Frontend | Apasionada por el diseño UX/UI</p>
        </div>
      </div>
      <main>
        <div className="sabrina-titulo">Habilidades e intereses</div>

        <div className="sabrina-habilidades-intereses">
          <div className="sabrina-bloque">
            <h3>Habilidades</h3>
            <ul>
              <li>Desarrollo frontend con React y JavaScript moderno</li>
              <li>Maquetación web con HTML y CSS</li>
              <li>Diseño de interfaces en Figma</li>
              <li>Trabajo en equipo usando Git y GitHub</li>
            </ul>
          </div>

          <div className="sabrina-bloque">
            <h3>Intereses</h3>
            <ul>
              <li>Explorar nuevas tecnologías frontend</li>
              <li>Diseño UX/UI</li>
              <li>Gamificación en interfaces</li>
              <li>Videojuegos y apps creativas</li>
            </ul>
          </div>
        </div>

        <div className="sabrina-titulo sabrina-proyectos">Proyectos destacados</div>

        <div className="sabrina-contenedor-proyectos">
          <div className="sabrina-proyecto">
            <h2>Proyecto 1: Sistema para clínica Seprise</h2>
            <p>Aplicación de escritorio para gestionar turnos, pacientes, acreditación y stock en una clínica.</p>
            <img src={clinica} alt="Proyecto Clínica" />
          </div>
          <div className="sabrina-proyecto">
            <h2>Proyecto 2: App de gestión - Club Deportivo</h2>
            <p>Aplicación para controlar clientes de un club: registrar usuarios, generar carnets y pagos.</p>
            <img src={club} alt="Proyecto Club" />
          </div>
          <div className="sabrina-proyecto">
            <h2>Proyecto 3: Inmobiliaria Alquilarte - Backend</h2>
            <p>Simulación de base de datos con JSON, CRUD con Thunder Client y vista con PUG.</p>
            <img src={inmobiliaria} alt="Inmobiliaria Alquilarte" />
          </div>
        </div>

        <div className="sabrina-iconos">
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={js} alt="JavaScript" />
          <img src={react} alt="React" />
          <img src={github} alt="GitHub" />
        </div>
      </main>

      <footer className="sabrina-footer">
        © 2025 Sabrina Choque. Todos los derechos reservados
      </footer>
     </div>     

    </>
  );
}

export default Sabrina;
