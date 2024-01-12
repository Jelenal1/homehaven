export const getPrice = async (name: string) => {
  const priceResponse = await fetch(
    `homehaven-liard.vercel.app/api/getPrice?name=${name}`,
  );

  const price_data = await priceResponse.json();
  const price = price_data.price_in_cents / 100;
  return price;
};

export const getPriceId = async (name: string) => {
  const priceResponse = await fetch(
    `homehaven-liard.vercel.app/api/getPrice?name=${name}`,
  );
  const price_data = await priceResponse.json();
  return price_data.price_id;
};
