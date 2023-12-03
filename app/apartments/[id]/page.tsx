import { mockingData } from "@/app/apartments/page";
import Image from "next/image";
import { LiaCoinsSolid } from "react-icons/lia";

export default function page({ params }: { params: { id: string } }) {
  const object = mockingData.find(
    (object) => object.id === parseInt(params.id),
  );

  if (!object) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen items-center text-[#5B2205]">
      <h1 className="text-3xl my-5">{object.title}</h1>
      {object.images ? (
        <Image
          src={object.images[0]}
          width={500}
          height={500}
          alt={object.title}
          className="mx-auto"
        />
      ) : null}
      <div className="flex items-center justify-center">
        <span>CHF</span>
        <LiaCoinsSolid />
        <h2 className="ml-1">{object.price}</h2>
      </div>
      <p className="break-words">{object.description}</p>
    </div>
  );
}
