import Card from "../components/Card";
import Footer from "./../components/Footer";

export default function page() {
  const mockingData = [
    {
      id: 1,
      title: "Apartment 1",
      description: "This is an apartment",
      price: 100,
      image: "/Homehaven.png",
    },
    {
      id: 2,
      title: "Apartment 2",
      description: "This is an apartment",
      price: 100,
      image: "/Homehaven.png",
    },
    {
      id: 3,
      title: "Apartment 3",
      description: "This is an apartment",
      price: 100,
      image: "/Homehaven.png",
    },
    {
      id: 4,
      title: "Apartment 4",
      description: "This is an apartment",
      price: 100,
      image: "/Homehaven.png",
    },
    {
      id: 5,
      title: "Apartment 5",
      description: "This is an apartment",
      price: 100,
      image: "/Homehaven.png",
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen items-center">
        <h1 className="text-3xl my-5">Apartments</h1>
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
