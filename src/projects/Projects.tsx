import * as S from './Projects'
import { Link } from '../components/links'

function Project({name,archive, alt, url, width='30', text, color}:{name:string,archive:string, alt: string, url:string, width:string, text:string, color:string}){
    return(
        <S.wrapper id={name} color={color}>
            <Link
            src={archive}
            alt={alt}
            url={url}
            width = {width}
            />
            <S.text
            color = {color == '#121212'? '#FEFEFE': '#121212'}
            >
                {text}
            </S.text>
        </S.wrapper>
    )
}

function Projects(){
    return(
        <>
            <Project
            name="git"
            color='#FEFEFE'
            archive={"calculadora.png"}
            alt='investiment calculator'
            url='https://investiment-calculator.vercel.app'
            width = '45'
            text = "Calculadora de investimento utilizável para grandes ou pequenos períodos e para investimentos de diferentes tamanhos."
            />
            
            
        </>
    )
}
export default Projects