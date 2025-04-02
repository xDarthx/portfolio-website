import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <div id='myLinks'>
          <a id='selected' href="">Home</a>
          <a href="">Projects</a>
          <a href="">About</a>
        </div>
      </nav>
      <section className='backgroundSection'>
        <div id='darkLight'>
          <h1>Dark Mode Active</h1>
        </div>
        <div id='clock'>
            <h1>This should be hidden</h1>
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

        </div>
      </outer>
    </>
  )
}

export default App
