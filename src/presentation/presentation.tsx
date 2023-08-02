import * as S from './presentation';
import { Links } from '../components/links';
import {useState, useEffect} from 'react';

function Presentation(){

    const [width, setwidth] = useState({
        width: window.innerWidth,
      });
    
      useEffect(() => {
        function handleResize() {
          setwidth({
            width: window.innerWidth,
          });
        }
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return(
        <S.Wrapper>
        <S.Content>
            <Links justify={width.width > 566 ?'start':'center'}/>
            <S.Title>Marcelo Martins</S.Title>
            <S.SubTitle>Front-end developer</S.SubTitle>
        </S.Content>
        </S.Wrapper>
    )
}

export default Presentation