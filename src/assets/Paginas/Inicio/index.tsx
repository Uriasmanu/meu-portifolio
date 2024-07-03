
import styled from 'styled-components';
import Cards from '../../Components/cards';
import Contato from '../../Components/Contato';
import estrela from '/Star 3.svg';
import { useMenuContext } from '../../Contexts/MenuContext';
import Header from '../../Components/Cabecalho/Header';

const ContainerMaior = styled.div`
  .containerDeCards {
    display: flex;
    gap: 2%;
    width: 100%;
  }

  .Titulo {
    display: flex;
    position: relative;
    left: 10%;
    width: 80vw;
    height: auto;

    .chamada {
      display: flex;
      flex-direction: column;
      width: 25vw;
      height: 35vh;
      margin-top: 5%;

      h2 {
        font-size: 300%; /* Corrigido o tamanho da fonte */
      }

      p {
        font-size: 150%t; /* Corrigido o tamanho da fonte */
        color: #464646;
      }
    }

    .star {
      display: flex;
      width: 60%;
      height: 35vh;
    }
  }

  @media (max-width: 768px) {
    .Titulo {
      width: 83%;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;

      .chamada {
        width: 90%;

        h2 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1rem;
          width: 79%;
        }
      }

      .star {
        width: 71%;
      }
    }

    .containerDeCards {
      display: flex;
      gap: 15px;
      width: 100%;
      flex-direction: column;
      margin-top: 15px;
    }
  }
`;

const Inicio = () => {
  const { abrirMenu } = useMenuContext();

  return (
    <ContainerMaior>
      <Header onMenuClick={abrirMenu}>
        <div className="Titulo">
          <div className="chamada">
            <h2>
              Transforme suas <span style={{ color: '#1A83A4' }}>ideias</span> em código.
            </h2>
            <p>
              Crio produtos que resolvem problemas e encantam usuários através de soluções de design bem elaboradas.
            </p>
          </div>
          <img className="star" src={estrela} alt="" />
        </div>
      </Header>

      <div className="containerDeCards">
        <Cards cardKey="Card1" />
        <Cards cardKey="Card2" />
        <Cards cardKey="Card3" />
      </div>
      <Contato />
    </ContainerMaior>
  );
};

export default Inicio;
