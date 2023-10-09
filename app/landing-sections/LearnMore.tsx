import React from "react";
import Image from "next/image";

function LearnMore() {
  return (
    <div className="bg-white pt-14 pb-7">
      <div className="flex-wrap lg:flex mb-16 lg:mb-12 mx-10 md:mx-12 lg:mx-36 2xl:mx-80">
        <div className="flex mb-12 w-full xl:w-3/6 align-center justify-center 2xl:justify-start px-8 lg:px-0 h-full">
          <Image
            className="h-auto w-auto"
            src="/rafiki.svg"
            alt="Land Page Image"
            width={600}
            height={600}
          ></Image>
        </div>
        <div className="h-full self-center xl:w-3/6 align-center">
          <h1 className="text-4xl text-neutral font-semibold leading-tight mb-4 ">
            The unseen of spending three years at Pixelgrade
          </h1>
          <h3 className="text-grey leading-6 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </h3>
          <button className="py-4 px-8 w-full md:w-auto rounded text-white font-semibold bg-primary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
