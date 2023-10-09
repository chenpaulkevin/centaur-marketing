import React from "react";

function CTA() {
  return (
    <div className="flex mx-10 md:mx-12 lg:mx-36 2xl:mx-80 py-10">
      <div className="flex-wrap flex  w-full justify-center">
        <div className="w-full xl:w-3/4 mb-7">
          <h1 className="text-secondary text-5xl md:text-7xl text-center font-semibold">
            Pellentesque suscipit fringilla libero eu.
          </h1>
        </div>
        <div className="w-full flex justify-center">
          <button className="py-4 px-8 w-full md:w-auto rounded text-white font-semibold bg-primary">
            Get a Demo &#8212;&gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CTA;
