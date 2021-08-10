import { Header } from "../Header";
import { Container } from "../style/global";
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export function Habilidades() {
    return(
      <>
        <Header/>
        <Container>
          <div className="content">

            <section className="descricao">
              <h2><span>Habilidades</span></h2>
              <h3><span>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>ReactJS</li>
                <li>Ingles Intermediario</li>
              </span></h3>
                
              <div className="icons-social">
                <a href="https://github.com/MatheusDamascenoDev"><i className="icon-github"><AiFillGithub/></i></a>
                <a href="https://www.linkedin.com/in/matheus-damascenoj/"><i className="icon-linkedin"><AiOutlineLinkedin/></i></a>
                <a href="https://www.instagram.com/matheusdjaques/"><i className="icon-instagram"><AiOutlineInstagram/></i></a>
              </div>

            </section>
          </div>
        </Container> 
        </> 
    )
}