import styled from 'styled-components'

export const wrapper = styled.div<{color:string}, {dir:string}>`
    min-height: 70rem;

    padding-block: 5em;

    background-color: ${props => props.color};

    display: flex;
    flex-direction: ${props => props.dir};
    gap: 2.5rem;
    align-items: center;
    justify-content: center;

    @media( max-width: 768px){
        flex-direction: column;
        gap: 3rem;
    }
`

export const text = styled.p<{color:string}>`
    color: ${props => props.color};
    font-family: 'Merriweather Sans', sans-serif;
    font-size:3rem;
    max-width: 55rem;

    @media( max-width: 1024px){
        font-size: 2.5rem;
    }

    @media( max-width: 768px){
        font-size: 2rem;
    }

    @media(max-width: 550px){
        max-width: 30rem;
    }
`