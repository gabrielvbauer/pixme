import { InputHTMLAttributes } from 'react'
import './input.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  currency?: boolean
}

function Input({ currency, ...rest }: InputProps) {
  return (
    <input
      {...rest}
    />
  )
}

export { Input };