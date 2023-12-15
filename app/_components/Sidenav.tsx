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
          ? "fixed top-0 right-0 z-10 h-screen w-screen bg-slate-100 bg-opacity-60 items-center transition-all ease-in"
          : "fixed top-0 right-0 z-10 h-screen w-screen bg-slate-100 bg-opacity-60 opacity-0 invisible items-center transition-all ease-out duration-200"
      }
    >
      <div className="flex flex-col items-center">
        <button className="mt-32 mb-1" onClick={() => setOpen(false)}>
          <MdClose className="text-[#5B2205] text-3xl" />
        </button>
        <Link
          href={"/apartments"}
          onClick={() => setOpen(false)}
          className="my-2 text-[#5B2205] text-xl focus-within:text-[#5b220596]"
        >
          Apartments
        </Link>
        <Link
          href={"/about"}
          onClick={() => setOpen(false)}
          className="my-2 text-[#5B2205] text-xl focus-within:text-[#5b220596]"
        >
          About Us
        </Link>
        <Link
          href={"/contact"}
          onClick={() => setOpen(false)}
          className="my-2 text-[#5B2205] text-xl focus-within:text-[#5b220596]"
        >
          Contact
        </Link>
        <Link
          href={"/login"}
          onClick={() => setOpen(false)}
          className="my-2 text-[#5B2205] text-xl focus-within:text-[#5b220596]"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
