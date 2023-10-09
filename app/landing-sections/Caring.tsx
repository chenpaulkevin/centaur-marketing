import React from "react";
import Image from "next/image";

function Caring() {
  return (
    <div className="bg-white px-10 md:px-12 lg:px-36 justify-center pt-10 pb-6">
      <h1 className="text-4xl font-semibold text-neutral text-center mb-2">
        Caring is the new marketing
      </h1>
      <div className="w-full justify-center flex mb-6">
        <h3 className="text-neutral text-center w-full 2xl:w-5/12 xl:w-7/12 self-center">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who&apos;s joining the community, read
          about how our community are increasing their membership income and
          lot&apos;s more.​
        </h3>
      </div>

      <div className="justify-center w-full gap-0 xl:gap-4 flex-wrap md:flex">
        <div className="w-full md:w-3/4 xl:w-[368px] flex-col flex items-center bg-white rounded-3xl mb-2 md:mb-0 ">
          <Image
            className="flex h-auto w-auto"
            src="/Creating.png"
            alt="Client 1 Logo"
            width={400}
            height={400}
          ></Image>
          <div className="w-11/12 h-auto lg:min-h-[180px] bg-silver shadow-lg shadow-drop rounded-xl py-6 px-4 -translate-y-20 relative">
            <h1 className="text-xl font-semibold text-center text-grey">
              Creating Streamlined Safeguarding Processes with OneRen
            </h1>
            <button className="text-xl w-full text-primary font-semibold text-center pt-4">
              Read More <span className="text-xl ml-2">&#8212;&gt;</span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-3/4 xl:w-[368px] flex-col flex items-center bg-white rounded-3xl mb-6 md:mb-0 ">
          <Image
            className="flex h-auto w-auto"
            src="/Safeguard.png"
            alt="Client 1 Logo"
            width={400}
            height={400}
          ></Image>
          <div className="w-11/12 h-auto lg:min-h-[180px] bg-silver shadow-lg shadow-drop rounded-xl py-6 px-4 -translate-y-20 relative">
            <h1 className="text-xl font-semibold text-center text-grey">
              What are your safeguarding responsibilities and how can you manage
              them?
            </h1>
            <button className="text-xl w-full text-primary font-semibold text-center pt-4">
              Read More <span className="text-xl ml-2">&#8212;&gt;</span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-3/4 xl:w-[368px] flex-col flex items-center bg-white rounded-3xl mb-6 md:mb-0 ">
          <Image
            className="flex h-auto w-auto"
            src="/Revamping.png"
            alt="Client 1 Logo"
            width={400}
            height={400}
          ></Image>
          <div className="w-11/12 h-auto lg:min-h-[180px] bg-silver shadow-lg shadow-drop rounded-xl py-6 px-6 -translate-y-20 relative">
            <h1 className="text-xl font-semibold text-center text-grey">
              Revamping the Membership Model with Triathlon Australia
            </h1>
            <button className="text-xl w-full text-primary font-semibold text-center pt-4">
              Read More <span className="text-xl ml-2">&#8212;&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caring;
