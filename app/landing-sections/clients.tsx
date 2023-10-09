import React from "react";
import Image from "next/image";

function clients() {
  return (
    <div className="bg-white px-10 md:px-12 lg:px-36 justify-center py-10 2xl:px-80">
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-neutral text-center mb-4">
          Our Clients
        </h1>
        <h3 className="text-grey text-center w-full">
          We have been working with some Fortune 500+ clients
        </h3>
      </div>
      <div className="flex justify-between w-full mb-8">
        <Image
          className="h-auto w-auto hidden md:block"
          src="/Client.svg"
          alt="Client 1 Logo"
          width={50}
          height={50}
        ></Image>
        <Image
          className="h-auto w-auto"
          src="/Client-1.svg"
          alt="Client 1 Logo"
          width={50}
          height={50}
        ></Image>
        <Image
          className="h-auto w-auto"
          src="/Client-2.svg"
          alt="Client 1 Logo"
          width={50}
          height={50}
        ></Image>
        <Image
          className="h-auto w-auto"
          src="/Client-3.svg"
          alt="Client 1 Logo"
          width={50}
          height={50}
        ></Image>
        <Image
          className="h-auto w-auto"
          src="/Client-4.svg"
          alt="Client 1 Logo"
          width={50}
          height={50}
        ></Image>
        <Image
          className="h-auto w-auto"
          src="/Client-5.svg"
          alt="Client 1 Logo"
          width={50}
          height={50}
        ></Image>
        <Image
          className="h-auto w-auto hidden md:block"
          src="/Client-6.svg"
          alt="Client 1 Logo"
          width={50}
          height={50}
        ></Image>
      </div>
      <h1 className="text-4xl md:text-4xl font-semibold text-neutral text-center mt-4 mb-4">
        Manage your entire community <br /> in a single system
      </h1>
      <h3 className="text-grey text-center w-full">
        Who is Nextcent suitable for?
      </h3>

      <div className="justify-between xl:flex py-3">
        <div className="w-full xl:w-[350px] my-10 xl:my-0 gap-3 bg-white shadow-md rounded-lg justify-center align-center items-center px-8 py-8 text-center flex flex-col">
          <Image
            className="flex h-auto w-auto"
            src="/Membership.svg"
            alt="Client 1 Logo"
            width={80}
            height={80}
          ></Image>
          <h1 className="text-4xl font-bold text-neutral">
            Membership Organisations
          </h1>
          <h3 className="text-grey">
            Our membership management software provides full automation of
            membership renewals and payments
          </h3>
        </div>
        <div className="w-full xl:w-[350px] my-10 xl:my-0 gap-3 bg-white shadow-md rounded-lg justify-center align-center items-center px-8 py-8 text-center flex flex-col">
          <Image
            className="flex h-auto w-auto"
            src="/National.svg"
            alt="Client 1 Logo"
            width={80}
            height={80}
          ></Image>
          <h1 className="text-4xl font-bold text-neutral">
            National Associations
          </h1>
          <h3 className="text-grey">
            Our membership management software provides full automation of
            membership renewals and payments
          </h3>
        </div>
        <div className="w-full xl:w-[350px] mt-10 xl:my-0 gap-3 bg-white shadow-md rounded-lg justify-center align-center items-center px-8 py-8 text-center flex flex-col">
          <Image
            className="flex h-auto w-auto"
            src="/Clubs.svg"
            alt="Client 1 Logo"
            width={80}
            height={80}
          ></Image>
          <h1 className="text-4xl font-bold text-neutral">Clubs And Groups</h1>
          <h3 className="text-grey">
            Our membership management software provides full automation of
            membership renewals and payments
          </h3>
        </div>
      </div>
    </div>
  );
}

export default clients;
