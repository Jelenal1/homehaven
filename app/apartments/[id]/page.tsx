import { mockingData } from "@/app/apartments/page";
import { LiaCoinsSolid } from "react-icons/lia";
import CarouselImages from "../../_components/CarouselImages";
import { getPrice, getPriceId } from "@/app/_components/ServerFunctions";
import CheckoutButton from "../../_components/CheckoutButton";

export default async function page({ params }: { params: { id: string } }) {
  const object = mockingData.find(
    (object) => object.id === parseInt(params.id),
  );

  if (!object) {
    return <div>Apartment not found</div>;
  }

  const price = await getPrice(object.title);
  const priceId = await getPriceId(object.title);

  return (
    <div className="mx-9 flex min-h-screen flex-col text-[#5B2205]">
      <h1 className="mx-auto my-5 text-3xl">{object.title}</h1>
      <CarouselImages images={object.images} />
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <span>CHF</span>
          <LiaCoinsSolid />
          <h2 className="ml-1">{price}</h2>
        </div>

        <CheckoutButton priceId={priceId} />
      </div>
      {object.description.split(`\n`).map((sentence, index) => (
        <p
          className="mx-auto my-2 w-full max-w-[1000px] text-justify"
          key={index}
        >
          {sentence}
        </p>
      ))}
    </div>
  );
}
