"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselImages({ images }: { images: string[] }) {
  return (
    <>
      <Carousel showArrows={true} className="w-[500px]">
        {images.map((url, index) => (
          <div key={index}>
            <Image
              src={url}
              width={500}
              height={500}
              alt="Apartment"
              className="mx-auto"
            />
          </div>
        ))}
      </Carousel>
    </>
  );
}
