const Chefs = () => {
  return (
    <section className="w-full px-6 py-12 bg-zinc-950 h-max md:px-20">
      <h2 className="mb-4 text-2xl text-zinc-500">Chefs</h2>
      <h3 className="text-3xl font-bold text-yellow-200">
        Our Professional Chefs
      </h3>

      <div className="grid w-full gap-5 mt-10 md:grid-cols-3">
        <img src="/img/chefs-1.jpg" alt="" />
        <img src="/img/chefs-2.jpg" alt="" />
        <img src="/img/chefs-3.jpg" alt="" />
      </div>
    </section>
  );
};

export default Chefs;
