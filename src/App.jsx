import { useState } from 'react'
import './App.css'

function App() {
  const [menuActive, setMenuActive] = useState(false);
  
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <>
      <nav>
        <div id='myLinks' className={menuActive ? 'active' : ''}>
          <a id='selected' href="">Home</a>
          <a href="">Projects</a>
          <a href="">About</a>
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
        <div id='darkLight'>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>
        <br />
        <article id='aboutMe'>
          <h1>Jacob Grant</h1>
          <p>
            Hello! Welcome to my portfolio website, I am currently a Sophmore in College.
            I am studying for a bachlors in computer science and minor in cybersecurity.
          </p>
        </article>
      </section>
      <outer className='mainSection'>
        <div className='projectDiv'>
          <div class="project-container" id="projects">
                <div class="project-card">
                    <img class="project-image" src="public/logo-png.png" alt="Project 1" />
                    <div class="project-title">Project Title 1</div>
                </div>
            
                <div class="project-card">
                    <img class="project-image" src="public/logo-png.png" alt="Project 2" />
                    <div class="project-title">Project Title 2</div>
                </div>

                <div class="project-card">
                    <img class="project-image" src="public/logo-png.png" alt="Project 3" />
                    <div class="project-title">Project Title 3</div>
                </div>

                <div class="project-card">
                    <img class="project-image" src="public/logo-png.png" alt="Project 4" />
                    <div class="project-title">Project Title 4</div>
                </div>
            </div>
        </div>
        <div className='contactDiv'>
          <div class="textInfo">
              <h1>Contact Me</h1>
              <a href="jacob.grant@my.okcu.edu" target="_blank" class="mediaIcons" >
                <p>jacob.grant@my.okcu.edu</p>
              </a>
              <h3>Socials</h3>
              <a href="https://www.linkedin.com/in/jacob-grant-7b0710290/" target="_blank" class="mediaIcons" >
                  <i class="fab fa-linkedin fa-5x"></i>
              </a>
              <a href="https://github.com/xDarthx" class="mediaIcons" target="_blank" >
                  <i class="fab fa-github fa-5x"></i>
              </a>
              <a href="https://www.instagram.com/jacob.av7/" class="mediaIcons" target="_blank" >
                  <i class="fab fa-instagram fa-5x"></i>
              </a>
          </div>
        </div>
      </outer>
    </>
  )
}

export default App
