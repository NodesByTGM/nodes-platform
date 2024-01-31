/* eslint-disable react/prop-types */
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  flex?: boolean;
  error?: string;
  touched?: boolean;
}
export default function Input({
  className = '',
  value = '',
  label = '',
  description = '',
  required,
  onChange,
  ...props
}: InputProps) {

  return (
    <div>
      {label ? (<div className='font-medium text-sm mb-1'>{label}{required ? "*" : null}</div>) : null}
      <input
        value={value}
        onChange={onChange}
        className={`w-full p-4 transition-all outline-none bg-transparent border rounded-[5px] 
        border-grey-dark focus:border-primary disabled:text-placeholder 
        placeholder:text-placeholder text-ellipsis text-sm text-black ${className} `}
        {...props} />
      {description ? (<div className="my-2 text-sm">{description}</div>) : null}
    </div>
  );
}
