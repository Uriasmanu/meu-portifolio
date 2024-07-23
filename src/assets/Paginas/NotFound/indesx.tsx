import Header from "../../Components/Cabecalho/Header";
import { useMenuContext } from "../../contexts/MenuContext";


const NotFound = () => {
    const { abrirMenu } = useMenuContext();

    return(
        <Header onMenuClick={abrirMenu}>

        </Header>
)
};

export default NotFound;