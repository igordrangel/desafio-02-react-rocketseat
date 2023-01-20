import styled from 'styled-components'

export const IntroContent = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
  padding: 5.875rem 0;
`

export const InfoContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 4.125rem;

  small {
    font-size: 1.25rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    font-size: 0;
  }
  ul li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0;
    font-size: 1rem;
  }
  ul li:nth-child(2n - 1) {
    width: calc((90% - 0.75rem) / 2);
  }
  ul li:nth-child(2n) {
    width: calc((110% - 0.75rem) / 2);
  }
  ul li span {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }
  ul li:nth-child(1) span {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
  ul li:nth-child(2) span {
    background-color: ${(props) => props.theme['base-text']};
  }
  ul li:nth-child(3) span {
    background-color: ${(props) => props.theme.yellow};
  }
  ul li:nth-child(4) span {
    background-color: ${(props) => props.theme.purple};
  }
`
