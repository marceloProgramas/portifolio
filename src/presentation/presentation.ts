import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 79rem;

    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    
   
`

export const Content = styled.div`
    width: fit-content;

    display: flex;
    flex-direction: column;
    align-items: end;

    @media(max-width:566px) {
        align-items: center;
        text-align: center;
    }
`

export const Title = styled.h2`
    font-size: 15rem;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 700;

    @media( max-width: 1210px){
        font-size: 10rem;
    }

    @media( max-width:813px){
        font-size: 7rem;
    }

    
`

export const SubTitle = styled.h1`
    font-size: 7rem;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 500;

    justify-self: end;

    @media( max-width: 1024px){
        font-size: 5rem;
    }

    @media( max-width: 768px){
        font-size: 3.5rem;
    }

    @media(max-width:426px) {
        text-align: 2rem;
    }
`