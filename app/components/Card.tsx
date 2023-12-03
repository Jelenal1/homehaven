import Image from "next/image";
import { PiHandCoinsFill } from "react-icons/pi";

export default function Card({
  object,
}: {
  object: {
    id: number;
    title: string;
    description: string;
    price: number | null | undefined;
    image: string | null | undefined;
  };
}) {
  return (
    <div className="w-full">
      <div className="text-[#5B2205] border border-black mx-auto min-h-fit text-center min-w-[200px] max-w-[300px]">
        {object.image ? (
          <Image
            src={object.image}
            width={500}
            height={500}
            alt={object.title}
            className="mx-auto"
          />
        ) : null}

        <h1>{object.title}</h1>
        <div className="flex items-center justify-center">
          <PiHandCoinsFill />
          <h2 className="ml-1">{object.price}</h2>
        </div>
        <p className="mr-auto break-words">{object.description}</p>
      </div>
    </div>
  );
}
