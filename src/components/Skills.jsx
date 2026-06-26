const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Bootstrap",
  "Git",
  "GitHub",
  "Context API",
  "React Router",
  // Add new skills here as you learn them 👇
  // "Redux Toolkit",
  // "Flask",
  // "Python",
];

export default function Skills() 
{
  return (
    <section className="py-5 bg-light" id="skills">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Skills</h2>
        <p className="text-center text-secondary mb-5">
          Technologies I work with
        </p>

        <div className="d-flex flex-wrap justify-content-center gap-3">
          {skills.map((skill) => (
            <div className="skill-badge" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
