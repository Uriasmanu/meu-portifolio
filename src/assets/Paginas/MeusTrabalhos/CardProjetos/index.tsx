import React from 'react';
import styled from 'styled-components';

const ContainerCardsProjetos = styled.div`
  margin-top: 5%;
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
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 7%;

  a {
    display: block;
    margin-top: 10px;
    color: #1A83A4;
    text-decoration: none;
  }

  .iframeContainer {
    height: 600px;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: 15px;
    overflow: hidden;

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
    caminho: string;
    url: string;
  };
}

const CardsProjeto: React.FC<CardProps> = ({ projeto }) => {
  return (
    <ContainerCardsProjetos>
      <ComponenteProjeto>
        <div className="iframeContainer">
        <a href={projeto.url}>
            <img
              src={projeto.caminho}
            />
          </a>
        </div>

      </ComponenteProjeto>
    </ContainerCardsProjetos>
  );
};

export default CardsProjeto;
