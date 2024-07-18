import styled from 'styled-components';
import { useCarouselContext, useMenuContext } from '../../Contexts/MenuContext';
import CardsProjeto from './CardProjetos';
import Header from '../../Components/Cabecalho/Header';
import { texts } from '../../Components/Textos';


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
    width: 95vw;
    margin-left: 5%;
  }

  .CarroselProjetos::-webkit-scrollbar {
    display: none; /* Ocultar barra de rolagem */
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 auto; 
  margin-right: 20px; 
  max-width: 450px;

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
        {texts.cardsProjetos.map((projeto, index) => (
          <CardWrapper key={index}>
            <CardsProjeto projeto={projeto} />
          </CardWrapper>
        ))}
      </div>

    </ContainerTrabalhos>
  );
};

export default MeusTrabalhos;
