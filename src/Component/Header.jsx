import React from 'react'
import logo from '../assets/images/logo.jpeg';

const Header = () => {
    return (
        <header className="header">
            <nav>
              <div className="logo">
                  <img src={logo} alt="Todoist" height="25px"></img>
              </div>
            </nav>
        </header>
    )
}

export default Header
