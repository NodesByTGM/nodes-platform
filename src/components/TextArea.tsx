/* eslint-disable react/prop-types */
import { TextareaHTMLAttributes } from 'react';

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  flex?: boolean;
  error?: string;
  touched?: boolean;
}
export default function TextArea({
  className = '',
  value = '',
  label = '',
  required,
  onChange,
  ...props
}: InputProps) {

  return (
    <div>
      {label ? (<div className='font-medium text-sm mb-1'>{label}{required ? "*" : null}</div>) : null}
      <textarea
        {...props}
        value={value}
        onChange={onChange}
        rows={3}
        className={`w-full p-4 placeholder:text-placeholder text-ellipsis text-black text-sm transition-all
        outline-none bg-transparent border border-grey-dark focus:border-primary rounded-[5px] ${className}`}
      />
    </div>
  );
}
