"use client";
import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function CheckoutButton({ priceId }: { priceId: string }) {
  const [quantity, setQuantity] = useState(1);

  const checkOut = async () => {
    const response = await fetch(
      "https://homehaven-backend.vercel.app/api/checkout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: priceId,
          quantity: quantity,
        }),
      },
    );
    const data = await response.json();
    window.location.assign(data.url);
  };
  return (
    <div className="mt-2 flex flex-col">
      <div className="flex items-center gap-2">
        <span>Nights</span>
        <button onClick={() => setQuantity(quantity + 1)}>
          <CiCirclePlus className="h-8 w-8 text-[#5B2205]" />
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            quantity > 1 && setQuantity(quantity - 1);
          }}
        >
          <CiCircleMinus className="h-8 w-8 text-[#5B2205]" />
        </button>
      </div>

      <button
        onClick={() => checkOut()}
        className="mt-2 rounded bg-[#5B2205] px-1 text-white"
      >
        Checkout
      </button>
    </div>
  );
}
