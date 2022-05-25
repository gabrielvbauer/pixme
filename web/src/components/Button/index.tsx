import { ButtonHTMLAttributes } from 'react';
import './button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function Button({ ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
    />
  )
}

export { Button };