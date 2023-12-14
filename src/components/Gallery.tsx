const Gallery = () => {
  return (
    <section className="w-screen px-6 py-12 h-max bg-zinc-900 md:px-20">
      <h2 className="mb-4 text-2xl text-zinc-500">Why Us</h2>
      <h3 className="text-3xl font-bold text-yellow-200">
        Why Choose Our Restaurant
      </h3>

      <div className="grid mt-6 divide-x-2 divide-y-2 divide-x-reverse divide-y-reverse md:grid-cols-3 lg:grid-cols-4">
        <img
          className="border-b-2 border-r-2 border-white "
          src={"../src/assets/gallery-1.jpg"}
          alt=""
        />
        <img src={"../src/assets/gallery-2.jpg"} alt="" />
        <img src={"../src/assets/gallery-3.jpg"} alt="" />
        <img src={"../src/assets/gallery-4.jpg"} alt="" />
        <img src={"../src/assets/gallery-5.jpg"} alt="" />
        <img src={"../src/assets/gallery-6.jpg"} alt="" />
        <img src={"../src/assets/gallery-7.jpg"} alt="" />
        <img src={"../src/assets/gallery-8.jpg"} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
