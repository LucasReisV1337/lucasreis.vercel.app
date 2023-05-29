import {Container} from "./styles";

import reactIcon from "../../assets/react-icon.svg";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";
import instagramIcon from "../../assets/instagram.png";
import discordIcon from "../../assets/discord.png";

export function Footer(){
  return(
    <Container className="footer">
      <a href="/" className="logo">
        <span>L</span>
        <span>Reis</span>
      </a>
      <div>
        <p>Este site foi feito por mim com <img src={reactIcon}/> e muito <span>❤️</span></p>
      </div>

      <div className="social-media">
        <a href="https://www.linkedin.com/in/devlucasreis/" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a href="https://github.com/LucasReisV1337" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a href="https://www.instagram.com/lucasreis564/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>

        <a href="https://discord.com/channels/@me/673313137595777056" target="_blank" rel="noreferrer">
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
      
    </Container>
  )
}