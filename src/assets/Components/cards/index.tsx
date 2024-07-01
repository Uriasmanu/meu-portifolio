import React from 'react';
import styled from 'styled-components';
import { texts } from '../Textos';

import arrow from '/arrow.svg'

const ContainerCards = styled.div<{ cor: string }>`
  margin-top: 2%;

  .moldura {
    background: ${({ cor }) => cor};
    width: 36rem;
    height: 15rem;
    padding: 5%;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 10%;

    h2{
      font-size: 1.5rem;
    }

    p{
      font-size: 1rem;

    }
  }

  .mais{
    display: flex;
    justify-content: space-between;

    button{
      background: #000902;
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: rotate(-40deg);

    }


  }

  @media (max-width: 768px) {
    .moldura {
      background: ${({ cor }) => cor};
      width: 100vw;
      height: 15rem;
      padding: 5%;
      border-radius: 25px;
      display: flex;
      flex-direction: column;
      gap: 10%;
    }
  }
`;

interface CardProps {
  cardKey: 'Card1' | 'Card2' | 'Card3';
}

const Cards: React.FC<CardProps> = ({ cardKey }) => {
  const card = texts.cards[cardKey];

  if (!card) {
    return null; // ou uma mensagem de erro apropriada
  }

  return (
    <ContainerCards cor={card.cor}>
      <div className="moldura">
        <div className='mais'>
        <h2>{card.titulo}</h2>
        <button>
          <img src={arrow} alt="" />
        </button>
        </div>
        <p>{card.descricao}</p>
      </div>
    </ContainerCards>
  );
};

export default Cards;
