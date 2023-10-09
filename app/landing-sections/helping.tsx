import React from "react";
import Image from "next/image";

function helping() {
  return (
    <div className="flex-wrap lg:flex mx-10 md:mx-12 lg:mx-36 2xl:mx-80 pt-12 pb-10">
      <div className="self-center h-full w-full text-center xl:text-left xl:w-3/6">
        <h1 className="text-4xl text-neutral font-semibold leading-tight mb-4 ">
          Helping a local{" "}
          <p className="text-primary"> business reinvent itself </p>
        </h1>
        <h3 className="text-neutral leading-6 mb-6">
          We reached here with our hard work and dedication
        </h3>
      </div>
      <div className="flex-wrap xl:flex-nowrap flex w-full xl:w-3/6">
        <div className="justify-center w-full xl:py-6">
          <div className="flex place-content-center xl:place-content-start gap-4 pb-8  w-full">
            <div>
              <Image
                className="h-auto w-auto"
                src="/Icon-Members.png"
                alt="Member Icon"
                width={200}
                height={100}
              />
            </div>
            <div>
              <div className="text-neutral text-2xl font-bold">2,245,341</div>
              <div className="text-grey ">Members</div>
            </div>
          </div>
          <div className="flex place-content-center xl:place-content-start gap-4 pb-8">
            <div>
              <Image
                className="h-auto w-auto"
                src="/Icon-Event.png"
                alt="Clubs Icon"
                width={200}
                height={100}
              />
            </div>
            <div>
              <div className="text-neutral text-2xl font-bold">828,867</div>
              <div className="text-grey ">Event Bookings</div>
            </div>
          </div>
        </div>
        <div className="justify-center  w-full xl:py-6">
          <div className="flex place-content-center xl:place-content-start gap-4 pb-8">
            <div>
              <Image
                className="h-auto w-auto"
                src="/Icon-Clubs.png"
                alt="Member Icon"
                width={200}
                height={100}
              />
            </div>
            <div>
              <div className="text-neutral text-2xl font-bold">46,328</div>
              <div className="text-grey">
                Clubs
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;
                &#160;
              </div>
            </div>
          </div>
          <div className="flex place-content-center xl:place-content-start gap-4 pb-8">
            <div>
              <Image
                className="h-auto w-auto"
                src="/Icon-Payment.png"
                alt="Clubs Icon"
                width={200}
                height={100}
              />
            </div>
            <div>
              <div className="text-neutral text-2xl font-bold">1,926,436</div>
              <div className="text-grey ">Payments</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default helping;
