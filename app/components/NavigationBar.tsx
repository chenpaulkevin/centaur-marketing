"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const menuVariants = {
  initial: {
    y: "-100vh",
  },
  animate: {
    y: "0vh",
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const headerVariants = {
  initial: {
    opacity: 0,
    y: "-10px",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
const linkVariants = {
  initial: {
    opacity: 0,
    y: "-10px",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
    },
  },
};
const buttonVariants = {
  initial: {
    opacity: 0,
    y: "-10px",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
    },
  },
};

function NavigationBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <>
      <nav className="top-0 left-0 bg-silver fixed z-50 w-screen px-6 lg:px-24 py-6 flex items-center justify-between">
        <Link href="/">
          <div>
            <Image
              className="h-auto w-auto"
              src="/Logo.svg"
              height={200}
              width={200}
              alt="Logo Image"
            />
          </div>
        </Link>
        <div>
          <ul className="justify-between gap-12 text-black hidden xl:flex">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>Service</li>
            </Link>
            <Link href="/">
              <li>Feature</li>
            </Link>
            <Link href="/">
              <li>Product</li>
            </Link>
            <Link href="/">
              <li>Testimonial</li>
            </Link>
            <Link href="/">
              <li>FAQ</li>
            </Link>
          </ul>
        </div>
        <div className="justify-between gap-4 hidden xl:flex">
          <button className="text-primary">Login</button>
          <button className="text-white py-3 px-6 rounded bg-primary">
            Sign Up
          </button>
        </div>
        <div className="xl:hidden cursor-pointer" onClick={toggleMenu}>
          <Icon
            icon="ic:round-menu"
            width="40"
            className="text-primary stroke-1 stroke-primary"
          />
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-secondary z-50 px-6 lg:px-24 py-6 xl:hidden"
          >
            <div className="flex h-full flex-col z-50">
              <motion.div
                className="flex w-full justify-between"
                variants={headerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Link href="/" onClick={toggleMenu}>
                  <Image
                    className="h-auto w-auto"
                    src="/Logo-White.svg"
                    height={100}
                    width={100}
                    alt="Logo Image"
                  />
                </Link>
                <button className="cursor-pointer text-md" onClick={toggleMenu}>
                  <Icon
                    icon="ic:round-close"
                    width="40"
                    className="text-white stroke-1 stroke-white"
                  />
                </button>
              </motion.div>
              <motion.div
                variants={linkVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4 sm:gap-6 md:gap-8"
              >
                <div onClick={toggleMenu}>
                  <Link
                    href="/"
                    className="font-extrabold text-white subpixel-antialiased text-4xl sm:text-5xl md:text-6xl"
                  >
                    Home
                  </Link>
                </div>
                <div onClick={toggleMenu}>
                  <Link
                    href="/"
                    className="font-extrabold text-white subpixel-antialiased text-4xl sm:text-5xl md:text-6xl"
                  >
                    Service
                  </Link>
                </div>
                <div onClick={toggleMenu}>
                  <Link
                    href="/"
                    className="font-extrabold text-white subpixel-antialiased text-4xl sm:text-5xl md:text-6xl"
                  >
                    Feature
                  </Link>
                </div>
                <div onClick={toggleMenu}>
                  <Link
                    href="/"
                    className="font-extrabold text-white subpixel-antialiased text-4xl sm:text-5xl md:text-6xl"
                  >
                    Product
                  </Link>
                </div>
                <div onClick={toggleMenu}>
                  <Link
                    href="/"
                    className="font-extrabold text-white subpixel-antialiased text-4xl sm:text-5xl md:text-6xl"
                  >
                    Testimonial
                  </Link>
                </div>
                <div onClick={toggleMenu}>
                  <Link
                    href="/"
                    className="font-extrabold text-white subpixel-antialiased text-4xl sm:text-5xl md:text-6xl"
                  >
                    FAQ
                  </Link>
                </div>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                exit="initial"
                className="flex-wrap w-full flex justify-center gap-8 pb-4"
              >
                <button
                  className="cursor-pointer text-md w-3/4 bg-white flex justify-center text-primary py-4 px-3 rounded-md"
                  onClick={toggleMenu}
                >
                  <span>Register</span>
                </button>
                <button
                  className="cursor-pointer text-md w-3/4 bg-primary text-white flex justify-center py-4 px-3 rounded-md"
                  onClick={toggleMenu}
                >
                  <span>Sign Up</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavigationBar;
