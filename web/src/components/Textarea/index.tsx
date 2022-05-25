import { TextareaHTMLAttributes } from 'react';
import './textarea.module.scss';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

function Textarea({ ...rest }: TextareaProps) {
  return (
    <textarea
      {...rest}
    />
  )
}

export { Textarea }