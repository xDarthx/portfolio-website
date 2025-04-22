import { useState, useEffect } from 'react'
import { Github, X, ChevronRight, Linkedin, Instagram } from 'lucide-react';
import './App.css'

function App() {
  const projects = 
  [
    {
      id: 1,
      title: "BattleShip",
      fullDesc: "This project implements the well known boardgame battleship. It uses react and Javascript to create a PvP version and a PvE version. The gameboard was done by AI because this was an assignment by my professor. He wanted to challenge us to work with AI but also see why they need human interaction still.",
      githubUrl: "https://github.com/xDarthx/battleship-react-app",
      videoSrc: "./battleshipProject.mp4"
    },
    {
      id: 2,
      title: "Memory Game",
      fullDesc: "This project is a memory game, it was a project on Odin-Project. The basis of it is that there are a bunch of different images and you are trying to hit a different one each time. The tech used is React and Javascript.",
      githubUrl: "https://github.com/xDarthx/react-memory-game",
      videoSrc: "./memoryProject.mp4"
    },
    {
      id: 3,
      title: "Memory Game",
      fullDesc: "This project is a memory game, it was a project on Odin-Project. The basis of it is that there are a bunch of different images and you are trying to hit a different one each time. The tech used is React and Javascript.",
      githubUrl: "https://github.com/xDarthx/react-memory-game",
      videoSrc: "./memoryProject.mp4"
    },
    {
      id: 4,
      title: "Memory Game",
      fullDesc: "This project is a memory game, it was a project on Odin-Project. The basis of it is that there are a bunch of different images and you are trying to hit a different one each time. The tech used is React and Javascript.",
      githubUrl: "https://github.com/xDarthx/react-memory-game",
      videoSrc: "./memoryProject.mp4"
    },
    {
      id: 5,
      title: "Memory Game",
      fullDesc: "This project is a memory game, it was a project on Odin-Project. The basis of it is that there are a bunch of different images and you are trying to hit a different one each time. The tech used is React and Javascript.",
      githubUrl: "https://github.com/xDarthx/react-memory-game",
      videoSrc: "./memoryProject.mp4"
    },
    {
      id: 6,
      title: "Memory Game",
      fullDesc: "This project is a memory game, it was a project on Odin-Project. The basis of it is that there are a bunch of different images and you are trying to hit a different one each time. The tech used is React and Javascript.",
      githubUrl: "https://github.com/xDarthx/react-memory-game",
      videoSrc: "./memoryProject.mp4"
    }
  ]

  const [menuActive, setMenuActive] = useState(false);
  const [lightDark, setLightDark] = useState(false);
  const [pageState, setPageState] = useState('mainPage'); //states are mainPage, projectPage, and aboutPage
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleLightDark = () => {
    setLightDark(!lightDark);
  };

  useEffect(() => {
    if(lightDark){
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

  }, [lightDark]);

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 600);
  };

  function ProjectCard({ project, onClick}) {
    return(
      <div className="project-card" onClick={onClick}>
        <video className="project-image" src={project.videoSrc} autoPlay loop muted/>
        <div className="project-title">{project.title}</div>
      </div>
    )
  };

  function ProjectModal({ project, onClose, isClosing }) {
    return (
      <>
        <div 
          className={`modal-backdrop ${isClosing ? 'closing' : ''}`}
          onClick={onClose}
        >
          <div 
            className={`modal-content ${isClosing ? 'closing' : ''}`}
            onClick={e => e.stopPropagation()}
          >
             <button 
              className="modal-close-btn"
              onClick={onClose}
            >
              <X size={24} />
            </button>
            <div className="modal-body">
              <h2 className="modal-title">{project.title}</h2>
              <div className="modal-video-container">
                <video className="modal-video" src={project.videoSrc} autoPlay loop muted/>
              </div>
              <div className="modal-description">
                <h3 className="modal-subtitle">About this project</h3>
                <p>{project.fullDesc}</p>
              </div>
              <a 
                href={project.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <Github size={20} className="github-icon" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {pageState === 'mainPage' && (
        <div>
          <nav>
            <div id='myLinks' className={menuActive ? 'active' : ''}>
              <a id='selected' href="">Home</a>
              <a onClick={() => setPageState('projectPage')}>Projects</a>
              <a onClick={() => setPageState('aboutPage')}>About</a>
              <div id='darkLight'>
                <label className="switch">
                  <input type="checkbox" checked={lightDark} onChange={toggleLightDark} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div 
              className={`hamburger-icon ${menuActive ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </nav>
          <section className='backgroundSection'>
            <br />
            <article id='aboutMe'>
              <h1>Jacob Grant</h1>
              <p>
                Hello! Welcome to my portfolio website, I am currently a Sophmore in College.
                I am studying for a bachelors in computer science and minor in cybersecurity.
              </p>
            </article>
          </section>
          <section className='mainSection'>
            <div className='projectDiv'>
              <div className="project-container" id="projects">
                {projects.slice(0,2).map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={() => openProjectDetails(project)} 
                  />
                ))}
              </div>
              {isModalOpen && selectedProject && (
                <ProjectModal 
                  project={selectedProject} 
                  onClose={closeModal}
                  isClosing={isClosing}
                />
              )}
            </div>
            <div className='contactDiv'>
              <div className="textInfo">
                  <h1>Contact Me</h1>
                  <a href="jacobgrant.cs@gmail.com" target="_blank" className="mediaIcons" >
                    <p>jacobgrant.cs@gmail.com</p>
                  </a>
                  <h3>Socials</h3>
                  <a href="https://www.linkedin.com/in/jacob-grant-7b0710290/" target="_blank" className="mediaIcons" >
                    <Linkedin />
                  </a>
                  <a href="https://github.com/xDarthx" className="mediaIcons" target="_blank" >
                    <Github/>
                  </a>
                  <a href="https://www.instagram.com/jacob.av7/" className="mediaIcons" target="_blank" >
                    <Instagram />
                  </a>
              </div>
            </div>
          </section>
        </div>
      )}
      {pageState === 'projectPage' && (
        <div>
          <nav>
            <div id='myLinks' className={menuActive ? 'active' : ''}>
              <a  onClick={() => setPageState('mainPage')}>Home</a>
              <a id='selected'>Projects</a>
              <a onClick={() => setPageState('aboutPage')}>About</a>
              <div id='darkLight'>
                <label className="switch">
                  <input type="checkbox" checked={lightDark} onChange={toggleLightDark} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div 
              className={`hamburger-icon ${menuActive ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </nav>
          <section className='mainSection2'>
            <div className='projectDiv'>
              <div className="project-container" id="projects">
                {projects.map(project => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={() => openProjectDetails(project)} 
                  />
                ))}
              </div>
              {isModalOpen && selectedProject && (
                <ProjectModal 
                  project={selectedProject} 
                  onClose={closeModal}
                  isClosing={isClosing}
                />
              )}
            </div>
            <div className='contactDiv'>
              <div className="textInfo">
                  <h1>Contact Me</h1>
                  <a href="jacobgrant.cs@gmail.com" target="_blank" className="mediaIcons" >
                    <p>jacobgrant.cs@gmail.com</p>
                  </a>
                  <h3>Socials</h3>
                  <a href="https://www.linkedin.com/in/jacob-grant-7b0710290/" target="_blank" className="mediaIcons" >
                    <Linkedin />
                  </a>
                  <a href="https://github.com/xDarthx" className="mediaIcons" target="_blank" >
                    <Github/>
                  </a>
                  <a href="https://www.instagram.com/jacob.av7/" className="mediaIcons" target="_blank" >
                    <Instagram />
                  </a>
              </div>
            </div>
          </section>
        </div>
      )}
      { pageState === 'aboutPage' && (
        <div>
          <nav>
            <div id='myLinks' className={menuActive ? 'active' : ''}>
              <a onClick={() => setPageState('mainPage')}>Home</a>
              <a onClick={() => setPageState('projectPage')}>Projects</a>
              <a id='selected'>About</a>
              <div id='darkLight'>
                <label className="switch">
                  <input type="checkbox" checked={lightDark} onChange={toggleLightDark} />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            <div 
              className={`hamburger-icon ${menuActive ? 'active' : ''}`} 
              onClick={toggleMenu}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </nav>
          <section className='mainSection2'>
            <div className='aboutMeDiv'>
              <img id='profileImg' src='./jacobGrant.jpg'/>
              <article>
                <p>
                  I am a Sophmore at <b>Oklahoma City University</b>,
                  <br />
                  <br />
                  and I am currently studying for a bachelors in Computer Science with a Cybersecurity minor.
                  I love computers and programming so much, ive made it apart of my life even when I was a kid. 
                  I started out making games on the MIT app inventor back in 8th grade, and my passion just grew from there!
                  <br/>
                  <br/>
                  Video games have also been a big reason why I wanted to get into Computer Science due to modding and 
                  me wanting to make my own video game someday. I got good at video games at one point because I got picked up
                  by our <b>Esports Program</b> and was put on the varsity team my Freshman year. Now I am the team captain of our
                  Varsity Valorant Team and I am the Technical Director of our <b>Student Leadership Team</b>.
                  <br/>
                  <br />
                  Overall I love computers and im always wanting to learn new things about them!
                </p>
              </article>
            </div>
            <div className='contactDiv'>
              <div className="textInfo">
                  <h1>Contact Me</h1>
                  <a href="jacobgrant.cs@gmail.com" target="_blank" className="mediaIcons" >
                    <p>jacobgrant.cs@gmail.com</p>
                  </a>
                  <h3>Socials</h3>
                  <a href="https://www.linkedin.com/in/jacob-grant-7b0710290/" target="_blank" className="mediaIcons" >
                    <Linkedin />
                  </a>
                  <a href="https://github.com/xDarthx" className="mediaIcons" target="_blank" >
                    <Github/>
                  </a>
                  <a href="https://www.instagram.com/jacob.av7/" className="mediaIcons" target="_blank" >
                    <Instagram />
                  </a>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default App
