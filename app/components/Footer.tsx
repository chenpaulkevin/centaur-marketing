"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className="bg-secondary px-10 md:px-12 lg:px-36 pt-20 pb-10 text-white">
      <div className="xl:flex xl:justify-between">
        <div className="mb-6 xl:mb-0">
          <Link href="/" className="flex items-center mb-6 lg:mb-10">
            <Image
              className="h-auto w-auto"
              src="/Logo-White.svg"
              height={200}
              width={200}
              alt="Logo Image"
            />
          </Link>
          <div className="mb-2">Copyright © 2020 Nexcent ltd.</div>
          <div className="mb-6 lg:mb-10">All rights reserved</div>
          <div className="flex w-full xl:w-auto justify-left gap-4 xl:gap-3 mb-6 xl:mb-0">
            <Image
              className="h-auto w-auto"
              src="/Icons-Instagram.svg"
              alt="Instagram"
              width={100}
              height={100}
            ></Image>
            <Image
              className="h-auto w-auto"
              src="/Icons-Dribbble.svg"
              alt="Dribbble"
              width={100}
              height={100}
            ></Image>
            <Image
              className="h-auto w-auto"
              src="/Icons-Twitter.svg"
              alt="Twitter"
              width={100}
              height={100}
            ></Image>
            <Image
              className="h-auto w-auto"
              src="/Icons-Youtube.svg"
              alt="Youtube"
              width={100}
              height={100}
            ></Image>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-4 xl:gap-12 xl:grid-cols-4">
          <div className="col-span-1">
            <h2 className="mb-6 text-xl font-semibold">Company</h2>
            <ul className="text-white">
              <li className="mb-3">
                <Link href="/">About Us</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Blog</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Contact Us</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Pricing</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Testimonials</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="mb-6 text-xl font-semibold">Support</h2>
            <ul className="text-white">
              <li className="mb-3">
                <Link href="/">Help Center</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Terms of Service</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Legal</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Privacy Policy</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Status</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1 xl:col-span-2">
            <h2 className="mb-6 text-xl font-semibold">Stay Up To Date</h2>
            <div className="relative w-full">
              <input
                className="px-4 py-3 rounded-lg bg-subscribe w-full"
                placeholder="Your Email Address"
                type="email"
              />
              <div
                className="absolute inset-y-0 right-4 
                    flex items-center   
                    cursor-pointer"
              >
                <Icon icon="tabler:send" width="25" className="text-white " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
