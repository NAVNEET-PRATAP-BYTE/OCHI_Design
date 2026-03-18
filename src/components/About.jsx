import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-speed="0.2"
      className="w-full  py-20 bg-[#CDEA68] rounded-t-4xl text-black text-[4vw] p-20 leading-[3.5vw] tracking-tight -mt-[12vh]"
    >
      <h1 className="mb-25">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[1px] font-light tracking-normal m-3 p-5 flex flex-col md:flex-row gap-8 md:gap-12 text-base md:text-[1.2vw]">
        <p className="md:w-1/2 w-full font-semibold mb-4 md:mb-0">
          What you can expect:
        </p>
        <p className="md:w-1/2 w-full">
          At Ochi, we collaborate with innovative companies and startups shaping the future. Whether it's advancing the net-zero economy, revolutionizing crypto treasury management, building next-gen photonic chips, or launching Michelin-starred restaurants, we help you communicate your vision. Our unique blend of strategy and design—fueled by creativity and a dash of coffee—ensures your message is clear, persuasive, and memorable, no matter your audience or platform.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-5 border-t-[1px] pt-10 my-8 border-[#191d0c]">
        <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-start">
          <h1 className="text-3xl md:text-7xl font-bold mb-6">Our Approach:</h1>
          <button className="flex items-center gap-4 md:gap-10 uppercase px-6 md:px-10 py-4 md:py-6 bg-zinc-900 mt-6 md:mt-10 text-base md:text-2xl rounded-full text-white hover:bg-white hover:text-black transition-colors duration-800">
            Read More
            <div className="w-3 h-3 md:w-4 md:h-4 bg-[#CDEA68] mt-1 rounded-full"></div>
          </button>
        </div>
        <div className="md:w-1/2 w-50 h-45 md:h-[70vh] bg-[#a4bb53] rounded-3xl"></div>
      </div>
    </div>
  );
};

export default About;
