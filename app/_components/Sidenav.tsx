"use client";
import Link from "next/link";
import { MdClose } from "react-icons/md";

export default function Sidenav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <div
      className={
        open
          ? "fixed right-0 top-0 z-10 h-screen w-screen items-center bg-slate-100 bg-opacity-60 transition-all ease-in"
          : "invisible fixed right-0 top-0 z-10 h-screen w-screen items-center bg-slate-100 bg-opacity-60 opacity-0 transition-all duration-200 ease-out"
      }
    >
      <div className="flex flex-col items-center">
        <button className="mb-1 mt-32" onClick={() => setOpen(false)}>
          <MdClose className="text-3xl text-[#5B2205]" />
        </button>
        <Link
          href={"/"}
          onClick={() => setOpen(false)}
          className="my-2 text-xl text-[#5B2205] focus-within:text-[#5b220596]"
        >
          Apartments
        </Link>
        <Link
          href={"/about"}
          onClick={() => setOpen(false)}
          className="my-2 text-xl text-[#5B2205] focus-within:text-[#5b220596]"
        >
          About Us
        </Link>
        <Link
          href={"/contact"}
          onClick={() => setOpen(false)}
          className="my-2 text-xl text-[#5B2205] focus-within:text-[#5b220596]"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
