import { useState } from "react"
import "../styles/navbar.css"

import {GiHamburgerMenu} from "react-icons/gi"

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="person-name">
        A Y T T
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}
      >
        <GiHamburgerMenu className="hamburgerIcon"/>
      </button>
      <div className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <ul>
          <li>
            <a href="#home">
              <ion-icon name="home"></ion-icon>Home
            </a>
          </li>
          <li>
            <a href="#workexperience">
              <ion-icon name="briefcase"></ion-icon>Work Experience
            </a>
          </li>
          <li>
            <a href="#education">
              <ion-icon name="school"></ion-icon>Education
            </a>
          </li>
          <li>
            <a href="#contact">
              <ion-icon name="logo-wechat"></ion-icon>ContactMe
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
