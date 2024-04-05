import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminAuthBase() {
  return (
    <div className="min-h-[100vh] bg-customsecondary pb-10">
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center gap-[64px] mt-[124px]">
          <AdminAuthLogo />
          <div className="bg-[#ffffff] p-6 rounded-lg w-[480px]">
            {" "}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminAuthLogo() {
  return (
    <div className="">
      <svg
        width="64"
        height="80"
        viewBox="0 0 64 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.97487 74.4522H2V59.5376H4.61307L11.5879 69.2461H11.6683V59.5376H14.6231V74.4522H12.0503L5.07538 64.6833H4.97487V74.4522Z"
          fill="white"
        />
        <path
          d="M25.9396 73.1459C24.9547 74.171 23.6079 74.6735 21.9396 74.6735C20.2511 74.6735 18.9245 74.1509 17.9396 73.1258C16.9547 72.1006 16.4521 70.6936 16.4521 68.8846C16.4521 67.0956 16.9547 65.6886 17.9396 64.6635C18.9446 63.6383 20.2712 63.1157 21.9396 63.1157C23.6079 63.1157 24.9547 63.6383 25.9396 64.6635C26.9245 65.6886 27.427 67.0956 27.427 68.8846C27.427 70.7137 26.9245 72.1408 25.9396 73.1459ZM21.9396 72.3821C22.6833 72.3821 23.2662 72.0805 23.7084 71.4775C24.1506 70.8745 24.3516 70.0102 24.3516 68.9248C24.3516 67.8393 24.1305 66.9951 23.7084 66.372C23.2662 65.7489 22.6833 65.4474 21.9396 65.4474C21.1959 65.4474 20.613 65.7489 20.1707 66.372C19.7285 66.9951 19.5074 67.8393 19.5074 68.9248C19.5074 70.0303 19.7285 70.8745 20.1506 71.4775C20.5929 72.0805 21.1959 72.3821 21.9396 72.3821Z"
          fill="white"
        />
        <path
          d="M33.0959 74.6331C31.7089 74.6331 30.6034 74.1105 29.7994 73.0853C28.9954 72.0602 28.5732 70.6532 28.5732 68.8843C28.5732 67.1356 28.9753 65.7487 29.7994 64.7235C30.6235 63.6984 31.729 63.1959 33.116 63.1959C33.8999 63.1959 34.5833 63.3768 35.1863 63.7587C35.7893 64.1406 36.2114 64.6431 36.4928 65.2662H36.5531V59.5376H39.5682V74.4522H36.5933V72.5426H36.533C36.2516 73.1657 35.8094 73.6682 35.2064 74.0502C34.6034 74.4321 33.8798 74.6331 33.0959 74.6331ZM34.121 65.6079C33.3572 65.6079 32.7742 65.9095 32.332 66.4924C31.8898 67.0753 31.6687 67.8793 31.6687 68.9044C31.6687 69.9296 31.8898 70.7336 32.332 71.3165C32.7742 71.8994 33.3572 72.2009 34.121 72.2009C34.8647 72.2009 35.4677 71.8994 35.9099 71.3165C36.3521 70.7336 36.5732 69.9296 36.5732 68.9044C36.5732 67.8994 36.3521 67.0954 35.9099 66.4924C35.4677 65.9095 34.8647 65.6079 34.121 65.6079Z"
          fill="white"
        />
        <path
          d="M48.9149 71.0553H51.6888C51.5279 72.1408 50.9852 73.0252 50.0606 73.6885C49.136 74.3518 47.9903 74.6935 46.6435 74.6935C44.935 74.6935 43.6083 74.191 42.6435 73.1659C41.6787 72.1408 41.1963 70.7538 41.1963 68.9649C41.1963 67.196 41.6787 65.789 42.6435 64.7237C43.6083 63.6584 44.9149 63.1357 46.543 63.1357C48.1511 63.1357 49.4174 63.6383 50.3822 64.6433C51.3269 65.6483 51.8094 66.995 51.8094 68.6835V69.6081H44.1712V69.789C44.1712 70.5729 44.4124 71.2161 44.8747 71.7187C45.337 72.2212 45.9601 72.4624 46.7239 72.4624C47.2666 72.4624 47.7491 72.3418 48.1511 72.0805C48.5129 71.8393 48.7742 71.4976 48.9149 71.0553ZM46.5631 65.3669C45.8998 65.3669 45.3571 65.588 44.935 66.0302C44.4928 66.4724 44.2516 67.0553 44.1913 67.7388H48.8948C48.8546 67.0352 48.6335 66.4523 48.2114 66.0101C47.7692 65.588 47.2264 65.3669 46.5631 65.3669Z"
          fill="white"
        />
        <path
          d="M53.1554 66.6332C53.1554 65.588 53.5775 64.7237 54.4218 64.1006C55.266 63.4573 56.4117 63.1357 57.8187 63.1357C59.2057 63.1357 60.3112 63.4573 61.1554 64.1006C61.9997 64.7438 62.4218 65.6081 62.4419 66.6935H59.668C59.6278 66.2513 59.4469 65.8895 59.1052 65.6483C58.7635 65.387 58.3213 65.2664 57.7584 65.2664C57.2358 65.2664 56.8137 65.3669 56.5122 65.588C56.2107 65.8091 56.0499 66.0905 56.0499 66.4523C56.0499 66.995 56.5323 67.3769 57.4971 67.5981L59.6077 68.0604C60.7132 68.3016 61.5172 68.6634 61.9997 69.1458C62.4821 69.6081 62.7233 70.2714 62.7233 71.0955C62.7233 72.181 62.261 73.0654 61.3564 73.7287C60.4519 74.392 59.266 74.7136 57.7986 74.7136C56.3313 74.7136 55.1655 74.392 54.3012 73.7488C53.4167 73.1056 52.9544 72.2212 52.874 71.1357H55.8288C55.9092 71.5981 56.1102 71.9599 56.472 72.2212C56.8338 72.4825 57.2961 72.6031 57.8991 72.6031C58.462 72.6031 58.9243 72.5026 59.2459 72.2815C59.5675 72.0805 59.7283 71.779 59.7283 71.4171C59.7283 71.1357 59.6278 70.9146 59.4268 70.7337C59.2258 70.5729 58.864 70.4121 58.3816 70.3116L56.3313 69.8493C54.2007 69.3468 53.1554 68.2815 53.1554 66.6332Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9899 18.1104C13.6181 18.1104 14.9447 19.437 14.9447 21.0651C14.9447 22.6933 13.6181 24.0199 11.9899 24.0199C10.3618 24.0199 9.03516 22.6933 9.03516 21.0651C9.03516 19.437 10.3618 18.1104 11.9899 18.1104Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M54.1005 18.1104C55.7286 18.1104 57.0553 19.437 57.0553 21.0651C57.0553 22.6933 55.7286 24.0199 54.1005 24.0199C52.4724 24.0199 51.1457 22.6933 51.1457 21.0651C51.1256 19.437 52.4523 18.1104 54.1005 18.1104Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M44.955 0C41.0756 0 37.9399 3.13568 37.9399 7.01508C37.9399 8.94472 38.7239 10.6935 39.9902 11.9799C41.5781 13.5678 42.362 15.4975 42.362 17.7286V24.201C42.362 25.8894 40.352 26.7337 39.146 25.608L26.2816 12.7437C24.6736 11.1759 23.8897 9.24623 23.8696 7.01508C23.8696 3.13568 20.7339 0 16.8545 0C12.9751 0 9.81934 3.13568 9.81934 7.01508C9.81934 10.8945 12.955 14.0302 16.8344 14.0302C19.0656 14.0302 20.9952 14.8342 22.5832 16.4221L24.9148 18.7538C26.1811 20.0201 26.1811 22.0905 24.9148 23.3568L22.5832 25.6884C20.9952 27.2764 19.0857 28.0603 16.8344 28.0804C12.955 28.0804 9.81934 31.2362 9.81934 35.0955C9.81934 38.9749 12.955 42.1105 16.8344 42.1105C20.7138 42.1105 23.8495 38.9749 23.8495 35.0955C23.8495 32.8643 24.6535 30.9347 26.2414 29.3467L28.5731 27.0151C29.8394 25.7487 31.9098 25.7487 33.1761 27.0151L35.5078 29.3467C37.0957 30.9347 37.8796 32.8442 37.8997 35.0955C37.8997 38.9749 41.0555 42.1105 44.9148 42.1105C48.7942 42.1105 51.9299 38.9749 51.9299 35.0955C51.9299 33.1658 51.146 31.4171 49.8796 30.1306C48.3118 28.5427 47.5078 26.6131 47.5078 24.3819V17.7286C47.5078 15.4975 48.3118 13.5678 49.8796 11.9799C51.146 10.7136 51.9299 8.96482 51.9299 7.01508C51.9701 3.13568 48.8344 0 44.955 0Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
