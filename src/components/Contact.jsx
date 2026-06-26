export default function Contact() 
{
  return (
    <section className="py-5" id="contact">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Contact Me</h2>
        <p className="text-center text-secondary mb-5">Feel free to reach out!</p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card border-0 shadow-sm p-4">

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon me-3">📧</div>
                <div>
                  <p className="mb-0 text-secondary small">Email</p>
                  <a href="mailto:vivekraut7707@gmail.com" className="fw-semibold text-decoration-none text-dark">
                    vivekraut7707@gmail.com
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon me-3">💼</div>
                <div>
                  <p className="mb-0 text-secondary small">LinkedIn</p>
                  <a href="#" target="_blank" className="fw-semibold text-decoration-none text-dark">
                    linkedin.com/in/vivekraut
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <div className="contact-icon me-3">🐙</div>
                <div>
                  <p className="mb-0 text-secondary small">GitHub</p>
                  <a href="https://github.com/vivekraut78" target="_blank" className="fw-semibold text-decoration-none text-dark">
                    github.com/vivekraut78
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

