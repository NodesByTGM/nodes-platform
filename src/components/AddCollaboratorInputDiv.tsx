import React from "react";

export default function AddCollaboratorInputDiv({ children }) {
  return (
    <div className="w-full flex flex-col gap-[10px] p-4 rounded-[5px] border border-[#D6D6D6]">
      {children}
    </div>
  );
}
