
import styled from 'styled-components';
import { texts } from '../Textos';

const ContainerContato = styled.div<{ cor: string }>`
  margin-top: 2%;


  .contato {
    background: ${({ cor }) => cor};
    width: 100%;
    height: 15rem;
    padding: 5%;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;


    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      background: #000902;
      color: #FFFFFF;
      border: none;
      width: 15%;
      border-radius: 25px;
      font-weight: 700;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 1%;
    }
  }

  @media (max-width: 768px) {
    .contato {
    background: ${({ cor }) => cor};
    width: 100%;
    height: 15rem;
    padding: 5%;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;


    h2 {
      font-size: 1.5rem;
      text-align: center;
    }

    p {
      font-size: 1rem;
    }

    button {
      background: #000902;
      color: #FFFFFF;
      border: none;
      width: 55%;
      border-radius: 25px;
      font-weight: 700;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 3%;
      text-align: center;
    }
  }
}
`;

const Contato = () => {
  const corContato = texts.cards.Card4.cor; // Obtendo a cor de texts.cards.Card4

  return (
    <ContainerContato cor={corContato}>
      <div className="contato">
        <h2>Interessado em Trabalhar Juntos?</h2>
        <button>{texts.cards.Card4.textoBotao}</button>
      </div>
    </ContainerContato>
  );
};

export default Contato;
