
import Header from '../../Components/Header';
import { useMenuContext } from '../../contexts/MenuContext';



const MeusTrabalhos = () => {
  const { abrirMenu } = useMenuContext();

  return (
    <>
      <Header onMenuClick={abrirMenu}>
        <h2>Meus Projetos</h2>
      </Header>
    </>
  );
};

export default MeusTrabalhos;
