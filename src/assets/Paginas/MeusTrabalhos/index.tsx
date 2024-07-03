import styled from 'styled-components';
import { useMenuContext } from '../../Contexts/MenuContext';
import CardsProjeto from './CardProjetos';
import Header from '../../Components/Cabecalho/Header';
import { useEffect, useRef } from 'react';

const ContainerTrabalhos = styled.div`
  display: flex;
  flex-direction: column;

  .TituloTrabalhos {
    h2 {
      font-size: 350%;
      margin: 5% 18%;
    }
  }

  .CarroselProjetos {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin: 0 5%;
  }

  .CarroselProjetos::-webkit-scrollbar {
    display: none; /* Ocultar barra de rolagem */
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 auto; /* Impede o flexbox de encolher ou crescer */
  margin-right: 20px; /* Espaçamento entre os cards */
`;

const MeusTrabalhos = () => {
  const { abrirMenu } = useMenuContext();
  const carrosselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        // Rolar para a direita
        if (carrosselRef.current) {
          carrosselRef.current.scrollLeft += 1000; 
        }
      } else {
        // Rolar para a esquerda
        if (carrosselRef.current) {
          carrosselRef.current.scrollLeft -= 1000; 

        }
      }
      event.preventDefault();
    };

    const container = carrosselRef.current;
    if (container) {
      container.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  return (
    <ContainerTrabalhos id="container-trabalhos">
      <Header onMenuClick={abrirMenu}>
        <div className='TituloTrabalhos'>
          <h2>Meus Projetos</h2>
        </div>
      </Header>
      <div className='CarroselProjetos' ref={carrosselRef}>
        <CardWrapper><CardsProjeto cardKey='Card1' /></CardWrapper>
        <CardWrapper><CardsProjeto cardKey='Card2' /></CardWrapper>
        <CardWrapper><CardsProjeto cardKey='Card3' /></CardWrapper>
        <CardWrapper><CardsProjeto cardKey='Card4' /></CardWrapper>
        <CardWrapper><CardsProjeto cardKey='Card5' /></CardWrapper>
        <CardWrapper><CardsProjeto cardKey='Card6' /></CardWrapper>
      </div>
    </ContainerTrabalhos>
  );
};

export default MeusTrabalhos;
