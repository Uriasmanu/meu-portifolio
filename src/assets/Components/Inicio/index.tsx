import styled from 'styled-components';
import NavBar from '../NavBar';


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
    flex-direction: column;
    position: relative;
    top: 16%;
    left: 10%;
    width: 450px;
    height: 34%;

    h2{
    font-size: 3rem;
  }

  p{
    font-size: 1rem;

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
        <h2>Transforme suas ideias em código.</h2>
        <p>Crio produtos que resolvem problemas e encantam usuários através de soluções de design bem elaboradas.</p>
      </div>
    </Container>
  );
};

export default Inicio;