import React from 'react';
import styled from 'styled-components';

import { texts } from '../../../Components/Textos';

const ContainerCardsProjetos = styled.div`
  margin-top: 2%;
  width: 100%;
  display: flex;
  width: 50vw;
  height: 50vh;
  display: flex;
  margin-right: 2%;

.ComponenteProjeto{
    width: 100%;
    height: 100%;
    background-color: #CCD5AE;
    border-radius: 25px;


}

`

interface CardProps {
    cardKey: 'Card1' | 'Card2' | 'Card3' | 'Card4' | 'Card5' | 'Card6';
}

const CardsProjeto: React.FC<CardProps> = ({ cardKey }) => {
    const card = texts.cardsProjetos[cardKey];

    if (!card) {
        return null; // ou uma mensagem de erro apropriada
    }

    return (
        <ContainerCardsProjetos>
            <div className='ComponenteProjeto'>
                <h2>{card.titulo}</h2>
                <p>{card.descricao}</p>
            </div>

        </ContainerCardsProjetos>
    );
};

export default CardsProjeto;