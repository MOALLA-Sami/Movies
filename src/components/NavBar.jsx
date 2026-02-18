import React from 'react'
import { Link } from 'react-router-dom'
import "../css/NavBar.css"
function NavBar() {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/"className='nav-link'>Home</Link>
            <Link to="/favorites"className='nav-link'>Favorites</Link>
            <Link to="/WatchLater"className='nav-link'>Watch Later</Link>
            <Link to="/Watched"className='nav-link'>Watched</Link>
            <Link to="/Suggestions"className='nav-link'>Suggestions</Link>
        </div>
    </nav>
  )
}

export default NavBar
