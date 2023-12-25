import Image from "next/image";
import Link from "next/link";
import { LiaCoinsSolid } from "react-icons/lia";
import { getPrice } from "./ServerFunctions";

export default async function Card({
  object,
}: {
  object: {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
    images: string[] | null | undefined;
  };
}) {
  const price = await getPrice(object.title);
  return (
    <div className="h-full w-full">
      <Link href={`/apartments/${object.id}`}>
        <div className="mx-auto h-full min-w-[200px] max-w-[300px] border border-black text-center text-[#5B2205]">
          {object.images ? (
            <Image
              src={object.images[0]}
              width={500}
              height={500}
              alt={object.title}
              className="mx-auto"
            />
          ) : null}

          <h1>{object.title}</h1>
          <div className="flex items-center justify-center">
            <span>CHF</span>
            <LiaCoinsSolid className="text-[#5B2205]" />
            <h2 className="ml-1">{price}</h2>
          </div>
          <p className="mr-auto break-words">{object.shortDescription}</p>
        </div>
      </Link>
    </div>
  );
}
