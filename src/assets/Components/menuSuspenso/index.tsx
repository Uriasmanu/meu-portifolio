import styled from 'styled-components';

const ContainerMenu = styled.div`
    display: flex;

    .fundo-preto{
        background: #000902;
        height: 55px;
        width: 55px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0 0 0 15px;

        img{
            cursor: pointer;
            height: 45px;
            width: 45px;
            margin: 5%;
        }

    }
    

`
import menu from "/public/menu.svg";
import fechar from "/public/close.svg";
import { useState } from 'react';



const MenuSuspenso = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <ContainerMenu onClick={handleToggle}>
            <div className='fundo-preto' >
                <img src={isOpen ? fechar : menu} alt="menu" />
            </div>

        </ContainerMenu>
    )
}

export default MenuSuspenso;