import * as S from './Projects'
import { Link } from '../components/links'

function Project({name,archive, alt, url, text, color}:{name:string,archive:string, alt: string, url:string, text:string, color:string}){
    return(
        <S.wrapper id={name} color={color}>
            <Link
            src={archive}
            alt={alt}
            url={url}
            width = '30'
            />
            <S.text
            color = {color == '#121212'? '#FEFEFE': '#121212'}
            >{text}</S.text>
        </S.wrapper>
    )
}

function Projects(){
    return(
        <>
            <Project
            name="git"
            color='#121212'
            archive={"github lt.svg"}
            alt='link github'
            url='https://github.com/marceloProgramas'
            text = "Mussum Ipsum, cacilds vidis litro abertis.  Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Suco de cevadiss deixa as pessoas mais interessantis. Per aumento de cachacis, eu reclamis."
            />
            <Project
            name="link"
            color='#FEFEFE'
            archive={"linkedin.svg"}
            alt='link github'
            url='https://github.com/marceloProgramas'
            text = "Mussum Ipsum, cacilds vidis litro abertis.  Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Suco de cevadiss deixa as pessoas mais interessantis. Per aumento de cachacis, eu reclamis."
        />
        </>
    )
}

export default Projects