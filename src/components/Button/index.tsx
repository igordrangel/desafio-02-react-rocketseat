import { ButtonHTMLAttributes } from 'react'
import {
  ButtonBadgeContent,
  ButtonContent,
  BUTTON_COLLORS,
  BUTTON_SIZE,
} from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  badge?: number
  color?: keyof typeof BUTTON_COLLORS
  size?: keyof typeof BUTTON_SIZE
}

export function Button({
  children,
  color,
  size,
  badge,
  ...props
}: ButtonProps) {
  return (
    <ButtonContent
      size={size ?? 'normal'}
      color={color ?? 'primary'}
      {...props}
    >
      {!!badge && <ButtonBadgeContent>{badge}</ButtonBadgeContent>}
      {children}
    </ButtonContent>
  )
}
