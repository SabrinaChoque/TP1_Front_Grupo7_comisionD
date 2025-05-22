import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sidebar from './components/Sidebar';
import Sabrina from './pages/Sabrina';
import VideoJuegos from './pages/VideoJuegos';
import Api from './pages/Api';
import Bitacora from './pages/Bitacora';
import './App.css'; // Asegurate de importar el CSS aquí

function App() {
  return (
    <Router>
      <div className="contenedor-principal">
        <Sidebar />
        <main className="contenido-principal">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sabrina" element={<Sabrina />} />
            <Route path="/videojuegos" element={<VideoJuegos />} />
            <Route path="/api" element={<Api />} />
            <Route path="/bitacora" element={<Bitacora />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
