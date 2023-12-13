import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram, FaViber, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="w-screen h-max bg-zinc-900 text-white px-6 md:px-20 py-12">
      <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-6 gap-10">
        <div className="w-full h-max lg:col-span-2">
          <h1 className="text-2xl">RESTAURANTLY</h1>
          <div className="mt-4">
            <p>A108 Adam Street NY 535022, USA</p>
            <p>NY 535022, USA</p>
          </div>
          <div className="mt-4">
            <p>Phone: +1 5589 55488 55</p>
            <p>Email: info@example.com</p>
          </div>
          <div className="flex gap-2 mt-4">
            <div className="bg-zinc-800 w-10 h-10 rounded-full flex justify-center items-center hover:bg-yellow-200 hover:bg-opacity-70">
              <FaSquareXTwitter size={20} />
            </div>
            <div className="bg-zinc-800 w-10 h-10 rounded-full flex justify-center items-center hover:bg-yellow-200 hover:bg-opacity-70">
              <FaFacebook size={20} />
            </div>
            <div className="bg-zinc-800 w-10 h-10 rounded-full flex justify-center items-center hover:bg-yellow-200 hover:bg-opacity-70">
              <FaViber size={20} />
            </div>
            <div className="bg-zinc-800 w-10 h-10 rounded-full flex justify-center items-center hover:bg-yellow-200 hover:bg-opacity-70">
              <FaInstagram size={20} />
            </div>
            <div className="bg-zinc-800 w-10 h-10 rounded-full flex justify-center items-center hover:bg-yellow-200 hover:bg-opacity-70">
              <FaWhatsapp size={20} />
            </div>
          </div>
        </div>

        <div className="w-full h-max lg:w-max">
          <h3 className="text-xl mb-5">Useful Links</h3>
          <ul className="ml-1 flex flex-col gap-5">
            <li className="flex items-center">
              <div className="text-yellow-200">
                <FaAngleRight />
              </div>
              Home
            </li>
            <li className="flex items-center">
              <div className="text-yellow-200">
                <FaAngleRight />
              </div>
              About Us
            </li>
            <li className="flex items-center">
              <div className="text-yellow-200">
                <FaAngleRight />
              </div>
              Services
            </li>
            <li className="flex items-center">
              <div className="text-yellow-200">
                <FaAngleRight />
              </div>
              Terms of service
            </li>
            <li className="flex items-center">
              <div className="text-yellow-200">
                <FaAngleRight />
              </div>
              Privacy policy
            </li>
          </ul>
        </div>

        <div className="w-full h-max">
          <h3 className="text-xl mb-5">Our Services</h3>
          <ul className="ml-1 flex flex-col gap-5">
            <li className="flex items-center">
              <div className="text-yellow-200">
                <FaAngleRight />
              </div>
              Web Design
            </li>
            <li className="flex items-center">
              <div className="text-yellow-200">
                <FaAngleRight />
              </div>
              Web Development
            </li>
            <li className="flex items-center">
              <div className="text-yellow-200">
                <FaAngleRight />
              </div>
              Prodect Management
            </li>
            <li className="flex items-center">
              <div className="text-yellow-200">
                <FaAngleRight />
              </div>
              Marketing
            </li>
            <li className="flex items-center">
              <div className="text-yellow-200">
                <FaAngleRight />
              </div>
              Graphic Design
            </li>
          </ul>
        </div>

        <div className="w-full h-max flex flex-col gap-5 lg:col-span-2">
          <h3 className="text-xl">Our Newsletter</h3>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <div className="w-full  relative">
            <input
              className="w-full p-2 rounded-full bg-zinc-800"
              type="email"
              name=""
              id=""
            />
            <button className="bg-yellow-200 hover:bg-yellow-300 rounded-full  text-black absolute right-0 w-max h-max py-2 px-4">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
