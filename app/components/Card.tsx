import Image from "next/image";

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
      <div className="text-[#5B2205] border border-black mx-9 text-center">
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
        <h2>{object.price}</h2>
        <p>{object.description}</p>
      </div>
    </div>
  );
}
