import Card from "../components/Card";
import Footer from "../components/Footer";

export const mockingData = [
  {
    id: 1,
    title: "Skyline Modern Studio",
    description:
      "A chic urban retreat in the Skyline Residences, this studio features a state-of-the-art kitchen, full bath, and a comfortable sleeping area. Floor-to-ceiling windows offer a breathtaking view of the Harborview skyline.",
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
