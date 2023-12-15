import { mockingData } from "@/app/apartments/page";
import Image from "next/image";
import { LiaCoinsSolid } from "react-icons/lia";
import CarouselImages from "../../_components/CarouselImages";

export default function page({ params }: { params: { id: string } }) {
  const object = mockingData.find(
    (object) => object.id === parseInt(params.id),
  );

  if (!object) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="mx-9 flex min-h-screen flex-col text-[#5B2205]">
      <h1 className="mx-auto my-5 text-3xl">{object.title}</h1>
      <CarouselImages images={object.images} />
      <div className="flex items-center justify-center">
        <span>CHF</span>
        <LiaCoinsSolid />
        <h2 className="ml-1">{object.price}</h2>
      </div>
      {object.description.split(`\n`).map((sentence, index) => (
        <p className="mx-auto my-2 max-w-[1000px] text-justify" key={index}>
          {sentence}
        </p>
      ))}
    </div>
  );
}
