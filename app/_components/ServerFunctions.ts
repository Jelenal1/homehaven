export const getPrice = async (name: string) => {
  const parsedName = encodeURIComponent(name);
  const hostName = process.env.HOST_NAME;
  const priceResponse = await fetch(
    `https://${hostName}/api/getPrice?name=${parsedName}`,
  );

  const price_data = await priceResponse.json();
  const price = price_data.price_in_cents / 100;
  return price;
};

export const getPriceId = async (name: string) => {
  const parsedName = encodeURIComponent(name);
  const hostName = process.env.HOST_NAME;
  const priceResponse = await fetch(
    `https://${hostName}/api/getPrice?name=${parsedName}`,
  );
  const price_data = await priceResponse.json();
  return price_data.price_id;
};
