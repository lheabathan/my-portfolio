import './style.css';

function App() {
  
  return (
    <div className="portfolio">
      {/* Navigation Bar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          Lhea <span>Bathan</span>
        </a>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="home-content">
          <p className="greeting">
           WELCOME TO MY LITTLE CORNER OF THE WEB! I'M GLAD YOU'RE HERE.
          </p>

          <h1>
            Hi, I'm <span>Lhea</span>
          </h1>

          <h2>Aspiring Web Developer</h2>

          <p className="description">
            I'm an Information Technology student who enjoys
            learning new technologies and creating simple,
            useful, and creative web projects.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        {/* Pastel Decoration */}
        <div className="home-art">
          <div className="circle circle-blue"></div>
          <div className="circle circle-pink"></div>
          <div className="circle circle-lavender">
            <span>✿</span>
          </div>

          <p className="art-caption">
            learning, creating & growing
          </p>
        </div>
      </section>
    </div>
    
  )
}

export default App
