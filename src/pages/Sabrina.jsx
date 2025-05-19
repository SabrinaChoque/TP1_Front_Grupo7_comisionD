import '../styles/Sabrina.css'; 
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import github from '../assets/github.png';


function Sabrina() {
  return (
    <div className="pagina-sabrina">
       <h2>Sabrina Choque</h2>
            <p><strong>Habilidades e intereses:</strong><br />
             Desarrollo frontend, maquetación web, diseño con Figma.</p>
      
            <h3>Proyectos destacados</h3>
            <ul>
              <li>Portfolio personal</li>
              <li>Mini ecommerce en React</li>
              <li>Este trabajo práctico grupal</li>
            </ul>
      
            <h3>Tecnologías que uso</h3>
            <div className="tecnologias-sabrina">
              <img src={html} alt="HTML" />
              <img src={css} alt="CSS" />
              <img src={js} alt="JavaScript" />
              <img src={react} alt="React" />
              <img src={github} alt="GitHub" />
            </div>
    </div>
  );
}

export default Sabrina;
