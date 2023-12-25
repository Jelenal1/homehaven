import { mockingData } from "@/app/apartments/page";
import { LiaCoinsSolid } from "react-icons/lia";
import CarouselImages from "../../_components/CarouselImages";

const getPrice = async (name: string) => {
  const priceResponse = await fetch(
    `http://localhost:3000/api/getPrice?name=${name}`,
  );

  const price_data = await priceResponse.json();
  const price = price_data.price_in_cents / 100;
  return price;
};

export default async function page({ params }: { params: { id: string } }) {
  const object = mockingData.find(
    (object) => object.id === parseInt(params.id),
  );

  if (!object) {
    return <div>Apartment not found</div>;
  }

  const price = await getPrice(object.title);

  return (
    <div className="mx-9 flex min-h-screen flex-col text-[#5B2205]">
      <h1 className="mx-auto my-5 text-3xl">{object.title}</h1>
      <CarouselImages images={object.images} />
      <div className="flex items-center justify-center">
        <span>CHF</span>
        <LiaCoinsSolid />
        <h2 className="ml-1">{price}</h2>
      </div>
      {object.description.split(`\n`).map((sentence, index) => (
        <p className="mx-auto my-2 max-w-[1000px] text-justify" key={index}>
          {sentence}
        </p>
      ))}
    </div>
  );
}
