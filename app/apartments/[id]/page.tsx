import { mockingData } from "@/app/apartments/page";
import Image from "next/image";
import { LiaCoinsSolid } from "react-icons/lia";
import CarouselImages from "../../components/CarouselImages";

export default function page({ params }: { params: { id: string } }) {
  const object = mockingData.find(
    (object) => object.id === parseInt(params.id)
  );

  if (!object) {
    return <div>Apartment not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen text-[#5B2205] mx-9">
      <h1 className="text-3xl my-5 mx-auto">{object.title}</h1>
      <CarouselImages images={object.images} />
      <div className="flex items-center justify-center">
        <span>CHF</span>
        <LiaCoinsSolid />
        <h2 className="ml-1">{object.price}</h2>
      </div>
      {object.description.split(`\n`).map((sentence, index) => (
        <p className="text-justify max-w-[1000px] mx-auto my-2" key={index}>
          {sentence}
        </p>
      ))}
    </div>
  );
}
