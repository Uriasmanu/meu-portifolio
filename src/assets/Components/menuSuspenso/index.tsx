import styled from 'styled-components';

const ContainerMenu = styled.div`
    display: flex;
`



import menu from "/public/menu.svg"
const MenuSuspenso = () => {
    return (
        <ContainerMenu>
            <img src={menu} alt="" />
        </ContainerMenu>
    )
}

export default MenuSuspenso;