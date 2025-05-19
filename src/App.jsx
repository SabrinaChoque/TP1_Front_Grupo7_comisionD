import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Sidebar from './components/Sidebar';
import Sabrina from './pages/Sabrina';
import VideoJuegos from './pages/VideoJuegos';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sabrina" element={<Sabrina />} />
            <Route path="/videojuegos" element={<VideoJuegos />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
