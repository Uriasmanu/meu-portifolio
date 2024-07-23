import styled from 'styled-components';
import Header from '../../Components/Cabecalho/Header';
import { useMenuContext } from '../../contexts/MenuContext';


const ContainerCurriculo = styled.div`
    display: flex;

    .TituloCurriculo{
        h2{
            font-size: 350%;
            margin: 5% 18%;

        }
    }
   
`

const Curriculo = () => {
    const { abrirMenu } = useMenuContext();

    return (
        <ContainerCurriculo>
            <Header onMenuClick={abrirMenu}>
                <div className='TituloCurriculo'>
                    <h2>Curriculo</h2>
                </div>
            </Header>
        </ContainerCurriculo>
    )
}

export default Curriculo;