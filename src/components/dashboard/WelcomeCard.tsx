/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Button } from "../../components";
import { Link } from "react-router-dom";

type IWelcomeCardProps = {
  text1: string;
  text2?: string;
  icon?: any;
  buttonText?: string;
  buttonLink: string;
};
export default function WelcomeCard({
  text1,
  text2,
  icon,
  buttonText,
  buttonLink,
}: IWelcomeCardProps) {
  return (
    <div className={"bg-[#ffffff] p-6 rounded-lg"}>
      <div
        style={{ backgroundImage: 'url("/img/WelcomeCardbgImg.png")' }}
        className="flex flex-col"
      >
        <div className="flex gap-6 mb-[103px] justify-between items-start">
          <span className="font-medium text-[18px] ">
            {text1} <br /> {text2}
          </span>
          <img src={icon} alt="" className="" />
        </div>
        <Link to={buttonLink}>
          <Button>
            <span className="text-base font-medium">{buttonText}</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
