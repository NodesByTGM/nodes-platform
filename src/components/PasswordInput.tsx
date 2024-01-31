/* eslint-disable react/prop-types */
import { InputHTMLAttributes, useEffect, useState } from 'react';
import { EyeIcon, SlashedEyeIcon } from '../assets/svg';
import { containsNumber, containsSpecialCharacters } from '../utilities/common';
import { Link } from 'react-router-dom';
import AppConfig from '../utilities/config';

const strengthColorArray = ['text-danger', 'text-warning', 'text-success']
const strengthBgArray = ['bg-danger', 'bg-warning', 'bg-success']
const strengthValueArray = ['Weak', 'Good', 'Strong']

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  forgotPasswordLink?: boolean,
  error?: string;
  touched?: boolean;
  check?: boolean
}
export default function Input({
  className = '',
  value = '',
  label = 'Password',
  type,
  forgotPasswordLink = false,
  check = false,
  required = false,
  onChange,
  ...props
}: InputProps) {
  const [isProtected, setIsProtected] = useState(true)
  const [strength, setStrength] = useState(0)
  const [touched, setTouched] = useState(false)

  const toggleProtected = () => setIsProtected(!isProtected)

  useEffect(() => {
    const inputString = `${value}`
    if (inputString.length > 0) {
      setTouched(true)
    }
    if (inputString.length < 8) {
      setStrength(0)
    } else {
      const constainsSpecial = containsSpecialCharacters(inputString)
      const _containsNumber = containsNumber(inputString)
      if (constainsSpecial && _containsNumber) {
        setStrength(2)
      } else {
        if (constainsSpecial || _containsNumber) {
          setStrength(1)
        }
      }
    }
  }, [value])

  const bgColor = touched ? strengthBgArray[strength] : 'bg-grey-dark'


  return (
    <div className='text-sm'>
      <div className="flex justify-between font-medium mb-1">
        <div>{label}{required ? "*" : null}</div>
        {forgotPasswordLink ? <Link to={AppConfig.PATHS.Auth.ForgotPassword} className='text-primary cursor-pointer'>Forgot?</Link> : null}
      </div>
      <div className='flex justify-between items-center border gap-2 border-grey-dark transition-all focus-within:border-primary rounded-[5px] p-4'>
        <input
          {...props}
          value={value}
          type={isProtected ? 'password' : 'text'}
          onChange={onChange}
          className={`w-full placeholder:text-placeholder text-ellipsis text-black outline-none bg-transparent flex-1 ${className}`}
        />
        <div onClick={toggleProtected} className='cursor-pointer'>{isProtected ? <SlashedEyeIcon /> : <EyeIcon />}</div>
      </div>
      {check ?
        <div className='my-1'>
          <div className="flex gap-1">
            <div className={`${bgColor} h-1 w-full rounded transition-all ease-linear`}></div>
            <div className={`${strength > 0 ? bgColor : 'bg-grey-dark'} h-1 w-full rounded transition-all ease-linear`}></div>
            <div className={`${strength > 1 ? bgColor : 'bg-grey-dark'} h-1 w-full rounded transition-all ease-linear`}></div>
          </div>
          <div className='text-placeholder'>
            Password strength: {touched ? <span className={strengthColorArray[strength]}> {strengthValueArray[strength]}</span> : null}
          </div>
        </div> : null}
    </div>
  );
}
