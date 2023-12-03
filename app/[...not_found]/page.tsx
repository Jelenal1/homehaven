import Link from "next/link";

function catchAllNotFound() {
  return (
    <div className="flex flex-col items-center mt-40 text-xl">
      <h1>Page Not Found</h1>
      <Link href={"/"} className="underline hover:text-[#5b220596]">
        Go Home
      </Link>
    </div>
  );
}

export default catchAllNotFound;
