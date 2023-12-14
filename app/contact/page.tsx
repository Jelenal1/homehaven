export default function page() {
  return (
    <div className="mx-9 flex min-h-screen flex-col items-center text-[#5B2205]">
      <form className="mt-[15vh] flex w-full max-w-[600px] flex-col items-center">
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

        <label htmlFor="email" className="text-sm">
          E-Mail
        </label>
        <input
          type="text"
          name="email"
          className="h-6 w-full rounded pl-0.5 outline-[2.5px] outline-[#5B2205] focus:outline"
        />
      </form>
    </div>
  );
}
