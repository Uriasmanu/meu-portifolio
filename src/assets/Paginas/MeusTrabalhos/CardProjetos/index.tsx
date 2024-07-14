import React from 'react';
import styled from 'styled-components';

const ContainerCardsProjetos = styled.div`
  margin-top: 2%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
`;

const ComponenteProjeto = styled.div`
  width: 100%;
  height: auto;
  background-color: #CCD5AE;
  border-radius: 25px;
  padding: 15px;
  box-sizing: border-box;

  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
  }

  a {
    display: block;
    margin-top: 10px;
    color: #1A83A4;
    text-decoration: none;
  }

  .iframeContainer {
    height: 400px; /* Defina a altura do iframe conforme necessário */
    overflow: hidden;
    position: relative;
    width: 100%;
    margin-top: 20px;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 7%;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 15px;
  }
`;

interface CardProps {
  projeto: {
    titulo: string;
    descricao: string;
    url: string;
  };
}

const CardsProjeto: React.FC<CardProps> = ({ projeto }) => {
  return (
    <ContainerCardsProjetos>
      <ComponenteProjeto>
        <div className="iframeContainer">
          <iframe src={projeto.url} title={projeto.titulo} />
        </div>
        <h2>{projeto.titulo}</h2>
        <p>{projeto.descricao}</p>
        <a href={projeto.url} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
      </ComponenteProjeto>
    </ContainerCardsProjetos>
  );
};

export default CardsProjeto;
