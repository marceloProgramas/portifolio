import styled from 'styled-components'

export const wrapper = styled.div<{color:string}>`
    width: 100vw;
    min-height: 40rem;

    padding-block: 5em;

    background-color: ${props => props.color};

    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    align-items: center;
    justify-content: center;
`

export const text = styled.p<{color:string}>`
    color: ${props => props.color};
    font-family: 'Merriweather Sans', sans-serif;
    font-size:2.5rem;
    max-width: 45rem;
`