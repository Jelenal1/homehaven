export const getPrice = async (name: string) => {
  const parsedName = encodeURIComponent(name);
  try {
    const priceResponse = await fetch(
      `https://homehaven-backend-express.onrender.com/getPrice?name=${parsedName}`,
    );

    const price_data = await priceResponse.json();
    const price = price_data.price_in_cents / 100;
    return price;
  } catch (error) {
    console.log(error);
  }
};

export const getPriceId = async (name: string) => {
  const parsedName = encodeURIComponent(name);
  try {
    const priceResponse = await fetch(
      `https://homehaven-backend-express.onrender.com/getPrice?name=${parsedName}`,
    );
    const price_data = await priceResponse.json();
    return price_data.price_id;
  } catch (error) {
    console.log(error);
  }
};
