import styled from 'styled-components'

export const BUTTON_COLLORS = {
  primary: {
    background: 'yellow',
    color: 'white',
  },
  secondary: {
    background: 'purple-light',
    color: 'purple-dark',
  },
  accent: {
    background: 'yellow-light',
    color: 'yellow-dark',
  },
  default: {
    background: 'purple-dark',
    color: 'white',
  },
} as const

export const BUTTON_SIZE = {
  small: {
    padding: '0.5rem',
  },
  normal: {
    padding: '0.75rem',
  },
} as const

interface ButtonColorProps {
  color: keyof typeof BUTTON_COLLORS
  size: keyof typeof BUTTON_SIZE
}

export const ButtonContent = styled.button<ButtonColorProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border: none;
  border-radius: 6px;
  padding: ${(props) => BUTTON_SIZE[props.size].padding};
  background-color: ${(props) =>
    props.theme[BUTTON_COLLORS[props.color].background]};
  color: ${(props) => props.theme[BUTTON_COLLORS[props.color].color]};
  font-weight: 400;
  line-height: 1.3;
  cursor: pointer;
`

export const ButtonBadgeContent = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 1.56;
`
