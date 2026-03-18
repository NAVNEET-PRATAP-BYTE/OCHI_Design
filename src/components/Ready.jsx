import React from "react";
import Eyes from "./Eyes";

function Ready() {
  return (
    <div data-scroll data-scroll-speed="0.3" className="flex justify-center items-center py-[20vh] w-full bg-[#CDEA68]">
     
        <div className="text-black text-[13vw] uppercase flex items-center justify-center font-bold tracking-tight leading-none text-center relative">
          Ready
          <br /> to start
          <br /> the project?
          <div
            data-scroll
            data-scroll-speed="-0.3"
            className="flex justify-center items-center gap-10   absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <Eyes />
            <Eyes />
          </div>
        </div>
       
      
    </div>
  );
}

export default Ready;
