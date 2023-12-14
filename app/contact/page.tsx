"use client";
import { useState } from "react";

export default function page() {
  const [Subject, setSubject] = useState("");
  const [Message, setMessage] = useState("");
  return (
    <div className="mx-9 flex min-h-screen flex-col items-center text-[#5B2205]">
      <h1 className="my-5 text-3xl">Contact Us</h1>
      <form
        className="flex w-full max-w-[600px] flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          const recipient = "homehaven@homehaven.com";
          if (Subject === "" || Message === "") return;
          window.location.href = `mailto:${recipient}?subject=${Subject}&body=${Message}`;
          setSubject("");
          setMessage("");
        }}
      >
        <label htmlFor="subject" className="text-sm">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={Subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mb-1 h-6 w-full rounded pl-0.5 outline-[2.5px] outline-[#5B2205] focus:outline"
        />
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          name="message"
          value={Message}
          onChange={(e) => setMessage(e.target.value)}
          className="h-20 w-full rounded pl-0.5 outline-[2.5px] outline-[#5B2205] focus:outline"
        />
        <input
          type="submit"
          value="Send"
          className="mt-2 rounded bg-[#5B2205] px-1.5 py-0.5 text-sm text-white"
        />
      </form>
    </div>
  );
}
