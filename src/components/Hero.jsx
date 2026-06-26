export default function Hero() 
{
  return (
    <section className="hero-section d-flex align-items-center" id="about">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-8">
                    <p className="text-primary fw-semibold mb-1">Hi, I'm</p>
                    <h1 className="display-4 fw-bold mb-2">Vivek Raut</h1>
                    <h2 className="h4 text-secondary mb-3">Frontend Developer</h2>
                    <p className="lead mb-4">
                        I build clean and responsive web applications using React.
                        Passionate about creating great user experiences.
                    </p>
                    <div className="d-flex gap-3">
                        <a href="#projects" className="btn btn-primary btn-lg">View Projects</a>
                        <a href="#contact" className="btn btn-outline-secondary btn-lg">Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

 