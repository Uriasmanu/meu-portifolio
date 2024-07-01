
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

    a{


      .whatsapp {
      background: #000902;
      color: #FFFFFF;
      border: none;
      width: 250px;
      border-radius: 25px;
      font-weight: 700;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 3%;
      text-align: center;
    }
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

    a{
      .whatsapp {
      background: #000902;
      color: #FFFFFF;
      border: none;
      border-radius: 25px;
      width: 250px;
      font-weight: 700;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 3%;
      text-align: center;
    }
    }

  }
}
`;

const Contato = () => {
  const corContato = texts.cards.Card4.cor; // Obtendo a cor de texts.cards.Card4
  const whatsappLink = "https://wa.me/5514996257741?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20seus%20serviços.";

  return (
    <ContainerContato cor={corContato}>
      <div className="contato">
        <h2>Interessado em Trabalhar Juntos?</h2>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <button className='whatsapp' >{texts.cards.Card4.textoBotao}</button>
        </a>


      </div>
    </ContainerContato>
  );
};

export default Contato;
