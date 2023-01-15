import React from 'react'
import '../styles/Navigation.css'
const Navigation = () => {
  return (
    <div className="nav-container">
      <h2>MisRecetas</h2>
      <ul className='menu-container'>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/recipes">
          <li>Recetas</li>
        </a>
      </ul>
    </div>
  );
}

export default Navigation

