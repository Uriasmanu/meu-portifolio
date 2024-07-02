import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import BotaoDownload from '../../BotaoDownload';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #000902;
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400; /* Defina o peso da fonte desejado */
        font-style: normal;
        font-variation-settings: "slnt" 0;
    }
`;


const Menu = styled.div`
    background: #000902;
    width: 100%;
    height: 75px;
    border-radius: 0 0 0 25px;
    color: #FFFAFA;
    align-items: center;
    


    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        height: 100%;
        align-items: center;
        font-weight: bold;
        

        li{
            cursor: pointer;
            font-size: 130%;

            a{
                color: #FFFAFA;
                &:hover{
            color: #718a27;
            }
            }
        }
    }

`;


const NavBar: React.FC = () => {
    const whatsappLink = "https://wa.me/5514996257741?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços.";

    type MenuItem = {
        name: string;
        path: string;
        external?: boolean;
    };

    const menus: MenuItem[] = [
        { name: "Inicio", path: "/" },
        { name: "Meus Trabalhos", path: "/MeusTrabalhos" },
        { name: "Contato", path: whatsappLink, external: true }
    ];

    return (
        <>
            <GlobalStyles />
            <Menu>
                <ul>
                    {menus.map((menu, index) => (
                        <li key={index}>
                            {menu.external ? (
                                <a href={menu.path} target="_blank" rel="noopener noreferrer">
                                    {menu.name}
                                </a>
                            ) : (
                                <Link to={menu.path}>{menu.name}</Link>
                            )}
                        </li>
                    ))}
                <BotaoDownload/>

                </ul>
            </Menu>
        </>
    );
};

export default NavBar;
