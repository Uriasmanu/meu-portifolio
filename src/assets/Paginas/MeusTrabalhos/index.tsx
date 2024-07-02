
import Header from '../../Components/Header';
import { useMenuContext } from '../../contexts/MenuContext';



const MeusTrabalhos = () => {
  const { abrirMenu } = useMenuContext();

  return (
    <>
      <Header onMenuClick={abrirMenu} />
      <div className="Titulo">
        <div className="chamada">
          <h2>
            Transforme suas <span style={{ color: '#1A83A4' }}>ideias</span> em código.
          </h2>
        </div>
      </div>
    </>
  );
};

export default MeusTrabalhos;
