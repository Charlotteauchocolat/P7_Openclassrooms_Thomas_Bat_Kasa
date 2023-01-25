import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
*{
    font-family: 'Montserrat', Helvetica, sans serif;
}
body {
    margin-right: 40px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin 0px auto;
    max-width: 1400px;
}
root { 
    dislay: flex;
    flex-direction: column;
    max-width: 1240px;
}
`
function GlobalStyle() {
    return <StyledGlobalStyle />
}

export default GlobalStyle