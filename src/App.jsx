// import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function ReactFacts() {
  return(
    <main>
      <img src={reactLogo} width="40px" alt="React logo" />
      <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on Github</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </main>
  ); 
}

export default ReactFacts;
