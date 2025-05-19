import { useEffect, useState } from 'react';
import '../styles/VideoJuegos.css';
import data from '../data/data.json'; 

function VideoJuegos() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    setJuegos(data.videojuegosDeSabrina || []);
  }, []);

  return (
    <div className="videojuegos">
      <h2>Videojuegos favoritos de Sabrina</h2>
      <div className="tarjetas-videojuegos">
        {juegos.map((juego, index) => (
          <div className="tarjeta-juego" key={index}>
            <h3>{juego.titulo}</h3>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Año:</strong> {juego.anio}</p>
            <p>{juego.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoJuegos;
