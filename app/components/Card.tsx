import Image from "next/image";
import Link from "next/link";
import { LiaCoinsSolid } from "react-icons/lia";

export default function Card({
  object,
}: {
  object: {
    id: number;
    title: string;
    description: string;
    shortDescription: string;
    price: number | null | undefined;
    images: string[] | null | undefined;
  };
}) {
  return (
    <div className="w-full">
      <Link href={`/apartments/${object.id}`}>
        <div className="text-[#5B2205] border border-black mx-auto min-h-fit text-center min-w-[200px] max-w-[300px]">
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
            <h2 className="ml-1">{object.price}</h2>
          </div>
          <p className="mr-auto break-words">{object.shortDescription}</p>
        </div>
      </Link>
    </div>
  );
}
