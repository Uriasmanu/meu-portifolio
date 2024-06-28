import styled from 'styled-components';
import NavBar from '../NavBar';

import estrela from '/public/Star 3.svg';
const Container = styled.div`
    background: #FFFAFA;
    width: 100vw;
    height: 50vh;
    border-radius: 0 0 50px 50px;
    display: flex;
    flex-direction: column;

  h1 {
    font-size: 48px;
    font-family: 'Grape Nuts', cursive;
    font-weight: inherit;
    font-style: italic; 
    margin-left: 8%;
    margin-right: 5%;

  }

  div{
    display: flex;
    justify-content: space-evenly;
  }

  .Titulo{
    display: flex;
    position: relative;
    top: 16%;
    left: 10%;
    width: 60%;
    justify-content: space-around;
    gap: 10%;

    .chamada{
      display: flex;
      flex-direction: column;
      height: 40%;
      width: 45%;

      h2{
        font-size: 3rem;
      }

      p{
        font-size: 1.5rem;
        color: #464646;
      }
    }
}



`;

const Inicio = () => {
  return (
    <Container>
      <div>
        <h1>Urias</h1>
        <NavBar />
      </div>

      <div className='Titulo'>
        <div className='chamada'>
          <h2>
            Transforme suas <span style={{ color: '#1A83A4' }}>ideias</span> em código.
          </h2>
          <p>Crio produtos que resolvem problemas e encantam usuários através de soluções de design bem elaboradas.</p>
        </div>
        <img className="star" src={estrela} alt="" />

      </div>



    </Container>
  );
};

export default Inicio;