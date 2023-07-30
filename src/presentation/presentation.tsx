import * as S from './presentation';
import { Links } from '../components/links';

function Presentation(){
    return(
        <S.Wrapper>
        <S.Content>
            <Links justify='start'/>
            <S.Title>Marcelo Martins</S.Title>
            <S.SubTitle>Front-end developer</S.SubTitle>
        </S.Content>
        </S.Wrapper>
    )
}

export default Presentation