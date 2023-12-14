const WhyUs = () => {
  return (
    <section className="w-full px-6 py-12 h-max bg-zinc-900 md:px-20">
      <h2 className="mb-4 text-2xl text-zinc-500">Why Us</h2>
      <h3 className="text-3xl font-bold text-yellow-200">
        Why Choose Our Restaurant
      </h3>

      <div className="flex flex-col w-full gap-6 my-12 md:flex-row">
        <div className="flex flex-col w-full gap-3 px-6 py-12 bg-zinc-800 group/card hover:bg-yellow-200 hover:bg-opacity-40">
          <p className="text-3xl font-bold text-yellow-200 group-hover/card:text-zinc-100">
            01
          </p>
          <p className="text-3xl font-semibold text-zinc-100">Lorem Ipsum</p>
          <p className="text-xl text-zinc-100">
            Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
            consectetur ducimus vero placeat
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 px-6 py-12 bg-zinc-800 group/card hover:bg-yellow-200 hover:bg-opacity-40">
          <p className="text-3xl font-bold text-yellow-200 group-hover/card:text-zinc-100">
            02
          </p>
          <p className="text-3xl font-semibold text-zinc-100">Lorem Ipsum</p>
          <p className="text-xl text-zinc-100">
            Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
            consectetur ducimus vero placeat
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 px-6 py-12 bg-zinc-800 group/card hover:bg-yellow-200 hover:bg-opacity-40">
          <p className="text-3xl font-bold text-yellow-200 group-hover/card:text-zinc-100">
            03
          </p>
          <p className="text-3xl font-semibold text-zinc-100">Lorem Ipsum</p>
          <p className="text-xl text-zinc-100">
            Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
            consectetur ducimus vero placeat
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
