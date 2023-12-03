"use client";

import Image from "next/image";
import Link from "next/link";
import Sidenav from "./Sidenav";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex items-center bg-[#EFE6D4] border-b-2 border-[#5B2205] mx-9">
			<Link href="/">
				<Image
					src="/HomeHaven.png"
					alt="HomeHaven Logo"
					width={120}
					height={1}
					loading="eager"
					className="aspect-square min-w-fit"
				></Image>
			</Link>
			<div className="md:visible md:flex hidden">
				<Link
					href={"/"}
					className="ml-20 text-[#5B2205] text-xl hover:text-[#5b220596] mt-1 hover:mt-0"
				>
					Appartments
				</Link>
				<Link
					href={"/"}
					className="ml-5 text-[#5B2205] text-xl hover:text-[#5b220596] mt-1 hover:mt-0"
				>
					About Us
				</Link>
				<Link
					href={"/"}
					className="ml-5 text-[#5B2205] text-xl hover:text-[#5b220596] mt-1 hover:mt-0"
				>
					Contact
				</Link>
				<Link
					href={"/"}
					className="ml-5 text-[#5B2205] text-xl hover:text-[#5b220596] mt-1 hover:mt-0"
				>
					Login
				</Link>
			</div>
			<button
				onClick={() => setOpen(true)}
				className=" ml-auto mr-2 mt-2 text-2xl text-[#5B2205]"
			>
				<FaBars />
			</button>
			<Sidenav open={open} setOpen={setOpen} />
		</div>
	);
}
