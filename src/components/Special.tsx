const Special = () => {
  return (
    <section className="w-full px-6 py-12 text-yellow-200 h-max bg-zinc-950 md:px-20">
      <h2 className="mb-4 text-2xl text-zinc-500">Special</h2>
      <h3 className="text-3xl font-bold text-yellow-200">Check our specials</h3>

      <div className="grid items-center mt-6 md:grid-cols-3 md:gap-5">
        <div>
          <ul className="flex flex-col">
            <li className="p-2 text-yellow-200 hover:text-black hover:bg-yellow-200">
              Lorem ipsum dolor sit.
            </li>
            <li className="p-2 text-yellow-200 hover:text-black hover:bg-yellow-200">
              Lorem ipsum dolor sit.
            </li>
            <li className="p-2 text-yellow-200 hover:text-black hover:bg-yellow-200">
              Lorem ipsum dolor sit.
            </li>
            <li className="p-2 text-yellow-200 hover:text-black hover:bg-yellow-200">
              Lorem ipsum dolor sit.
            </li>
            <li className="p-2 text-yellow-200 hover:text-black hover:bg-yellow-200">
              Lorem ipsum dolor sit.
            </li>
          </ul>
        </div>
        <div className="md:flex md:flex-row-reverse md:col-span-2 md:items-center md:gap-5">
          <img
            className="w-full md:w-1/2 md:h-1/2"
            src="/img/specials-1.png"
            alt=""
          />
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At,
              adipisci.
            </h2>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              sequi maxime animi unde sint, itaque odit maiores quae quas quasi!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
