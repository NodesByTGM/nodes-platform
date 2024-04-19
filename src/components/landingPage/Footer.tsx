import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../components";
import { landingPageFooterLinks } from "../../utilities/constants";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="landingPageMainDiv pt-[160px] pb-[80px]">
      <div className="flex gap-8 justify-between mb-20">
        <div className="flex flex-col gap-4">
          <h4 className="font-medium text-[18px] text-[#000000]">
            Join our newsletter
          </h4>
          <span className="font-normal text-base text-[#000000]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>

        <div className="">
          <div className="flex gap-4 mb-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="placeholder-[#505050] px-4 py-2 min-w-[283px] border border-[#D9D9D9] rounded"
            />

            <Button className="max-w-max !px-6">
              <span className="mx-auto text-center text-base font-normal !rounded">
                Subscribe
              </span>
            </Button>
          </div>

          <span className="text-[#000000] text-xs font-normal">
            By subscribing you agree to with our Privacy Policy
          </span>
        </div>
      </div>
      <div className="border-t border-b border-[#D6DE2180] py-20">
        <div className="w-full grid grid-cols-6 gap-x-10 gap-y-6">
          {landingPageFooterLinks.map((link) => (
            <div key={link.id} className="flex flex-col gap-4">
              <h3 className="font-medium text-base text-[#000000]">
                {link.linkTitle}
              </h3>
              <ul className="font-normal text-sm">
                {link.linkItems.map((item) => (
                  <li className="py-2">
                    {" "}
                    <NavLink
                      key={item.id}
                      to={item.linkUrl}
                      className="py-2 w-full"
                    >
                      {item.linkLabel}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4 text-[#000000]">
            <h3 className="font-medium text-[18px]">Get in touch</h3>
            <div className="flex flex-col gap-4">
              <span className="text-sm font-normal">+234 70 123 567 89</span>
              <span className="text-sm font-normal">info@nodes.com</span>

              <span className="text-sm font-normal">
                234, Adeniyi street, Lekki, Lagos, Nigeria
              </span>
              <div className="grid grid-cols-4  gap-3">
                <div className='cursor-pointer max-w-max'><FaFacebookF /> </div>
                <div className='cursor-pointer max-w-max'><FaInstagram /> </div>
                <div className='cursor-pointer max-w-max'><FaTwitter /> </div>
                <div className='cursor-pointer max-w-max'><FaLinkedin /> </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <NavLink to="/" className="cursor-pointer">
          <img src="/landing-page-logo.svg" alt="" className="h-8" />
        </NavLink>
        <span className="font-normal text-sm text-[#000000]">
          © 2024 Nodes. All rights reserved.
        </span>
      </div>
    </div>
  );
}
