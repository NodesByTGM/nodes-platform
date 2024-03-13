import React from "react";

export default function PageLoader() {
  return (
    <div className="min-h-[100vh] min-w-[100vw] size-full flex items-center justify-center">
      <img
        src="/logo-black.svg"
        alt=""
        className="animate-pulse size-[100px]"
      />
    </div>
  );
}
