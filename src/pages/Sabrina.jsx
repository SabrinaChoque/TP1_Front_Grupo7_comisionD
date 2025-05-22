import React from "react";
import '../styles/Sabrina.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import clinica from '../assets/ClinicaSprice.jpg';
import club from '../assets/ClubDeportivo.jpg';

function Sabrina() {
  return (
    <>
      <header>
        <div className="presentacion">
          <h1>Sabrina Choque</h1>
        </div>
      </header>

      <main>
        <div className="titulo">Habilidades e intereses</div>

        <div className="habilidades-intereses">
          <div className="bloque">
            <h3>Habilidades</h3>
            <ul>
              <li>Desarrollo frontend con React y JavaScript moderno</li>
              <li>Maquetación web con HTML y CSS</li>
              <li>Diseño de interfaces en Figma</li>
              <li>Trabajo en equipo usando Git y GitHub</li>
            </ul>
          </div>

          <div className="bloque">
            <h3>Intereses</h3>
            <ul>
              <li>Explorar nuevas tecnologías frontend</li>
              <li>Diseño UX/UI</li>
              <li>Gamificación en interfaces</li>
              <li>Videojuegos y apps creativas</li>
            </ul>
          </div>
        </div>

        <div className="proyectos_trabajados">Proyectos destacados</div>

        <div className="contenedor_proyectos">
          <div className="proyecto">
            <h2>Proyecto 1: Sistema para clínica Seprise</h2>
            <p>Aplicación de escritorio para gestionar turnos, pacientes, acreditación y stock en una clínica.</p>
            <img src={clinica} alt="Proyecto Clínica" />
          </div>
          <div className="proyecto">
            <h2>Proyecto 2: App de gestión - Club Deportivo</h2>
            <p>Aplicación para controlar clientes de un club: registrar usuarios, generar carnets y pagos.</p>
            <img src={club} alt="Proyecto Club" />
          </div>
        </div>

        <div className="iconos_tecnologias">
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={js} alt="JavaScript" />
          <img src={react} alt="React" />
          <img src={github} alt="GitHub" />
        </div>
      </main>

      <footer className="footer">
        © 2025 Sabrina Choque. Todos los derechos reservados
      </footer>
    </>
  );
}

export default Sabrina;
