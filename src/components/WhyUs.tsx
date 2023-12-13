const WhyUs = () => {
  return (
    <section className="w-screen h-max bg-zinc-900 px-6 py-12 md:px-20">
      <h2 className="text-zinc-500 text-2xl mb-4">Why Us</h2>
      <h3 className="text-3xl text-yellow-200 font-bold">
        Why Choose Our Restaurant
      </h3>

      <div className="w-full flex flex-col gap-6 md:flex-row my-12">
        <div className="bg-zinc-800 w-full flex flex-col gap-3 py-12 px-6 group/card hover:bg-yellow-200 hover:bg-opacity-40">
          <p className="text-3xl font-bold text-yellow-200 group-hover/card:text-zinc-100">
            01
          </p>
          <p className="text-3xl font-semibold text-zinc-100">Lorem Ipsum</p>
          <p className="text-xl text-zinc-100">
            Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
            consectetur ducimus vero placeat
          </p>
        </div>
        <div className="bg-zinc-800 w-full flex flex-col gap-3 py-12 px-6 group/card hover:bg-yellow-200 hover:bg-opacity-40">
          <p className="text-3xl font-bold text-yellow-200 group-hover/card:text-zinc-100">
            02
          </p>
          <p className="text-3xl font-semibold text-zinc-100">Lorem Ipsum</p>
          <p className="text-xl text-zinc-100">
            Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et
            consectetur ducimus vero placeat
          </p>
        </div>
        <div className="bg-zinc-800 w-full flex flex-col gap-3 py-12 px-6 group/card hover:bg-yellow-200 hover:bg-opacity-40">
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
