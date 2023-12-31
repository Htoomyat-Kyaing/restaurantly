import AboutImg from "../assets/about.jpg";
import { CiCircleCheck } from "react-icons/ci";

const About = () => {
  return (
    <section className="w-full h-max">
      <div className="w-full h-full bg-[url('./assets/about-bg.jpg')] bg-cover bg-center">
        <div className="w-full h-full px-6 py-16 bg-opacity-50 bg-zinc-900 md:px-0">
          <div className="grid mx-auto md:grid-cols-2 md:gap-6 md:px-20">
            <img
              className="row-start-1 md:col-start-2 md:max-w-md"
              src={AboutImg}
              alt=""
            />
            <div className="text-white md:col-start-1">
              <h2 className="text-2xl">
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assumenda.
              </h2>
              <p className="mt-3 text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="flex flex-col gap-3 mt-3">
                <li className="flex items-center gap-3">
                  <div className="flex items-center w-5 h-5">
                    <CiCircleCheck size={20} />
                  </div>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li className="flex gap-3">
                  <div className="flex items-center w-5 h-5">
                    <CiCircleCheck size={20} />
                  </div>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li className="flex gap-3">
                  <div className="flex items-center w-5 h-5">
                    <CiCircleCheck size={20} />
                  </div>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </li>
              </ul>

              <p className="mt-5">
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
