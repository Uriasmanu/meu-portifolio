import styled from 'styled-components';
import { useCarouselContext, useMenuContext } from '../../Contexts/MenuContext';
import CardsProjeto from './CardProjetos';
import Header from '../../Components/Cabecalho/Header';

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

    width: 100%;
  }

  .CarroselProjetos::-webkit-scrollbar {
    display: none; /* Ocultar barra de rolagem */
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 auto; 
  margin-right: 20px; 
`;

const MeusTrabalhos = () => {
  const { abrirMenu } = useMenuContext();
  const { carrosselRef } = useCarouselContext();



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
