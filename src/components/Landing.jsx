import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import ochi from "../assets/ochiimage.jpg";

const Landing = () => {
  motion
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.8"
      className="w-full  bg-zinc-900  border-t-2">
      <div className="textstructure mt-35 px-20 ">
        {["We Create", "Eye opening", "presentation"].map((title, index) => {
          return (
            <div key={index} className="masker">
            
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vh] h-[7vw] rounded-xl relative top-[1vw] overflow-hidden "
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={ochi}
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase leading-[8vw] scale-y-[1.3] tracking-tighter font-semibold text-[8vw]">
                  {title}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 py-8 px-4 md:px-20 flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
        <div className="flex flex-col md:flex-row md:gap-16 gap-2 flex-1">
          <p className="text-base md:text-md font-light tracking-tight m-5 leading-none text-zinc-200">
            For public and private companies
          </p>
          <p className="text-base md:text-md font-light tracking-tight m-5  leading-none text-zinc-200">
            From the first pitch to IPO
          </p>
        </div>
        <div className="flex items-center gap-3 md:gap-5 mt-4 md:mt-0 m-5 ">
          <button className="px-5 py-2 border-2 border-zinc-500 font-light text-sm md:text-base capitalize rounded-full hover:bg-zinc-200 hover:text-black transition-colors duration-300">
            Start the project
          </button>
          <button className="w-10 h-10 flex items-center justify-center border-2 border-zinc-500 rounded-full hover:bg-zinc-200 hover:text-black transition-colors duration-200">
            <span className="arrow rotate-[45deg] hover:rotate-0 duration-100">
              <FaArrowUpLong />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
