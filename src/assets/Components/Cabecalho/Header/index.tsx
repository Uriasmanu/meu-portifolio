import React, { ReactNode } from 'react';
import styled from 'styled-components';
import NavBar from '../NavBar';
import MenuSuspenso from '../menuSuspenso';

const Container = styled.div`
    background: #FFFAFA;
    width: 100vw;
    height: 45vh;
    border-radius: 0 0 50px 50px;
    display: flex;
    flex-direction: column;

    .cabecalho-infos {

            align-items: center;
            width: 100%;
            display: flex;
            justify-content: space-evenly;
        }

    h1 {
        font-size: 2.5rem;
        font-family: 'Grape Nuts', cursive;
        font-weight: inherit;
        font-style: italic;
        margin-left: 8%;
        margin-right: 5%;
    }


    .menu-suspenso {
        display: none;
    }

    .nav-bar {
        display: flex;
        width: 100%;
    }


    @media (max-width: 768px) {
        background: #FFFAFA;
        width: 100vw;
        height: auto;
        border-radius: 0 0 50px 50px;
        display: flex;
        flex-direction: column;
        padding-bottom: 2%;

        .cabecalho-infos {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            
        }

        h1 {
            font-size: 2.5rem;
        }
        .menu-suspenso {
            display: flex;
        }

        .nav-bar {
            display: none;
        }
    }
`;

interface HeaderProps {
    onMenuClick: () => void;
    children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, children }) => {
    return (
        <Container>
            <div className="cabecalho-infos">
                <h1>Urias</h1>
                <div className="nav-bar">
                    <NavBar />
                </div>
                <div className="menu-suspenso" onClick={onMenuClick}>
                    <MenuSuspenso />
                </div>
            </div>

              {children} 

        </Container>
    );
};

export default Header;
