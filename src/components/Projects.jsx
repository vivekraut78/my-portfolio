const projects = [
  {
    id: 1,
    title: "Weather App",
    description:
      "A weather application that fetches real-time data based on city name using a weather API.",
    tech: ["React", "API", "CSS"],
    github: "#",
  },
  {
    id: 2,
    title: "QuickMart App",
    description:
      "An e-commerce style app with product listing, cart functionality built using java.",
    tech: ["Java", "XML","SQLite" ,"badges"],
    github: "#",
  },
  {
    id: 3,
    title: "Social Media App",
    description:
      "A social media UI with posts, likes, and delete features using Context API and useReducer.",
    tech: ["React", "Context API", "useReducer", "React Router"],
    github: "#",
  },
  {
    id: 4,
    title: "ToDo App",
    description:
      "A task management app built with React using props and useState for state management.",
    tech: ["React", "useState", "Props"],
    github: "#",
  },
];

export default function Projects() 
{
  return (
    <section className="py-5" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">My Projects</h2>
        <p className="text-center text-secondary mb-5">
          Things I have built so far
        </p>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6" key={project.id}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body p-4">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-secondary">
                    {project.description}
                  </p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {project.tech.map((t) => (
                      <span className="badge bg-primary" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.github} className="btn btn-dark btn-sm">
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
