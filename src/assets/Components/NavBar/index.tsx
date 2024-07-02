import styled, { createGlobalStyle } from 'styled-components';

// Estilos globais
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

// Componente estilizado Menu
const Menu = styled.div`
    background: #000902;
    width: 100%;
    height: 75px;
    border-radius: 0 0 0 25px;
    color: FFFAFA;
    align-items: center;


    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        height: 100%;
        width: 60%;
        align-items: center;
        font-weight: bold;
        color: #FFFAFA;

        li{
            cursor: pointer;
            font-size: 1.5rem;
           
            &:hover{
            color: #718a27;
            }
        }
    }

    button{
        background: #FFFAFA;
        border: none;
        width: 120px;
        height: 37px;
        border-radius: 16px;
        font-weight: 700;
        font-size: 15px;
        margin-left: 5%;
    }

    @media (max-width: 1000px) {
        li{
            cursor: pointer;
            font-size: 1rem;
        }
    }
`;


const NavBar = () => {
    const menus = ["Inicio", "Meus Trabalhos", "Sobre mim", "Contato"];

    return (
        <>
            <GlobalStyles /> {/* Aplicando estilos globais */}
            <Menu>
                <ul>
                    {menus.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <button>Curriculo</button>
            </Menu>
        </>
    );
};

export default NavBar;
