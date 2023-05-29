import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import whatsappIcon from "../../assets/whatsapp-icon.svg"


export function Contact(){

  return(
    <Container id="contato">
      <header>
        <h2>Entre em contato comigo</h2>
        <p>Se você viu o meu potencial ou quer conversar comigo, não exite em me mandar uma mensagem.</p>
      </header>
      <div className="contacts">
        <div>
          <img src={emailIcon} alt="Email" />
          <a href="mailto:lucasreisvasconcelos@icloud.com">lucasreisvasconcelos@icloud.com</a>
        </div>
        <div>
          <img src={whatsappIcon} alt="Email" />
          <a href="wa.link/00qqgd">(71) 98893-4202</a>
        </div>  
      </div>
    </Container>
  )
}