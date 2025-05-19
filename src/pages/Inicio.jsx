import { Link } from 'react-router-dom';
import '../styles/Inicio.css';
import reactImg from '../assets/react.png'; // Usamos una imagen genérica temporal


function Inicio() {
  const integrantes = [
    {
      nombre: 'Sabrina Choque',
      ruta: '/sabrina',
      imagen: reactImg
    },
    {
      nombre: 'Damian Coronel Burgos',
      ruta: '/damian',
      imagen: reactImg
    },
    {
      nombre: 'Federico Acosta',
      ruta: '/federico',
      imagen: reactImg
    },
    {
      nombre: 'Alejandro Cubas',
      ruta: '/alejandro',
      imagen: reactImg
    }
  ];

  return (
    <div className="inicio">
      <h1>Te damos la bienvenida a los Simuladores</h1>
      <p>Somos el grupo 7 de comisión D. Este es nuestro trabajo práctico integrador de Desarrollo Frontend.</p>

      <h2>Conocé al equipo</h2>
      <div className="tarjetas">
        {integrantes.map((int) => (
          <div className="tarjeta" key={int.nombre}>
            <img
              src={int.imagen}
              alt={int.nombre}
              className="foto-integrante"
            />
            <h3>{int.nombre}</h3>
            <Link to={int.ruta}>Ver perfil</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
