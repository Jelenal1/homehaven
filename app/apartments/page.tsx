import Card from "../components/Card";

export default function page() {
  const mockingData = [
    {
      id: 1,
      title: "Apartment 1",
      description: "This is an apartment",
      price: 100,
      image: "/Homehaven.png",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen items-center">
      <h1 className="text-3xl my-5">Apartments</h1>
      <Card object={mockingData[0]} />
    </div>
  );
}
