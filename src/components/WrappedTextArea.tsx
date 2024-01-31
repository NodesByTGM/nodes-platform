/* eslint-disable react/prop-types */
import { TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>  {
  label: string;
  description?: string;
  flex?: boolean;
  error?: string;
  touched?: boolean;
}
export default function WrappedInput({
  className = '',
  value = '',
  label = '',
  required,
  onChange,
  ...props
}: TextAreaProps) {

  return (
    <div className='border focus:border-primary border-grey-dark rounded-[5px] transition-all p-4'>
      <div className='font-medium text-sm mb-1'>{label}{required ? "*" : null}</div>
      <textarea
        value={value}
        rows={3}
        onChange={onChange}
        className={`w-full py-2 placeholder:text-placeholder text-ellipsis text-black text-sm 
        outline-none bg-transparent ${className}`}
        {...props}
      />
    </div>
  );
}
