import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [mobileNavToggle, setMobileNavToggle] = useState<Boolean>(false);
  const handleMobileNavToggle = () => {
    setMobileNavToggle((prev) => (prev = !prev));
    console.log("clicked");
  };
  return (
    <nav className="flex px-2 py-4 justify-between md:justify-evenly items-centers w-full text-white bg-zinc-900 bg-opacity-80 fixed">
      <h1 className="text-3xl">RESTAURANTLY</h1>
      <ul className="hidden md:flex md:gap-4 md:items-center">
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Specials</li>
        <li>Events</li>
        <li>Chefs</li>
        <li>Gallery</li>
        <li className="flex items-center gap-3">
          Drop Down
          <FaChevronDown size={10} />
        </li>
        <li>Contact</li>
        <li className="border-2 border-yellow-200 rounded-full px-4 py-2">
          Book A Table
        </li>
      </ul>

      {/* mobile nav */}
      {mobileNavToggle ? (
        <div className="fixed top-0 left-0 z-20 w-full h-full bg-black text-white px-4 pb-20 pt-4 md:hidden">
          <div className="w-full flex justify-end">
            <div onClick={handleMobileNavToggle} className="pb-4">
              <IoClose size={30} />
            </div>
          </div>
          <ul className="w-full h-full bg-white text-black rounded-md p-4 flex flex-col gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Specials</li>
            <li>Events</li>
            <li>Chefs</li>
            <li>Gallery</li>
            <li className="flex items-center gap-1">
              Drop Down
              <FaChevronDown size={10} />
            </li>
            <li>Contact</li>
          </ul>
        </div>
      ) : (
        <div onClick={handleMobileNavToggle} className="md:hidden">
          <IoMenu size={30} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
