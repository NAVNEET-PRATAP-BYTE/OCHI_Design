import React from "react";
import Eyes from "./Eyes";
import EyeBack from "../assets/eyeback.jpg";

const Active = () => {
  return (
    <div data-scroll data-scroll-speed="-0.2" className="eyes w-full h-screen overflow-hidden">
      <div
        className="relative w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${EyeBack})` }}
      >
        <div
          data-scroll
          data-scroll-speed="-0.1"
          className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          <Eyes />
          <Eyes />
        </div>
      </div>
    </div>
  );
};

export default Active;
