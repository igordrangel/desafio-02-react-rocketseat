import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-subtitle']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    line-height: 1.3;
  }
  h1 {
    font-size: 3rem;
    font-weight: bolder;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1.125rem;
  }
`
