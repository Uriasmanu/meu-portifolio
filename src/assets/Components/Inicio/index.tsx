import styled from 'styled-components';
import NavBar from '../NavBar';

import estrela from '/Star 3.svg';
import { useState } from 'react';
import MenuSuspenso from '../menuSuspenso';
import Cards from '../cards';
import Contato from '../Contato';

const ContainerMaior = styled.div`
  .containerDeCards{
    display: flex;
    gap: 2%;
    width: 100%;
  }

  @media (max-width: 768px) {

      .containerDeCards{
      display: flex;
      gap: 15px;
      width: 100%;
      flex-direction: column;
      margin-top: 15px;
    }
  }
`

const Container = styled.div`
    background: #FFFAFA;
    width: 100vw;
    height: auto;
    border-radius: 0 0 50px 50px;
    display: flex;
    flex-direction: column;

  h1 {
    font-size: 2.5rem;
    font-family: 'Grape Nuts', cursive;
    font-weight: inherit;
    font-style: italic; 
    margin-left: 8%;
    margin-right: 5%;

  }

  div{
    display: flex;
    justify-content: space-evenly;
  }

  .Titulo{
    display: flex;
    position: relative;
    top: 16%;
    left: 10%;
    width: 80vw;
    padding: 2%;
    justify-content: flex-start;
    gap: 10%;
    align-items: center;

    .chamada{
      display: flex;
      flex-direction: column;
      width: 33%;
      height: 50%;

      h2{
        font-size: 300%;
      }

      p{
        font-size: 150%;
        color: #464646;
      }
    }
    .star{
    display: flex;
    width: 30%;
    height: 50%;
  }
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

    .cabecalho-infos{
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

    .Titulo{
      display: flex;
        top: 6%;
        width: 83%;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;

    .chamada{
      display: flex;
        flex-direction: column;
        width: 90%;

      h2{
        font-size: 2.5rem;
        width: 100%;
      }

      p{
        font-size: 1rem;
        color: #464646;
        width: 79%;
      }
    }

  }
  .star{
    display: flex;
    width: 71%;
    height: 50%;
  }
}

`;

const Inicio = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const AbrirMenu = () => {
    setMenuAberto(!menuAberto);
  }

  return (
    <ContainerMaior>
      <Container>
        <div className='cabecalho-infos' >
          <h1>Urias</h1>
          <div className="nav-bar">
            <NavBar />
          </div>
          <div className="menu-suspenso" onClick={AbrirMenu}>
            <MenuSuspenso />
          </div>
        </div>

        <div className='Titulo'>
          <div className='chamada'>
            <h2>
              Transforme suas <span style={{ color: '#1A83A4' }}>ideias</span> em código.
            </h2>
            <p>Crio produtos que resolvem problemas e encantam usuários através de soluções de design bem elaboradas.</p>
          </div>
          <img className="star" src={estrela} alt="" />

        </div>

      </Container>
      <div className='containerDeCards'>
        <Cards cardKey="Card1" />
        <Cards cardKey="Card2" />
        <Cards cardKey="Card3" />
      </div>
      <Contato/>
    </ContainerMaior>
  );
};

export default Inicio;