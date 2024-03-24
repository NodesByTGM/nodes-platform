import React from "react";
import { Button } from "../../components";

export default function GridTools() {
  return (
    <div className="min-h-[100vh] main-plain-container">
      <div className="flex flex-col gap-10 pb-[192px]">
        <div className="max-w-[720px] mx-auto flex flex-col items-center justify-center gap-6 text-[#000000]">
          <h1 className=" font-medium text-[32px]">Grid Tools</h1>

          <span className="font-normal text-[20px] text-center">
            We believe in the power of every individual's creative spark.{" "}
            <br></br>Join our thriving community of actors, artists, designers,
            writers, and visionaries. <br></br>Your journey to success starts
            here.
          </span>
         <a href="/grid-tools" className="" target='_blank'>
         <Button className="max-w-max">Check it out</Button>
         </a>
        </div>

        <div className="h-[480px] rounded-md">
          <img
            src="/img/GridToolsImg.png"
            alt="Grid tools image"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
