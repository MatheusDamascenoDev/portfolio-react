import { Header } from "../Header";
import { Container } from "../style/global";
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';


export function Sobre() {
    return(
        <>
        <Header/>
        <Container>
            <div className="content">

            <section className="descricao">
                <h2><span>Matheus Damasceno Jaques</span></h2>
                <h3><span> Montes Claros - MG · (038)988261416 · matheusdjaques@gmail.com</span></h3>
                <h4><p>Programador com foco em HTML, CSS ,JavaScript e ReactJS. Sempre procurando evoluir minhas habilidades profissionais e pessoais. Dentro da empresa procuro sempre otimizar processos, reduzi o tempo de testes, sem perder qualidade.</p>
                </h4>  
                
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