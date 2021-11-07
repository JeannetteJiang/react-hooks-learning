import React, { HTMLAttributes, ReactNode } from "react";

export enum EButtonType {
  defalut = 'default',
  primary = 'primary'
}
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode,
  type: EButtonType.defalut | EButtonType.primary;
}
export const Button: React.FC<ButtonProps> = ({ children, type , ...rest }) => {
  return <button  {...rest}>{children}</button>
}
Button.defaultProps = {
  type: EButtonType.defalut
}
