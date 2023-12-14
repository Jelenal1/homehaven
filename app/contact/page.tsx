"use client";
import { useState } from "react";

export default function page() {
  return (
    <div className="mx-9 flex min-h-screen flex-col items-center text-[#5B2205]">
      <form
        className="mt-[15vh] flex w-full max-w-[600px] flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          const Prename = e.currentTarget.prename.value;
          const Sirname = e.currentTarget.sirname.value;
          const Subject = e.currentTarget.subject.value;
          const Message = e.currentTarget.message.value;
          const recipient = "homehaven@homehaven.com";
          if (!Prename || !Sirname || !Subject || !Message) return;
          window.location.href = `mailto:${recipient}?subject=${Subject}&body=${Message}`;
        }}
      >
        <label htmlFor="prename" className="text-sm">
          Prename
        </label>
        <input
          type="text"
          name="prename"
          className="mb-1 h-6 w-full rounded pl-0.5 outline-[2.5px] outline-[#5B2205] focus:outline"
        />
        <label htmlFor="sirname" className="text-sm">
          Sirname
        </label>
        <input
          type="text"
          name="sirname"
          className="mb-1 h-6 w-full rounded pl-0.5 outline-[2.5px] outline-[#5B2205] focus:outline"
        />
        <label htmlFor="subject" className="text-sm">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          className="mb-1 h-6 w-full rounded pl-0.5 outline-[2.5px] outline-[#5B2205] focus:outline"
        />
        <label htmlFor="message" className="text-sm">
          Message
        </label>
        <textarea
          name="message"
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
