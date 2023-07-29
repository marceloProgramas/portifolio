import styled from 'styled-components'

function Link(src:string, alt:string, url:string){
    return(
        <a href={url}>
            <img src = {src} alt = {alt}/>
        </a>
    )
}