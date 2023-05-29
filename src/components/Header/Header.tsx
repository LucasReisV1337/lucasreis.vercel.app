import { Container } from "./styles"
import { BrowserRouter as Router } from "react-router-dom"
import {NavHashLink, HashLink} from "react-router-hash-link"
import { useState } from "react"

import moon from "../../assets/moon.svg"
import sun from "../../assets/sun.svg"


export function Header(){
  const [isActive, setActive] = useState(false);

  function toggleTheme(){
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle('light');
  }

  function closeMenu(){
    setActive(false);
  }


  return(
    <Container className="header-fixed">
        <Router>
          <HashLink smooth to="#home" className="logo">
            <span>L</span>
            <span>Reis</span>
        </HashLink>
        <div className="headers">
          <div className="sunMoon">
          <img src={sun} alt="sun" id="sun" />
          <input onChange={toggleTheme} className="container_toggle" type="checkbox" id="switch" name="mode"/>
          <label htmlFor="switch">Toggle</label>
          <img src={moon} alt="moon" id="moon" />
          </div>
          
          <nav className={isActive ? 'active' : ''}>
            <NavHashLink smooth to="#home" onClick={closeMenu}>Home</NavHashLink>
            <NavHashLink smooth to="#sobre" onClick={closeMenu}>Sobre mim</NavHashLink>
            <NavHashLink smooth to="#portfolio" onClick={closeMenu}>Portfólio</NavHashLink>
            <NavHashLink smooth to="#contato" onClick={closeMenu}>Contato</NavHashLink>
            <a href="https://drive.google.com/file/d/1OrUK-P65CDZWDJ0B0iwQigbZZYCAWYnt/view" className="button" target="_blank" rel="noreferrer">CV</a>
          </nav>

          <div
            aria-expanded={isActive ? "true" : "false"}
            aria-haspopup="true"
            aria-label={isActive ? "Fechar menu" : "Abrir menu"} 
            className={isActive ? 'menu active' : 'menu'} 
            onClick={() => {setActive(!isActive)}}
            >
          </div>
          </div>
        </Router>
      </Container>
      
  )
}