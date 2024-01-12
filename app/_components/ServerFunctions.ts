export const getPrice = async (name: string) => {
  const priceResponse = await fetch(
    `https://homehaven-ecc604h9r-jelenal1.vercel.app/api/getPrice?name=${name}`,
  );

  const price_data = await priceResponse.json();
  const price = price_data.price_in_cents / 100;
  return price;
};

export const getPriceId = async (name: string) => {
  const priceResponse = await fetch(
    `https://homehaven-ecc604h9r-jelenal1.vercel.app/api/getPrice?name=${name}`,
  );
  const price_data = await priceResponse.json();
  return price_data.price_id;
};
