import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { Bell, Mail } from "react-feather";
// import { FiShare2 } from "react-icons/fi";
type ActionIconPropType = {
  edit?: boolean;
  edit2?: boolean;
  erase?: boolean;
  erase2?: boolean;
  bell?: boolean;
  mail?: boolean;
  share?: boolean;
  hasBorder?: boolean;
  size?: string;
};

const AppDelete = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8H6.66667H28"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3332 8.00033V26.667C25.3332 27.3742 25.0522 28.0525 24.5521 28.5526C24.052 29.0527 23.3737 29.3337 22.6665 29.3337H9.33317C8.62593 29.3337 7.94765 29.0527 7.44755 28.5526C6.94746 28.0525 6.6665 27.3742 6.6665 26.667V8.00033M10.6665 8.00033V5.33366C10.6665 4.62641 10.9475 3.94814 11.4476 3.44804C11.9477 2.94794 12.6259 2.66699 13.3332 2.66699H18.6665C19.3737 2.66699 20.052 2.94794 20.5521 3.44804C21.0522 3.94814 21.3332 4.62641 21.3332 5.33366V8.00033"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.3335 14.667V22.667"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6665 14.667V22.667"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const AppEdit = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 26.667H28"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 4.66632C22.5304 4.13588 23.2499 3.83789 24 3.83789C24.3714 3.83789 24.7392 3.91105 25.0824 4.05319C25.4256 4.19533 25.7374 4.40367 26 4.66632C26.2626 4.92896 26.471 5.24076 26.6131 5.58393C26.7553 5.92709 26.8284 6.29488 26.8284 6.66632C26.8284 7.03775 26.7553 7.40555 26.6131 7.74871C26.471 8.09187 26.2626 8.40367 26 8.66632L9.33333 25.333L4 26.6663L5.33333 21.333L22 4.66632Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const AppShare = () => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 10.667C26.2091 10.667 28 8.87613 28 6.66699C28 4.45785 26.2091 2.66699 24 2.66699C21.7909 2.66699 20 4.45785 20 6.66699C20 8.87613 21.7909 10.667 24 10.667Z"
        stroke="#212121"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 20C10.2091 20 12 18.2091 12 16C12 13.7909 10.2091 12 8 12C5.79086 12 4 13.7909 4 16C4 18.2091 5.79086 20 8 20Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 29.333C26.2091 29.333 28 27.5421 28 25.333C28 23.1239 26.2091 21.333 24 21.333C21.7909 21.333 20 23.1239 20 25.333C20 27.5421 21.7909 29.333 24 29.333Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.4531 18.0137L20.5598 23.3203"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.5465 8.67969L11.4531 13.9864"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function ActionIcon({
  edit,
  edit2,
  erase,
  erase2,
  bell,
  mail,
  share,
  hasBorder = true,
  size = "size-8",
}: ActionIconPropType) {
  return (
    <div
      className={`${size} ${
        hasBorder ? "border border-[#000000] rounded-full" : ""
      } cursor-pointer   flex items-center justify-center`}
    >
      {edit && <FiEdit3 />}
      {erase && <AiOutlineDelete />}
      {erase2 && <AppDelete />}
      {share && <AppShare />}
      {edit2 && <AppEdit />}
      {bell && <Bell className={'size-4'}/>}
      {mail && <Mail className={'size-4'}/>}
    </div>
  );
}
