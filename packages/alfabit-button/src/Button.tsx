import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styles';
import React from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  children: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  rightIcon,
  leftIcon,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      size={size}
      variant={variant}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      {...props}
    >
      {children}
    </StyledButton>
  )
}
