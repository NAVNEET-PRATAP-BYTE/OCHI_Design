import React, { useEffect, useState } from "react";

const Eyes = () => {
const[rotate,setRotate] = useState(0);


 useEffect(( )=>{
  window.addEventListener("mousemove",(e)=>{
    let mousex= e.clientX;
    let mousey= e.clientY;

    let deltax=mousex-window.innerWidth/2;
    let deltay=mousey-window.innerHeight/2;

    var angle = Math.atan2(deltay,deltax)*(180/Math.PI)
    setRotate(angle-180);

  })
 })
 
  return (
   
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className=" relative w-2/3 h-2/3 rounded-full  bg-zinc-900">
              <div style={{transform: `rotate(${rotate}deg)`,}} className="line absolute w-full h-6 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                <div className="w-6 h-6 m-2 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
       
  );
};

export default Eyes;
