import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';

import { colors } from '@victorcsdev/alfabit-tokens'

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  ${({ variant }) =>
    variant === 'primary' &&
    css`
      background: ${colors.blue.primary};
      color: ${colors.white};
      border: none;

      &:hover {
        background: ${colors.blue.hover};
      }

      &:active {
        background: ${colors.blue.click};
      }

      &:disabled {
        background: ${colors.gray.disabled};
        cursor: not-allowed;
      }
    `}

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      background: transparent;
      color: ${colors.blue.primary};
      border: 2px solid ${colors.blue.primary};

      &:hover {
        background: #EDE9FF;
      }

      &:active {
        background: #D5CCFF;
      }

      &:disabled {
        color: #C3C3C3;
        border-color: #C3C3C3;
        cursor: not-allowed;
      }
    `}

  ${({ size }) =>
    size === 'sm' &&
    css`
      padding: 8px 16px;
      font-size: 14px;
    `}

  ${({ size }) =>
    size === 'md' &&
    css`
      padding: 12px 24px;
      font-size: 16px;
    `}

  ${({ size }) =>
    size === 'lg' &&
    css`
      padding: 16px 32px;
      font-size: 18px;
    `}
`;
