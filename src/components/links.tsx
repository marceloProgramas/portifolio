import styled from 'styled-components'


const Icon = styled.img<{width?:string}>`
    width: ${props => props.width || 6}rem;
    @media (max-width: 570px) {
        width: ${props => props.width || 4}rem;
    }
`

function Link({src, alt, url, width}: {src:string, alt:string, url:string, width?:string}){
    return(
        <a href={url} target='_blank'>
            <Icon src = {src} alt = {alt} width = {width}/>
        </a>
    )
}

const Wrapper = styled.div<{justify?:string}>`
    width: 100%;

    display: flex;
    flex-direction: row;
    gap: 1rem;

    color: ${props => props.color || 'black'};

    justify-content: ${props =>  props.justify || 'center'};
`

function Links({justify, color}:{justify:string, color?:string}){
    return(
        <Wrapper justify={justify}>
            <Link
            src={color=='white'?"github lt.svg":'github.svg'}
            alt='link github'
            url='https://github.com/marceloProgramas'
            />
            <Link
            src={color=='white'?'linkedin lt.svg':'/linkedin.svg'}
            alt='link linkedin'
            url='https://www.linkedin.com/in/marcelo-martins-2b2a94241/'
            />
        </Wrapper>
    )
}

export {Link, Links}