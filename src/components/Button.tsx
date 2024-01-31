import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'primary' | 'secondary' | 'dark',
  children?: any,
  size?: 'lg' | 'xl' | 'md' | 'default',
  className?: string,
  compact?: boolean
}

const themeKVP = {
  primary: 'bg-primary border-primary text-white hover:border-secondary focus:text-secondary disabled:bg-primary-light-active disabled:border-primary-light-active',
  secondary: 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white hover:border-secondary focus:border-secondary disabled:border-primary-light-active disabled:text-primary-light-active',
  dark: 'border-black bg-white text-black hover:bg-black hover:text-white '
}

export default function Button({ className, children, theme = "primary", compact, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className} whitespace-nowrap rounded-[5px] py-3 px-5 
      ${themeKVP[theme]} outline-none transition-all border w-full ${compact ? 'max-w-[350px]' : ''}
      flex items-center gap-2 justify-center`}>
      {children}
    </button>
  );
}
