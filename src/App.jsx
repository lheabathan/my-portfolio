import profile from './assets/profile.png';
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

          <img
           src={profile}
           alt="My profile"
           className="profile-picture"
          />

          <p className="art-caption">
            learning, creating & growing
          </p>
        </div>
      </section>

      

{/* About Section */}
<section className="about" id="about">
  <div className="about-heading">
    <span className="about-label">A LITTLE INTRODUCTION</span>
    <h2>A little about me <span>✿</span></h2>
    <p>Some things about who I am and what I'm learning.</p>
  </div>

  {/* Profile Card */}
  <div className="about-profile">
    <div className="profile-note">
      <span className="note-star">✦</span>
      <p>Currently growing, one project at a time.</p>
    </div>

    <div className="profile-details">
      <span className="profile-tag">IT STUDENT</span>
      <h3>Hello, I'm Lhea!</h3>
      <p>
        I am an IT student who enjoys designing and turning ideas into something meaningful. 
        I am always willing to learn, adapt, and take on new challenges. 
        When I encounter something unfamiliar, I make time to understand it 
        because for me, every task deserves time, effort, and genuine dedication.
      </p>

      <div className="interest-tags">
        <span>Web Development</span>
        <span>Creative Projects</span>
        <span>Always Learning</span>
      </div>
    </div>
  </div>

  {/* Learning Timeline */}
  <div className="journey">
    <h3 className="journey-title">My learning journey</h3>
    <p className="journey-subtitle">
      Little steps that help me grow.
    </p>

    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-dot lavender-dot">✦</div>
        <div className="timeline-card">
          <span className="timeline-label">THE BEGINNING</span>
          <h4>Exploring IT</h4>
          <p>
            I used to think IT was difficult.
            I thought I had to be really good with computers to succeed,
            and at first, I wasn't sure if I could do it.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot pink-dot">♡</div>
        <div className="timeline-card">
          <span className="timeline-label">LEARNING BY DOING</span>
          <h4>Learning along the way</h4>
          <p>
            Whenever our teachers gave us a task, 
            I sometimes doubted if I could finish it. 
            But I took the time to learn, try, and figure things out.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot yellow-dot">✿</div>
        <div className="timeline-card">
          <span className="timeline-label">BUILDING SKILLS</span>
          <h4>Finding what I enjoy</h4>
          <p>
            Little by little, I started enjoying the process. 
            I especially love designing and seeing my ideas become something real, 
            in a way that reflects what I imagined.
          </p>
        </div>
      </div>

      <div className="timeline-item">
        <div className="timeline-dot blue-dot">✧</div>
        <div className="timeline-card">
          <span className="timeline-label">WHERE I AM NOW</span>
          <h4>Growing as a developer</h4>
          <p>
             I feel excited and proud when I bring my ideas to life,
              especially when I accomplish something I once thought I could not do. 
              Every project reminds me that I can keep learning, improving, 
              and discovering what I am capable of.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="projects" className="projects-section">
  <div className="projects-heading">
    <p className="section-label">A LITTLE OF WHAT I'VE MADE</p>
    <h2>My Projects</h2>
    <p>
      Small projects and activities I've worked on while
      learning and exploring IT.
    </p>
  </div>

  <div className="projects-grid">
    {/* Project 1: Movie Favorites */}
    <article className="project-card movie-card">
      <span className="project-number">01</span>
      <div className="project-emoji">🎬</div>

      <h3>Movie Favorites Page</h3>
      <p>
        A React page featuring movies I wish I could
        watch for the first time again.
      </p>

      <div className="project-tags">
        <span>React</span>
        <span>CSS</span>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/lheabathan/movie-playlist"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub ↗
        </a>
      </div>
    </article>

    {/* Project 2: Student List */}
    <article className="project-card student-card">
      <span className="project-number">02</span>
      <div className="project-emoji">📝</div>

      <h3>Student List</h3>
      <p>
        A JavaScript activity that lets users add
        students to a list and delete them.
      </p>

      <div className="project-tags">
        <span>JavaScript</span>
        <span>DOM</span>
      </div>

      <div className="project-links">
        <a
          href="https://github.com/lheabathan/RESPONSIVE-DESIGN-DOM-AND-FORM-IN-ACTION"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub ↗
        </a>
      </div>
    </article>
  </div>
</section>


{/* Contact Section */}
<section id="contact" className="contact-section">
  <p className="section-label">LET'S CONNECT</p>
  <h2>I'd love to hear from you!</h2>
  <p className="contact-description">
    Have a question or want to connect? Feel free to message me.
  </p>

  <div className="contact-icons">
    {/* Messenger */}
    <a
      href="https://m.me/bathanlhea20"
      target="_blank"
      rel="noreferrer"
      className="contact-icon messenger-icon"
      aria-label="Message me on Messenger"
      title="Messenger"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.15 2 11.27c0 2.92 1.47 5.52 3.77 7.2V22l3.44-1.89c.89.25 1.83.38 2.79.38 5.52 0 10-4.15 10-9.22S17.52 2 12 2Zm1 12.4-2.55-2.72-4.97 2.72 5.47-5.81 2.61 2.72 4.91-2.72L13 14.4Z"
          fill="currentColor"
        />
      </svg>
    </a>

    {/* Email */}
    <a
      href="mailto:bathanlhealandicho@gmail.com"
      className="contact-icon email-icon"
      aria-label="Send me an email"
      title="Email"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8L4 7v10h16V7l-8 6Zm0-2 7-4H5l7 4Z"
          fill="currentColor"
        />
      </svg>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/lheabathan"
      target="_blank"
      rel="noreferrer"
      className="contact-icon github-icon"
      aria-label="Visit my GitHub profile"
      title="GitHub"
    >
     <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
       fill="currentColor"
       d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.56 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.28-2.6 5.23-5.08 5.5.4.35.75 1.03.75 2.08V22c0 .29.2.63.76.52A11.1 11.1 0 0 0 12 .9Z"
      />
    </svg>
    </a>

  </div>
</section>





    </div>
    
  )
}

export default App
