import styled from 'styled-components'

export const ProductListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 2.5rem 0 2rem;
`

export const CardContainer = styled.div`
  width: calc((100% - 8rem) / 4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.25rem;
  padding: 0 1.125rem 1.125rem;
  margin: 1rem;

  &:nth-child(4n) {
    margin-right: 0;
  }
  &:nth-child(4n + 1) {
    margin-left: 0;
  }

  img {
    margin-top: -1.25rem;
  }

  small {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }

  footer {
    margin-top: 2.06rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.43rem;

    label {
      display: flex;
      align-items: baseline;
      justify-content: center;
      white-space: nowrap;
      gap: 0.125rem;

      span {
        font-size: 0.75rem;
        vertical-align: baseline;
      }
    }

    form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
    }
  }
`

export const CardTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    border-radius: 1rem;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    line-height: 1.3;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0.75rem 0;
  }
`
