import React from 'react';

import { classnames } from '../../utils';

type Color = 'primary' | 'secondary' | 'default';
type Variant = 'outlined' | 'contained' | 'text';
type Size = 'small' | 'medium' | 'large';
type Type = 'button' | 'submit' | 'reset';

type ButtonProps = {
  variant?: Variant;
  color?: Color;
  size?: Size;
  type?: Type;
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: React.ReactNode;
};

const Button: React.FunctionComponent<ButtonProps> = ({
  color = 'default',
  variant = 'text',
  size = 'medium',
  type = 'button',
  className,
  onClick,
  children,
  ...rest
}) => {
  return (
    <button
      type={type}
      className={classnames([
        'button',
        variant !== 'text' && `button-${variant}`,
        size !== 'medium' && `button-${size}`,
        color !== 'default' && `button-${color}`,
        (variant !== 'text' || color !== 'default') &&
          `button-${variant}__${color}`,
        className,
      ])}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
