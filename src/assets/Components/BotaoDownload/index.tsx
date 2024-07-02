import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ConstDownload = styled.button`
        background: #FFFAFA;
        border: none;
        width: 120px;
        height: 37px;
        border-radius: 16px;
        font-weight: 700;
        font-size: 15px;
        margin-left: 5%;

        a{
            color: #000;
        }

`
interface BotaoDownloadProps {
    className?: string;
}


const BotaoDownload: React.FC<BotaoDownloadProps> = ({ className }) => {
    return (
        <ConstDownload  className={className}>
            <Link to="/Curriculo">
                Download CV
            </Link>
        </ConstDownload>
    )
}

export default BotaoDownload;