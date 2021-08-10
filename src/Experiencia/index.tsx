import { Header } from "../Header";
import { Container } from "../style/global";
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export function Experiencia() {
    return(
        <>
        <Header/>
        <Container>
            <div className="content">
                <section className="descricao">
                    <h2><span>Experiência</span></h2>
                    <h3><span>to.do</span><p>Aplicação estilo list task na qual pode adicionar, marcar como completo, desmarcar e excluir as tarefas na qual você criou. Abaixo um pequeno video mostrando seu funcionamento.</p></h3>

                    

                    <h4><a href="https://github.com/MatheusDamascenoDev/to-do-list">Codigo</a></h4>

                    <h3><span>WatchMe</span><p>Aplicação para listagem de filmes na qual consome uma api para colocar os filmes.</p></h3>

                    

                    <h4><a href="https://github.com/MatheusDamascenoDev/listagem-de-filmes">Codigo</a></h4>
                    
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