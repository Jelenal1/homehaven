"use client";

import Image from "next/image";
import Link from "next/link";
import Sidenav from "./Sidenav";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-9 flex items-center border-b-2 border-[#5B2205] bg-[#EFE6D4]">
      <Link href="/">
        <Image
          src="/homehavenlogo.png"
          alt="HomeHaven Logo"
          width={120}
          height={1}
          loading="eager"
          className="aspect-square min-w-fit"
        ></Image>
      </Link>
      <div className="hidden md:visible md:flex">
        <Link
          href={"/"}
          className="ml-5 mt-1 text-xl text-[#5B2205] hover:mt-0 hover:text-[#5b220596]"
        >
          Apartments
        </Link>
        <Link
          href={"/about"}
          className="ml-5 mt-1 text-xl text-[#5B2205] hover:mt-0 hover:text-[#5b220596]"
        >
          About Us
        </Link>
        <Link
          href={"/contact"}
          className="ml-5 mt-1 text-xl text-[#5B2205] hover:mt-0 hover:text-[#5b220596]"
        >
          Contact
        </Link>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="ml-auto mr-2 mt-2 text-2xl text-[#5B2205] md:hidden"
      >
        <FaBars />
      </button>
      <Sidenav open={open} setOpen={setOpen} />
    </div>
  );
}
