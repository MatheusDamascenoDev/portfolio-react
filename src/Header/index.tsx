import { NavLink as Link } from "react-router-dom";
import ProfileImg from '../assets/images/foto-perfil.jpeg';
import { Container } from "../style/global";



export function Header() {    

    return(
        <Container>
             <div className="parent">
                <div className="sidebar">
                    <div className="sidebar-pos">
                        <div className="img-sidebar">
                            <img src={ProfileImg} />
                        </div>  

                        <div className="menu">
                            <Link 
                                className='selected'
                                activeStyle={{ color: '#fff' , opacity: 1}}
                                to="./Sobre">Sobre
                            </Link>
                            <Link 
                                className='selected'
                                activeStyle={{ color: '#fff' , opacity: 1}}
                                to="./Habilidades">Habilidades
                            </Link>
                            <Link 
                                className='selected'
                                activeStyle={{ color: '#fff' , opacity: 1}} 
                                to="./Experiencia">Experiência
                            </Link>
                            <Link 
                                className='selected'
                                activeStyle={{ color: '#fff' , opacity: 1}} 
                                to="./Educacao">Educação
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
        
    )
}

function setState(arg0: { clicked: boolean; }) {
    throw new Error("Function not implemented.");
}
