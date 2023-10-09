"use client";
import React from "react";
import Image from "next/image";

function Customers() {
  return (
    <div className="py-14 xl:py-6">
      <div className="flex-wrap lg:flex mx-10 md:mx-12 lg:mx-36 2xl:mx-80">
        <div className="flex mb-12 xl:mb-0 w-full xl:w-2/6 justify-center 2xl:justify-start h-full">
          <Image
            className="h-auto w-auto"
            src="/Tesla.png"
            alt="Land Page Image"
            width={400}
            height={400}
          ></Image>
        </div>
        <div className="h-full self-center xl:w-4/6 lg:px-12">
          <h3 className="text-grey font-medium text-justify xl:text-left leading-snug tracking-tight mb-4">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </h3>
          <h1 className="text-2xl text-center xl:text-left text-primary font-semibold mb-2">
            Tim Smith
          </h1>
          <h3 className="text-md text-grey mb-6 text-center xl:text-left ">
            British Dragon Boat Racing Association
          </h3>
          <div className="flex-wrap xl:flex justify-between w-full">
            <div className="flex w-full xl:w-auto justify-center gap-4 xl:gap-3 mb-6 xl:mb-0">
              <div className="bg-T5 pb-1 pr-1">
                <Image
                  className="h-auto w-auto"
                  src="/Client-Purple.svg"
                  alt="Client 1 Logo"
                  width={50}
                  height={50}
                ></Image>
              </div>

              <Image
                className="h-auto w-auto hidden md:block"
                src="/Client-1.svg"
                alt="Client 2 Logo"
                width={50}
                height={50}
              ></Image>
              <Image
                className="h-auto w-auto hidden md:block"
                src="/Client-2.svg"
                alt="Client 3 Logo"
                width={50}
                height={50}
              ></Image>
              <Image
                className="h-auto w-auto hidden md:block"
                src="/Client-3.svg"
                alt="Client 4 Logo"
                width={50}
                height={50}
              ></Image>
              <Image
                className="h-auto w-auto"
                src="/Client-4.svg"
                alt="Client 5 Logo"
                width={50}
                height={50}
              ></Image>
              <Image
                className="h-auto w-auto"
                src="/Client-5.svg"
                alt="Client 6 Logo"
                width={50}
                height={50}
              ></Image>
            </div>

            <button className="text-2xl w-full xl:w-auto text-primary font-semibold">
              Meet all customers{" "}
              <span className="text-xl ml-2">&#8212;&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
