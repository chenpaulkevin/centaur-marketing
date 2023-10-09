import React from "react";
import Image from "next/image";

function HowToDesign() {
  return (
    <div className="bg-white py-14">
      <div className="flex-wrap lg:flex mb-16 lg:mb-12 mx-10 md:mx-12 lg:mx-36 2xl:mx-80">
        <div className="flex mb-12 w-full xl:w-3/6 justify-center 2xl:justify-start px-8 lg:px-0 h-full">
          <Image
            className="h-auto w-auto"
            src="/pana.svg"
            alt="Land Page Image"
            width={500}
            height={100}
          ></Image>
        </div>
        <div className="h-full self-center xl:w-3/6">
          <h1 className="text-4xl text-neutral font-semibold leading-tight mb-4 ">
            How to design your site footer like we did
          </h1>
          <h3 className="text-grey tracking-tight mb-6">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </h3>
          <button className="py-4 px-8 w-full md:w-auto rounded text-white font-semibold bg-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default HowToDesign;
