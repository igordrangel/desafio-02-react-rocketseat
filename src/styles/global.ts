import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-dark']};
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

  input, textarea, select {
    width: 100%;
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

  .w-100 {width: 100%}

  [class*="col-"] {
    box-sizing: border-box;
    display: inline-block;
    padding: 0.5rem;
    position: relative;
    width: 100%;
  }
  .col-1 {
    flex: 0 0 calc((100% * 1) / 12);
    max-width: calc((100% * 1) / 12);
  }
  .col-2 {
    flex: 0 0 calc((100% * 2) / 12);
    max-width: calc((100% * 2) / 12);
  }
  .col-3 {
    flex: 0 0 calc((100% * 3) / 12);
    max-width: calc((100% * 3) / 12);
  }
  .col-4 {
    flex: 0 0 calc((100% * 4) / 12);
    max-width: calc((100% * 4) / 12);
  }
  .col-5 {
    flex: 0 0 calc((100% * 5) / 12);
    max-width: calc((100% * 5) / 12);
  }
  .col-6 {
    flex: 0 0 calc((100% * 6) / 12);
    max-width: calc((100% * 6) / 12);
  }
  .col-7 {
    flex: 0 0 calc((100% * 7) / 12);
    max-width: calc((100% * 7) / 12);
  }
  .col-8 {
    flex: 0 0 calc((100% * 8) / 12);
    max-width: calc((100% * 8) / 12);
  }
  .col-9 {
    flex: 0 0 calc((100% * 9) / 12);
    max-width: calc((100% * 9) / 12);
  }
  .col-10 {
    flex: 0 0 calc((100% * 10) / 12);
    max-width: calc((100% * 10) / 12);
  }
  .col-11 {
    flex: 0 0 calc((100% * 11) / 12);
    max-width: calc((100% * 11) / 12);
  }
  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
`
