import Card from "../components/Card";
import Footer from "../components/Footer";

export const mockingData = [
  {
    id: 1,
    title: "Skyline Modern Studio",
    "description": "Located on the upper floors of the esteemed Skyline Residences, Apartment 1 epitomizes the essence of chic urban living. The studio is meticulously designed to cater to the modern cosmopolitan.\n\nAs you enter the space, you're greeted by a state-of-the-art kitchen equipped with high-end stainless steel appliances, sleek countertops, and custom cabinetry. Every inch of the kitchen is crafted for both functionality and aesthetic appeal, perfect for the culinary enthusiast.\n\nThe living area is a testament to thoughtful design, featuring a comfortable sleeping space that transforms effortlessly from a restful retreat into a dynamic living space. The full bath echoes the kitchen's modernity, with designer fixtures, crisp lines, and a spa-like ambiance. It's a sanctuary where one can unwind in a luxurious soak after a day's hustle.\n\nDominating the studio are the floor-to-ceiling windows, framing the dramatic Harborview skyline. They don't just bring in an abundance of natural light; they invite the city's heartbeat into your living space. The view transforms with the day: witness the sunrise painting the city in golden hues, the bustling day reflected in the shimmering buildings, and the sunset giving way to the city lights that resemble a constellation at your feet.\n\nResidents of Skyline Residences enjoy exclusive amenities, including a rooftop terrace, a state-of-the-art fitness center, and a private lounge. The studio's intelligent design maximizes the use of space without compromising on luxury, making it an ideal choice for those seeking a stylish and convenient urban living experience in the heart of Harborview.",
    shortDescription:
      "Experience luxury living with modern amenities and a stunning view at the heart of Harborview.",
    location: "Skyline Residences, Downtown Harborview",
    price: 100,
    images: ["/apartment_clean_light1.png", "/apartment_clean_light2.png"],
  },
  {
    id: 2,
    title: "Rustic Harborview Charm",
    description:
      "Nestled within Skyline Residences, this apartment exudes a classic charm with its warm wooden finishes and cozy interiors. A perfect blend of Harborview's heritage and modern living.",
    shortDescription:
      "Discover the perfect fusion of tradition and comfort in the heart of Harborview's most sought-after location.",
    location: "Skyline Residences, Downtown Harborview",
    price: 100,
    images: ["/apartment_rough_light1.png", "/apartment_rough_light2.png"],
  },
];

export default function page() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center">
        <h1 className="text-3xl my-5 text-[#5B2205]">Apartments</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mx-9">
          {mockingData.map((object) => (
            <div key={object.id} className="flex flex-col">
              <Card object={object} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
