/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { ButtonWithBack } from ".";
import AppConfig from "../utilities/config";

interface OTPInputProps {
  numberOfDigits?: number;
  onChange: (otp: string) => void;
  btnText?: string;
  btnAction: () => void;
  submitLoading?: boolean;
}
function OtpInputWithValidation({
  onChange,
  btnAction,
  btnText = "Continue",
  numberOfDigits = AppConfig.OTP_LENGTH,
  submitLoading = false,
}: OTPInputProps) {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(""));
  const [currentIndex, setCurrentIndex] = useState(0);
  const otpBoxReference = useRef<any>([]);

  function handleChange(value: any, index: number) {
    console.log();
    if (isNaN(value)) {
      return;
    }
    const newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      setCurrentIndex(index + 1);
      otpBoxReference.current[index + 1]?.focus();
    }
  }

  function handleBackspaceAndEnter(e: any, index: number) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      setCurrentIndex(index - 1);
      otpBoxReference.current[index - 1]?.focus();
    }
    if (e.key === "Enter" && e.target.value) {
      if (index < numberOfDigits - 1) {
        setCurrentIndex(index + 1);
        otpBoxReference.current[index + 1]?.focus();
      } else if (index === numberOfDigits - 1) {
        btnAction();
      }
    }
  }

  const backAction = () => {
    const newArr = [...otp];
    newArr[currentIndex] = "";
    setOtp(newArr);
    otpBoxReference.current[currentIndex].value = "";
    otpBoxReference.current[currentIndex - 1]?.focus();
    setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    const actualValue = otp.join("");
    if (actualValue.length === numberOfDigits) {
      onChange(actualValue);
    }
  }, [otp]);

  return (
    <div className=''>
      <div className="flex flex-col justify-center items-center mt-10">
        <div className="flex items-center gap-5 mb-10">
          {otp.map((digit, index) => (
            <input
              key={index}
              value={digit}
              maxLength={1}
              placeholder="0"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
              ref={(reference) => (otpBoxReference.current[index] = reference)}
              className={`border h-11 w-11 md:w-16 md:h-16 text-center p-3 rounded-[5px] text-2xl outline-none
                            focus:border-primary  placeholder:text-placeholder font-normal`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 px-[18px]">
        <ButtonWithBack
          submitLoading={submitLoading}
          backAction={backAction}
          btnAction={btnAction}
          btnText={btnText}
        />
      </div>
    </div>
  );
}

export default OtpInputWithValidation;
