
import Header from '../../Components/Cabecalho/Header';
import { useMenuContext } from '../../Contexts/MenuContext';



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
