import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../style.css";

const ButtonUI = () => {
  const wrapperRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);
  const dotRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.set(topTextRef.current, { y: 0 });
    gsap.set(bottomTextRef.current, { y: 0 });
    gsap.set(wrapperRef.current, { backgroundColor: "#161616", color: "#fff" });
    gsap.set(dotRef.current, { scale: 1 });
    gsap.set(arrowRef.current, { opacity: 0, x: -18 });
  }, []);

  const handleMouseEnter = () => {
    gsap.to(topTextRef.current, {
      y: "-100%",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(bottomTextRef.current, {
      y: "-100%",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(wrapperRef.current, {
      backgroundColor: "#fff",
      color: "#161616",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(dotRef.current, {
      scale: 1.5,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(arrowRef.current, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.1,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(topTextRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(bottomTextRef.current, {
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(wrapperRef.current, {
      backgroundColor: "#161616",
      color: "#fff",
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(dotRef.current, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(arrowRef.current, {
      opacity: 0,
      x: -18,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  return (
    <a
      href="mailto:hello@ochi.design"
      className="inline-flex items-center gap-7"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className="inline-block relative h-10 w-[220px] overflow-hidden font-founders font-semibold text-2xl bg-[#161616] text-white rounded-[30px] leading-10 text-center cursor-pointer"
        ref={wrapperRef}
      >
        <span
          className="absolute left-0 top-0 w-full block"
          ref={topTextRef}
        >
          HELLO@OCHI
        </span>
        <span
          className="absolute left-0 top-full w-full block"
          ref={bottomTextRef}
        >
          HELLO@OCHI
        </span>
      </span>
      {/* Dot and Arrow further outside the button */}
      <span
        ref={dotRef}
        className="relative w-[22px] h-[22px] bg-current rounded-full flex items-center justify-center z-[2] shadow-[0_0_0_4px_#fff,_0_0_0_8px_transparent]"
      >
        <span
          ref={arrowRef}
          className="text-lg font-bold opacity-0 -translate-x-[18px] pointer-events-none select-none inline-block"
          style={{
            color: wrapperRef.current && wrapperRef.current.style.backgroundColor === "#fff" ? "#161616" : "#fff",
          }}
        >
          &#8594;
        </span>
      </span>
    </a>
  );
};

export default ButtonUI;
