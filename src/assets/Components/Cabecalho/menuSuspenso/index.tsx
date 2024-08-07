import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import menu from "/menu.svg";
import fechar from "/close.svg";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const ContainerMenu = styled.div<{ isOpen: boolean; isAnimating: boolean }>`
  display: flex;

  .fundo-preto {
    background: #000902;
    height: 55px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 0 15px;

    img {
      cursor: pointer;
      height: 45px;
      width: 45px;
      margin: 5%;
      z-index: 2;
    }
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #FFFAFA;
    animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
    display: ${({ isAnimating, isOpen }) => (!isOpen && !isAnimating ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    z-index: 1;
    align-items: flex-start;

    ul {
      display: flex;
      list-style: none;
      height: 100%;
      width: 66%;
      align-items: flex-start;
      font-weight: bold;
      flex-direction: column;
      gap: 3%;
      margin: 16% 7%;

      li {
        font-size: 1.5rem;
        cursor: pointer;  
        &:hover{
          color: #718a27;
        }
      }
    }
  }
`;


const MenuSuspenso = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  useEffect(() => {
    if (!isOpen && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Duração da animação

      return () => clearTimeout(timer);
    }
  }, [isOpen, isAnimating]);

  const handleToggle = () => {
    if (isOpen) {
      setIsAnimating(true);
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ContainerMenu isOpen={isOpen} isAnimating={isAnimating}>
        <div className='fundo-preto' onClick={handleToggle}>
          <img src={isOpen ? fechar : menu} alt="menu" />
        </div>
        <div className="menu">
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
          </ul>
        </div>
      </ContainerMenu>
    </div>
  );
};

export default MenuSuspenso;
