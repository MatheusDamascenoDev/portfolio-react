import { Header } from "../Header";
import { Container } from "../style/global";
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export function Educacao() {
    return(
        <>
        <Header/>
        <Container>
            <div className="content">
                <section className="descricao">
                    <h2><span>Educação</span></h2>
                    <h3><span>Ignite - Rocketseat</span></h3>
                    <h4>ReactJS - de 2021 até 2021</h4>
                    <h3><span>Ensino Superior - Centro Universitario FipMoc</span></h3>
                    <h4>Engenharia Mecatronica - de 2017 até 2021 </h4>
                    <h3><span>Ensino Medio</span></h3>
                    <h4>Colegio Solido - de 2014 até 2016</h4>
                    <h3><span>Ingles - CCAA</span></h3>
                    <h4>Ingles Intermediario - de 2011 até 2015</h4>
                
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