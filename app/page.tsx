import Image from "next/image";
import Card from "./_components/Card";

export const mockingData = [
  {
    id: 1,
    title: "Skyline Modern Studio",
    description:
      "Located on the upper floors of the esteemed Skyline Residences, Apartment 1 epitomizes the essence of chic urban living. The studio is meticulously designed to cater to the modern cosmopolitan.\n\nAs you enter the space, you're greeted by a state-of-the-art kitchen equipped with high-end stainless steel appliances, sleek countertops, and custom cabinetry. Every inch of the kitchen is crafted for both functionality and aesthetic appeal, perfect for the culinary enthusiast.\n\nThe living area is a testament to thoughtful design, featuring a comfortable sleeping space that transforms effortlessly from a restful retreat into a dynamic living space. The full bath echoes the kitchen's modernity, with designer fixtures, crisp lines, and a spa-like ambiance. It's a sanctuary where one can unwind in a luxurious soak after a day's hustle.\n\nDominating the studio are the floor-to-ceiling windows, framing the dramatic Harborview skyline. They don't just bring in an abundance of natural light; they invite the city's heartbeat into your living space. The view transforms with the day: witness the sunrise painting the city in golden hues, the bustling day reflected in the shimmering buildings, and the sunset giving way to the city lights that resemble a constellation at your feet.\n\nResidents of Skyline Residences enjoy exclusive amenities, including a rooftop terrace, a state-of-the-art fitness center, and a private lounge. The studio's intelligent design maximizes the use of space without compromising on luxury, making it an ideal choice for those seeking a stylish and convenient urban living experience in the heart of Harborview.",
    shortDescription:
      "Experience luxury living with modern amenities and a stunning view at the heart of Harborview.",
    location: "Skyline Residences, Downtown Harborview",
    images: ["/apartment_clean_light1.png", "/apartment_clean_light2.png"],
  },
  {
    id: 2,
    title: "Rustic Harborview Charm",
    description:
      "Perched in the elegant Skyline Residences, Rustic Harborview Charm is a masterpiece of contemporary luxury. This one-bedroom apartment is tailored for the discerning urbanite. \n\n Upon entry, the expansive living room welcomes you with its refined decor and plush furnishings, seamlessly blending comfort with high-end style. The adjoining dining area, adorned with a statement lighting fixture, sets the stage for memorable dinners. The gourmet kitchen, a few steps away, is replete with top-tier appliances, granite countertops, and sophisticated cabinetry, catering to both the serious chef and the casual cook. \n\n The bedroom is a serene haven, offering tranquility with its subtle color palette and luxurious bedding, ensuring restful nights. The adjoining bathroom rivals a boutique spa, featuring a deep soaking tub, rainfall shower, and elegant vanity, all underlined by exquisite tile work. \n\n The crowning jewel of this apartment is the balcony, offering a panoramic view of the bustling Harborview streetscape below. From the first light of dawn to the twinkling city lights at night, the view is ever-changing and always captivating. \n\n Residents have access to Skyline Residences' full suite of amenities, including a landscaped garden, a fully equipped gym, and an exclusive residents' lounge. Rustic Harborview Charm's blend of opulence and functionality marks it as a premier choice for those seeking a refined living experience in the vibrant heart of Harborview.",
    shortDescription:
      "Discover the perfect fusion of tradition and comfort in the heart of Harborview's most sought-after location.",
    location: "Skyline Residences, Downtown Harborview",
    images: ["/apartment_rough_light1.png", "/apartment_rough_light2.png"],
  },
  {
    id: 3,
    title: "Harborview Elegance Suite",
    description:
      "Residing in the prestigious Skyline Residences, Apartment 3 redefines luxury living. This exquisite two-bedroom suite captures the spirit of sophisticated urban life. \nAs you step inside, the spacious living area unfolds before you, boasting elegant furnishings, artful decor, and floor-to-ceiling windows that bathe the room in natural light. The open-plan layout flows seamlessly into a dining area, perfect for entertaining guests or enjoying a quiet evening meal. \nThe modern kitchen is a chef's dream, featuring the latest appliances, sleek stone countertops, and ample storage space. \nEach bedroom is a private retreat, offering plush bedding, ample closet space, and breathtaking views of the city. The master suite includes an en-suite bathroom with a spa-like ambience, complete with a luxurious bathtub and premium fittings. \nThe apartment also includes a guest bathroom, finished to the same high standards as the rest of the suite. \nResidents of Apartment 3 enjoy access to the exclusive amenities of Skyline Residences, including a rooftop pool, state-of-the-art gym, and 24-hour concierge service. The residence is ideally located, offering easy access to Harborview's vibrant nightlife, shopping, and dining experiences.",
    shortDescription:
      "An epitome of urban sophistication, this two-bedroom suite in Skyline Residences offers unparalleled luxury and stunning city views.",
    location: "Skyline Residences, Downtown Harborview",
    images: [
      "/apartment_elegant1.png",
      "/apartment_elegant2.png",
      "/apartment_elegant3.png",
      "/apartment_elegant4.png",
    ],
  },
];

export default function page() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src="/HomeHaven.png"
          alt="HomeHaven Logo"
          width={300}
          height={300}
        />
        <h2 className="my-5 text-3xl text-[#5B2205]">Apartments</h2>
        <div className="mx-9 grid max-w-[900px] gap-2 md:grid-cols-2 lg:grid-cols-3">
          {mockingData.map((object) => (
            <div key={object.id} className="flex flex-col">
              <Card object={object} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
