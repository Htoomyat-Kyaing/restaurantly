import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram, FaViber, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="w-full px-6 py-12 text-white h-max bg-zinc-900 md:px-20">
        <div className="grid w-full h-full gap-10 md:grid-cols-2 lg:grid-cols-6">
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
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-yellow-200 hover:bg-opacity-70">
                <FaSquareXTwitter size={20} />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-yellow-200 hover:bg-opacity-70">
                <FaFacebook size={20} />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-yellow-200 hover:bg-opacity-70">
                <FaViber size={20} />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-yellow-200 hover:bg-opacity-70">
                <FaInstagram size={20} />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 hover:bg-yellow-200 hover:bg-opacity-70">
                <FaWhatsapp size={20} />
              </div>
            </div>
          </div>

          <div className="w-full h-max lg:w-max">
            <h3 className="mb-5 text-xl">Useful Links</h3>
            <ul className="flex flex-col gap-5 ml-1">
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
            <h3 className="mb-5 text-xl">Our Services</h3>
            <ul className="flex flex-col gap-5 ml-1">
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

          <div className="flex flex-col w-full gap-5 h-max lg:col-span-2">
            <h3 className="text-xl">Our Newsletter</h3>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <div className="relative w-full">
              <input
                className="w-full p-2 rounded-full bg-zinc-800"
                type="email"
                name=""
                id=""
              />
              <button className="absolute right-0 px-4 py-2 text-black bg-yellow-200 rounded-full hover:bg-yellow-300 w-max h-max">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col w-full gap-3 py-6 text-center text-white h-max bg-zinc-950">
        <p>
          © Copyright <span className="font-bold">Restaurantly</span>. All
          Rights Reserved
        </p>
        <p>
          Designed by{" "}
          <a className="text-yellow-200" href="">
            Anonymous
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
