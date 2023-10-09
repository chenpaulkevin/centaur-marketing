import React from "react";
import Image from "next/image";

function hero() {
  return (
    <div className="flex-wrap lg:flex mb-16 lg:mb-12 lg:mt-24 md:mt-16 mt-10 mx-10 md:mx-12 lg:mx-36 2xl:mx-80">
      <div className="flex mb-12 lg:w-2/6 justify-center px-8 lg:px-0 h-full lg:order-last">
        <Image
          className="h-auto w-auto"
          priority
          src="/Illustration.svg"
          width={500}
          height={500}
          alt="Landing Page Illustration"
        />
      </div>
      <div className=" h-full self-center lg:w-4/6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl text-neutral font-semibold leading-tight mb-6 lg:mb-8">
          Lessons and insights
          <span className="text-primary"> from 8 years</span>
        </h1>
        <h3 className="text-grey leading-6 tracking-wide mb-8">
          Where to grow your business as a photographer: site or social media?
        </h3>
        <button className="py-4 px-8 w-full md:w-auto rounded text-white font-semibold bg-primary">
          Register
        </button>
      </div>
    </div>
  );
}

export default hero;
