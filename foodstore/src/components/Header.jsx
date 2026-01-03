import { NavLink } from "react-router"
import profileIcon from '../assets/images/icons/profile.png'
import cartIcon from '../assets/images/icons/cart.png'
import hamburger from '../assets/images/icons/hamburgar.png'
import closeMenu from '../assets/images/icons/closeMenu.png'
import { useState } from "react"
import "./Header.css"

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  } 

  return (
    <header>
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <span>Prime Heaven</span>
        </NavLink>
      </div>

      <div className="middle-section">
        <ul>
          <li><NavLink to="/" className="header-link">
            <span>Home</span>
          </NavLink></li>
          <li><NavLink to="/" className="header-link">
            <span>Menu</span>
          </NavLink></li>
          <li><NavLink to="/" className="header-link">
            <span>Reservation</span>
          </NavLink></li>
          <li><NavLink to="/" className="header-link">
            <span>About</span>
          </NavLink></li>
        </ul>
      </div>

      <div className="right-section">
        <NavLink to="/" className="header-link hide-on-mobile">
          <img className="icon" src={profileIcon} />
        </NavLink>

        <NavLink to="/" className="header-link hide-on-mobile">
          <img className="icon" src={cartIcon} />
        </NavLink>

        <NavLink to="/" className="header-link hide-on-mobile">
          <button className="order-button">Order now</button>
        </NavLink>

        <div className="hamburger" onClick={toggleSidebar}>
          <img className="icon" src={hamburger} />
        </div>
      </div>

{/* side-bar */}

      <div className="sidebar-nav " style={{display: isSidebarOpen ? 'flex' : 'none'}}>

        <div className="Close-sidebar" onClick={closeSidebar}>
          <img className="icon close-sidebar-icon" src={closeMenu } />
        </div>

        <ul>
          <li>
            <NavLink to="/" className="header-link hide-on-mobile">
              <img className="icon" src={profileIcon} />
            </NavLink>
          </li>
          <li><NavLink to="/" className="header-link">
            <span>Home</span>
          </NavLink></li>
          <li><NavLink to="/" className="header-link">
            <span>Menu</span>
          </NavLink></li>
          <li><NavLink to="/" className="header-link">
            <span>Reservation</span>
          </NavLink></li>
          <li><NavLink to="/" className="header-link">
            <span>About</span>
          </NavLink></li>
        </ul>
        
        <div >
          <NavLink to="/" className="header-link hide-on-mobile">
            <button className="order-button">Order now</button>
          </NavLink>
        </div>
      </div>
    </header>
  )

}