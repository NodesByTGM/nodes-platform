import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  description?: string;
  flex?: boolean;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  textSize?: string;
}
export default function CollaboratorInput({
  id,
  name,
  className = "",
  value = "",
  label = "",
  description = "",
  placeholder = "",
  textSize = "",
  touched = false,
  error,
  required,
  onChange,
  ...props
}: InputProps) {
  return (
    <div>
      {label ? (
        <div className="font-medium text-sm mb-1">
          {label}
          {required ? "*" : null}
        </div>
      ) : null}
      <input
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full  transition-all outline-none bg-transparent  rounded-[5px] 
          disabled:text-placeholder 
         ${textSize} font-medium
        placeholder:text-placeholder text-ellipsis  text-[#757575] ${className} `}
        {...props}
      />
      {description ? <div className="my-2 text-sm">{description}</div> : null}
      {touched && error ? (
        <div className="my-2 text-sm text-red-500">{error}</div>
      ) : null}
    </div>
  );
}
