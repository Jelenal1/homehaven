"use client";
import { useState } from "react";

export default function CheckoutButton({ priceId }: { priceId: string }) {
  const [quantity, setQuantity] = useState(1);

  const checkOut = async () => {
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        priceId: priceId,
        quantity: quantity,
      }),
    });
    const data = await response.json();
    window.location.assign(data);
  };
  return (
    <div className="mt-2 flex flex-col">
      <input
        type="number"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="w-[100px] bg-transparent text-center outline-none"
        cur
      />
      <button
        onClick={() => checkOut()}
        className="mt-2 rounded bg-[#5B2205] text-white"
      >
        Checkout
      </button>
    </div>
  );
}
