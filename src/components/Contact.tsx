import { CiLocationOn } from "react-icons/ci";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";

const Contact = () => {
  return (
    <section className="w-full px-6 py-12 h-max md:px-20 bg-zinc-950">
      <h2 className="mb-4 text-2xl text-zinc-500">Contact</h2>
      <h3 className="text-3xl font-bold text-yellow-200">Contact Us</h3>

      <div className="flex items-center justify-center w-full h-40 mt-12 text-center text-white bg-zinc-800">
        Google map
      </div>

      <div className="grid w-full gap-5 md:grid-cols-2">
        <div className="flex flex-col w-full gap-5 mt-12 h-max">
          <div className="flex items-center w-full gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-200 rounded-full text-zinc-800">
              <CiLocationOn size={30} />
            </div>
            <div className="font-semibold text-white">
              <p className="text-xl">Location:</p>
              <p className="text-sm text-zinc-500">
                A108 Adam Street, New York, NY 535022
              </p>
            </div>
          </div>
          <div className="flex items-center w-full gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-200 rounded-full text-zinc-800">
              <CiClock1 size={30} />
            </div>
            <div className="font-semibold text-white">
              <p className="text-xl">Open Hours:</p>
              <p className="text-sm text-zinc-500">
                Monday-Saturday: 11:00 AM - 2300 PM
              </p>
            </div>
          </div>
          <div className="flex items-center w-full gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-200 rounded-full text-zinc-800">
              <MdOutlineMail size={30} />
            </div>
            <div className="font-semibold text-white">
              <p className="text-xl">Email:</p>
              <p className="text-sm text-zinc-500">info@example.com</p>
            </div>
          </div>
          <div className="flex items-center w-full gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-yellow-200 rounded-full text-zinc-800">
              <CiMobile3 size={30} />
            </div>
            <div className="font-semibold text-white">
              <p className="text-xl">Call:</p>
              <p className="text-sm text-zinc-500">+1 5589 55488 55s</p>
            </div>
          </div>
        </div>

        <div className="grid w-full gap-5 mt-12 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-0">
          <input
            className="p-2 lg:mr-5 bg-zinc-800 text-zinc-300"
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            className="p-2 bg-zinc-800 text-zinc-300"
            type="text"
            name="email"
            placeholder="Your Email"
          />
          <input
            className="p-2 md:col-span-2 bg-zinc-800 text-zinc-300"
            type="text"
            name="phone"
            placeholder="Your Phone"
          />
          <textarea
            className="p-2 bg-zinc-800 md:col-span-2 lg:col-span-3"
            name="message"
            cols={30}
            rows={5}
            placeholder="Message"
          ></textarea>
          <div className="flex items-center justify-center md:col-span-2 lg:col-span-3">
            <button className="px-4 py-2 ml-4 bg-yellow-200 rounded-full hover:bg-yellow-300 w-36">
              Book A Table
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
