import React from 'react'
import '../styles/Navigation.css'
const Navigation = () => {
  return (
    <div className="nav-container">
      <h2>Mil-recetas</h2>
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/recipes">
          <li>Recipes</li>
        </a>
      </ul>
    </div>
  );
}

export default Navigation

