import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [lightDark, setLightDark] = useState(false);
  const [pageState, setPageState] = useState('mainPage'); //states are mainPage, projectPage, and aboutPage
  
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

    // useEffect(() => {
    //   if(pageState === 'aboutPage'){
    //     document.documentElement.setAttribute('data-page', 'about');
    //   } else if(pageState === 'projectPage'){
    //     document.documentElement.setAttribute('data-page', 'project');
    //   } else {
    //     document.documentElement.setAttribute('data-page', 'main');
    //   }
    // }, [pageState]);

  return (
    <>
      {pageState === 'mainPage' && (
        <div>
          <nav>
            <div id='myLinks' className={menuActive ? 'active' : ''}>
              <a id='selected' href="">Home</a>
              <a onClick={() => setPageState('projectPage')}>Projects</a>
              <a onClick={() => setPageState('aboutPage')}>About</a>
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
              <label className="switch">
                <input type="checkbox" onClick={toggleLightDark} />
                <span className="slider round"></span>
              </label>
            </div>
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
                    <div className="project-card">
                        <img className="project-image" src="public/logo-png.png" alt="Project 1" />
                        <div className="project-title">Project Title 1</div>
                    </div>
                
                    <div className="project-card">
                        <img className="project-image" src="public/logo-png.png" alt="Project 2" />
                        <div className="project-title">Project Title 2</div>
                    </div>

                    <div className="project-card">
                        <img className="project-image" src="public/logo-png.png" alt="Project 3" />
                        <div className="project-title">Project Title 3</div>
                    </div>

                    <div className="project-card">
                        <img className="project-image" src="public/logo-png.png" alt="Project 4" />
                        <div className="project-title">Project Title 4</div>
                    </div>
                </div>
            </div>
            <div className='contactDiv'>
              <div className="textInfo">
                  <h1>Contact Me</h1>
                  <a href="jacobgrant.cs@gmail.com" target="_blank" className="mediaIcons" >
                    <p>jacobgrant.cs@gmail.com</p>
                  </a>
                  <h3>Socials</h3>
                  <a href="https://www.linkedin.com/in/jacob-grant-7b0710290/" target="_blank" className="mediaIcons" >
                      <i className="fab fa-linkedin fa-5x"></i>
                  </a>
                  <a href="https://github.com/xDarthx" className="mediaIcons" target="_blank" >
                      <i className="fab fa-github fa-5x"></i>
                  </a>
                  <a href="https://www.instagram.com/jacob.av7/" className="mediaIcons" target="_blank" >
                      <i className="fab fa-instagram fa-5x"></i>
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
            <div id='darkLight'>
              <label className="switch">
                <input type="checkbox" onClick={toggleLightDark} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className='projectDiv'>
              <div className="project-container" id="projects">
                    <div className="project-card">
                        <img className="project-image" src="public/logo-png.png" alt="Project 1" />
                        <div className="project-title">Project Title 1</div>
                    </div>
                
                    <div className="project-card">
                        <img className="project-image" src="public/logo-png.png" alt="Project 2" />
                        <div className="project-title">Project Title 2</div>
                    </div>

                    <div className="project-card">
                        <img className="project-image" src="public/logo-png.png" alt="Project 3" />
                        <div className="project-title">Project Title 3</div>
                    </div>

                    <div className="project-card">
                        <img className="project-image" src="public/logo-png.png" alt="Project 4" />
                        <div className="project-title">Project Title 4</div>
                    </div>

                    <div className="project-card">
                        <img className="project-image" src="public/logo-png.png" alt="Project 5" />
                        <div className="project-title">Project Title 5</div>
                    </div>

                    <div className="project-card">
                        <img className="project-image" src="public/logo-png.png" alt="Project 6" />
                        <div className="project-title">Project Title 6</div>
                    </div>
                </div>
            </div>
            <div className='contactDiv'>
              <div className="textInfo">
                  <h1>Contact Me</h1>
                  <a href="jacobgrant.cs@gmail.com" target="_blank" className="mediaIcons" >
                    <p>jacobgrant.cs@gmail.com</p>
                  </a>
                  <h3>Socials</h3>
                  <a href="https://www.linkedin.com/in/jacob-grant-7b0710290/" target="_blank" className="mediaIcons" >
                      <i className="fab fa-linkedin fa-5x"></i>
                  </a>
                  <a href="https://github.com/xDarthx" className="mediaIcons" target="_blank" >
                      <i className="fab fa-github fa-5x"></i>
                  </a>
                  <a href="https://www.instagram.com/jacob.av7/" className="mediaIcons" target="_blank" >
                      <i className="fab fa-instagram fa-5x"></i>
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
            <div id='darkLight'>
              <label className="switch">
                <input type="checkbox" onClick={toggleLightDark} />
                <span className="slider round"></span>
              </label>
            </div>
            <div className='aboutMeDiv'>
              <img id='profileImg' src='src/assets/jacobGrant.jpg'/>
              <article>
                <p>
                  I am a Sophmore at <b>Oklahoma City University</b>,
                  <br />
                  <br />
                  and I am currently studying for a bachelors in Computer Science with hopefully a minor in Cybersecurity.
                  I love computers and programming so much, ive made it apart of my life even when I was a kid. 
                  I started out making games on the MIT app inventor back in 8th grade and my passion just grew from there!
                  <br/>
                  <br/>
                  Video games have also been a big reason why I wanted to get into computer science due to modding and 
                  me wanting to make my own someday. I guess I got good at video games at one point because I got picked up
                  by our <b>Esports Program</b> and was put on the varsity team my Freshman year. Now I am the team captain of our
                  Varsity Valorant team and I am the technical Director of our <b>Student Leadership Team</b>.
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
                      <i className="fab fa-linkedin fa-5x"></i>
                  </a>
                  <a href="https://github.com/xDarthx" className="mediaIcons" target="_blank" >
                      <i className="fab fa-github fa-5x"></i>
                  </a>
                  <a href="https://www.instagram.com/jacob.av7/" className="mediaIcons" target="_blank" >
                      <i className="fab fa-instagram fa-5x"></i>
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
