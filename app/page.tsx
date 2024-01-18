import Image from "next/image";
import Card from "./_components/Card";
import { mockingData } from "./_components/Data";

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src="/homehavenlogo.png"
          alt="HomeHaven Logo"
          width={300}
          height={300}
        />
        <h2 className="mb-5 text-3xl text-[#5B2205]">Apartments</h2>
        <div className="mx-9 grid max-w-[900px] gap-2 md:grid-cols-2 lg:grid-cols-3">
          {mockingData.map((object) => (
            <div key={object.id} className="flex flex-col">
              <Card object={object} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
