import styled from 'styled-components'

export const CartContainer = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
  }
`

export const CartAddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5rem;
    padding-bottom: 2rem;
  }
  .title h2 {
    font-family: 'Roboto', sans-serif;
    line-height: 1;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
  .title small {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text']};
  }

  input {
    border: 0;
    border-radius: 4px;
    padding: 0.75rem;
    background-color: ${(props) => props.theme['base-button']};

    &:not(:required) {
      padding-right: 4.5rem;
    }
  }

  [class*='col-']:has(input:not(:required))::after {
    content: 'Opcional';
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['base-label']};
    z-index: 1;
  }
`

export const CartFormAddressContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  .title .icon {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CartFormPaymentContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  .title .icon {
    color: ${(props) => props.theme.purple};
  }

  .radio-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .radio-input {
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 1rem;
      background-color: ${(props) => props.theme['base-button']};
      border: 1px solid ${(props) => props.theme['base-button']};
      border-radius: 6px;
      cursor: pointer;
    }

    label .icon {
      color: ${(props) => props.theme.purple};
    }

    input[type='radio'] {
      display: none;
    }

    input[type='radio']:checked ~ label {
      border: 1px solid ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme['purple-light']};
    }
  }
`

export const CartFinishOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  .cart-order {
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 0.375rem 2.25rem;
    padding: 2.5rem;
    min-width: 25rem;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1.25rem;
        padding: 1.5rem 0;

        border-bottom: 1px solid ${(props) => props.theme['base-button']};

        .product-info-container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 1.25rem;

          img {
            width: 4rem;
          }

          .product-info {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            .btn-group {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              gap: 0.5rem;
            }
          }
        }

        .product-value-info {
          white-space: nowrap;
        }
      }

      li:first-child {
        padding-top: 0;
      }
    }

    .value-info {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      font-size: 0.875rem;

      padding: 1.5rem 0;

      .value-line {
        display: flex;
        justify-content: space-between;
        align-items: center;

        strong {
          font-size: 1.25rem;
        }
      }
    }
  }
`
