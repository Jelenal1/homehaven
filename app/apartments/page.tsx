import Card from "../components/Card";
import Footer from "./../components/Footer";

export const mockingData = [
  {
    id: 1,
    title: "Apartment 1",
    description: "This is an apartment",
    price: 100,
    images: ["/apartment_clean_light1.png", "/apartment_clean_light2.png"],
  },
  {
    id: 2,
    title: "Apartment 2",
    description: "This is an apartment",
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
            <Card object={object} key={object.id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
