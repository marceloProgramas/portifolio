import * as S from './Projects'
import { Link } from '../components/links'

function Project({name,archive, alt, url, width='45', text, color}:{name:string,archive:string, alt: string, url:string, width:string, text:string, color:string}){
    return(
        <>
        <S.wrapper id={name} color={color} dir={color == '#FEFEFE'?'row':'row-reverse'}>
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
        </>
    )
}

function Projects(){
    return(
        <>
            <Project
            name="git"
            width='40'
            color='#FEFEFE'
            archive={"calculadora.png"}
            alt='investiment calculator'
            url='https://investiment-calculator.vercel.app'
            text = "Calculadora de investimento utilizável para grandes ou pequenos períodos e para investimentos de diferentes tamanhos."
            />
            <Project
            name="git"
            width='40'
            url="https://ct-polli.vercel.app"
            color='#121212'
            archive={"CT-polli.png"}
            alt='centro de treinamento polli'
            text = "aplicação web para propagada do Projeto de treinamento Burgo paulista, foi desenvolvido para telas maiores"
            />
            
        </>
    )
}
export default Projects