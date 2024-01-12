import CarouselImages from "../_components/CarouselImages";
export default function page() {
  return (
    <div className="mx-9 flex min-h-screen flex-col items-center gap-10">
      <h1 className="my-5 text-3xl text-[#5B2205]">About Us</h1>
      <CarouselImages images={["/homhaven_team1.png", "/homhaven_team2.png"]} />
      <p className="mx-auto my-1 max-w-[1000px] text-justify">
        Welcome to HomeHaven, the place where your search for the perfect home
        ends. Founded in 2023, HomeHaven has quickly established itself as a
        beacon of trust and excellence in the real estate market. Our mission is
        simple yet profound: to help individuals and families find not just a
        house, but a place they can truly call home.
      </p>
      <p className="mx-auto my-1 max-w-[1000px] text-justify">
        At HomeHaven, we understand that finding the right apartment is about
        more than just the walls and the windows — it's about the feelings of
        comfort, security, and belonging. Our team, comprised of experienced
        real estate professionals, passionate designers, and dedicated support
        staff, works tirelessly to ensure every property we list is not just a
        living space but a haven for its residents.
      </p>
      <p className="mx-auto my-1 max-w-[1000px] text-justify">
        Our journey began with a small team of visionary entrepreneurs who
        believed in the transformative power of a well-chosen home. Today,
        HomeHaven stands as a testament to their vision, having helped thousands
        find their perfect abode in the urban landscape of Harborview. Our
        approach combines the latest technology with a human touch, offering
        personalized experiences and a handpicked selection of properties that
        cater to diverse needs and preferences.
      </p>
      <p className="mx-auto mb-4 mt-1 max-w-[1000px] text-justify">
        At the heart of HomeHaven is a commitment to integrity, transparency,
        and customer satisfaction. We're more than just a business; we're a
        community, a part of the neighborhoods we serve. We celebrate the
        diversity of our clients and take pride in being a company that welcomes
        all. <br />
        <br />
        Join us at HomeHaven, and let us guide you to your sanctuary in the
        city.
      </p>
    </div>
  );
}
