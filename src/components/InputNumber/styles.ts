import styled from 'styled-components'

export const CardInputContainer = styled.div`
  display: inline-flex;
  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-title']};
  border-radius: 6px;
  padding: 0.5rem;
  height: 2.375rem;
  gap: 0.25rem;

  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    width: 1.25rem;
    text-align: center;
    font-weight: bold;
    background-color: transparent;
    border: none;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  button {
    border: 0;
    color: ${(props) => props.theme.purple};
    background-color: transparent;
    cursor: pointer;
  }
`
