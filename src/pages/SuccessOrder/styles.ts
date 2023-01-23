import styled from 'styled-components'

export const SuccessOrderContainer = styled.main`
  padding: 5rem 0 0;

  .message h2 {
    color: ${(props) => props.theme['yellow-dark']};
  }
  .message small {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  .order-content {
    display: flex;
    justify-content: space-between;

    .order-info {
      position: relative;
      overflow: hidden;
      border-radius: 0.375rem 2.25rem;
      margin-top: 2.5rem;

      .order-info-border-wrap {
        border-radius: 0.375rem 2.25rem;
        background: linear-gradient(
          to right,
          ${(props) => props.theme.yellow},
          ${(props) => props.theme.purple}
        );
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        z-index: 0;
      }

      ul {
        border-radius: 0.375rem 2.25rem;
        position: relative;
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 2rem;
        margin: 1px;
        padding: 2.5rem;
        font-size: 0;
        z-index: 1;
        background-color: ${(props) => props.theme.background};
        overflow: hidden;
      }
      ul li {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0;
        font-size: 1rem;
      }
      ul li span {
        width: 2rem;
        height: 2rem;
        padding: 0.5rem;
        border-radius: 50%;
        color: ${(props) => props.theme.white};
      }
      ul li:nth-child(1) span {
        background-color: ${(props) => props.theme.purple};
      }
      ul li:nth-child(2) span {
        background-color: ${(props) => props.theme.yellow};
      }
      ul li:nth-child(3) span {
        background-color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
