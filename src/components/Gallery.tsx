import Gallery1 from "../assets/gallery-1.jpg";
import Gallery2 from "../assets/gallery-2.jpg";
import Gallery3 from "../assets/gallery-3.jpg";
import Gallery4 from "../assets/gallery-4.jpg";
import Gallery5 from "../assets/gallery-5.jpg";
import Gallery6 from "../assets/gallery-6.jpg";
import Gallery7 from "../assets/gallery-7.jpg";
import Gallery8 from "../assets/gallery-8.jpg";

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
          src={Gallery1}
          alt=""
        />
        <img src={Gallery2} alt="" />
        <img src={Gallery3} alt="" />
        <img src={Gallery4} alt="" />
        <img src={Gallery5} alt="" />
        <img src={Gallery6} alt="" />
        <img src={Gallery7} alt="" />
        <img src={Gallery8} alt="" />
      </div>
    </section>
  );
};

export default Gallery;
