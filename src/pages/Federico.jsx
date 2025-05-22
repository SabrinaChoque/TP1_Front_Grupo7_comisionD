import ProjectCard from "../components/ProjectCard";
import "../styles/Federico.css";

const Federico = () => {
  const proyectos = [
    {
      title: "Sistema de Gestión Clínica SePrise",
      description: "Aplicación de escritorio desarrollada en C#. Incluye inicio de sesión, agenda de turnos por especialidad médica y control de insumos clínicos.",
      technologies: [
        { name: "C#", icon: "/src/assets/c-sharp.png" },
        { name: "Git", icon: "/src/assets/git.png" }
      ]
    },
    {
      title: "App de Gestión para Club Deportivo",
      description: "Aplicación de escritorio en C# y versión adaptada a Android con Android Studio. Permite gestionar socios, pagos de cuotas y reportes.",
      technologies: [
        { name: "C#", icon: "/src/assets/c-sharp.png" },
        { name: "Kotlin", icon: "/src/assets/kotlin.svg" }
      ]
    },
    {
      title: "Portfolio Personal",
      description: "Sitio básico hecho en HTML y CSS para mostrar información personal y contacto.",
      technologies: [
        { name: "HTML", icon: "/src/assets/html.png" },
        { name: "CSS", icon: "/src/assets/css.png" }
      ]
    }
  ];

  const habilidades = ["C#", "HTML5", "CSS3", "JavaScript", "Python", "Git"];

  const tecnologias = [
    { name: "HTML", icon: "/src/assets/html.png" },
    { name: "CSS", icon: "/src/assets/css.png" },
    { name: "JavaScript", icon: "/src/assets/js.png" },
    { name: "Python", icon: "/src/assets/python.png" },
    { name: "React", icon: "/src/assets/react_solo.png" },
    { name: "Git", icon: "/src/assets/git.png" },
    { name: "GitHub", icon: "/src/assets/github.png" },
    { name: "C#", icon: "/src/assets/c-sharp.png" }
  ];

  return (
    <div className="federico-container">
      <header className="federico-header">
        <h1>Federico Manuel Castro Koppetsch</h1>
      </header>

      <main>
        <section>
          <h2>Habilidades en programación</h2>
          <ul>
            {habilidades.map((hab, idx) => (
              <li key={idx}>{hab}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Proyectos</h2>
          <div className="proyectos-grid horizontal">
            {proyectos.map((proyecto, idx) => (
              <ProjectCard key={idx} {...proyecto} />
            ))}
          </div>
        </section>

        <section>
          <h2>Tecnologías que uso</h2>
          <div className="tecnologias-grid">
            {tecnologias.map((tech, idx) => (
              <div key={idx} className="tecnologia-item">
                <img src={tech.icon} alt={tech.name} />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Federico Castro</p>
      </footer>
    </div>
  );
};

export default Federico;