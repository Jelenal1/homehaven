export const getPrice = async (name: string) => {
  const baseUrl = "https://homehaven-liard.vercel.app/api/getPrice";
  const query = encodeURIComponent(name);
  const url = `${baseUrl}?name=${query}`;
  const priceResponse = await fetch(url);

  const price_data = await priceResponse.json();
  const price = price_data.price_in_cents / 100;
  return price;
};

export const getPriceId = async (name: string) => {
  const baseUrl = "https://homehaven-liard.vercel.app/api/getPrice";
  const query = encodeURIComponent(name);
  const url = `${baseUrl}?name=${query}`;
  const priceResponse = await fetch(url);
  const price_data = await priceResponse.json();
  return price_data.price_id;
};
