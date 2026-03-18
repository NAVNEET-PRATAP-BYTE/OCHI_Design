import { motion } from "motion/react";
import React from "react";

const Marquee = () => {
  motion
  return (
    <div  data-scroll data-scroll-speed="-0.1"  className="w-full py-20 rounded-t-4xl pb-25 bg-[#004d43] mt-40 -mb-40">
      <div className="text uppercase border-t-2 border-b-2 border-zinc-800 flex text-[15vw] font-bold p-10  leading-none whitespace-nowrap overflow-hidden ">
        <motion.h1
          initial={{ X: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className="p-10 scale-y-150"
        >
          We are ochi
        </motion.h1>

        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className="p-10 scale-y-150"
        >
          We are ochi
        </motion.h1>
       
      </div>
    </div>
  );
};

export default Marquee;
