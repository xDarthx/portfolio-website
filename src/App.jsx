import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <nav>
        <div id='myLinks'>
          <a id='selected' href="">Home</a>
          <a href="">Project</a>
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
    </>
  )
}

export default App
