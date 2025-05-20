import { useEffect, useState } from 'react';
import '../styles/VideoJuegos.css';
import data from '../data/data.json'; 

function VideoJuegos() {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    setJuegos(data.videojuegosDeSabrina || []);
    setJuegos(data.videojuegosDeDamian || []);
  }, []);

  return (
<div className="videojuegos">
      <h2>Videojuegos favoritos de Sabrina</h2>
      <div className="tarjetas-videojuegos">
        {juegos.map((juego, index) => (
          <div className="tarjeta-juego" key={`sabrina-${index}`}>
            <h3>{juego.titulo}</h3>
            <p><strong>Género:</strong> {juego.genero}</p>
            <p><strong>Año:</strong> {juego.anio}</p>
            <p>{juego.descripcion}</p>
          </div>
        ))}
      </div>

      <h2>Videojuegos favoritos de Damian</h2>
      <div className="tarjetas-videojuegos">
        {juegos.map((juego, index) => (
          <div className="tarjeta-juego" key={`damian-${index}`}>
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
