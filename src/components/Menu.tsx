// import { useState } from "react";

import { useEffect, useState } from "react";

const menu = [
  {
    name: "Lobster Bisque",
    price: 5.95,
    imageURL: "/img/lobster-bisque.jpg",
    category: "starter",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    name: "Bread Barrel",
    price: 6.95,
    imageURL: "/img/bread-barrel.jpg",
    category: "speciality",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    name: "Crab Cake",
    price: 7.95,
    imageURL: "/img/cake.jpg",
    category: "starter",
    description:
      "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
  },
  {
    name: "Caesar Selection",
    price: 8.95,
    imageURL: "/img/caesar.jpg",
    category: "salad",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    name: "Tuscan Grilled",
    price: 9.95,
    imageURL: "/img/tuscan-grilled.jpg",
    category: "speciality",
    description:
      "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
  },
  {
    name: "Mozzarella Stick",
    price: 4.95,
    imageURL: "/img/mozzarella.jpg",
    category: "starter",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    name: "Spinach Salad",
    price: 9.95,
    imageURL: "/img/spinach-salad.jpg",
    category: "salad",
    description:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
  },
  {
    name: "Greek Salad",
    price: 9.95,
    imageURL: "/img/greek-salad.jpg",
    category: "salad",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    name: "Lobster Roll",
    price: 12.95,
    imageURL: "/img/lobster-roll.jpg",
    category: "speciality",
    description:
      "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
  },
];

const Menu = () => {
  const [filteredMenu, setFilteredMenu] = useState(menu);

  const handleClick = (e: any) => {
    if (e.target.value === "all") {
      setFilteredMenu(menu);
      return;
    }
    let filteredMenu = menu.filter((m) => m.category === e.target.value);
    setFilteredMenu(filteredMenu);
  };
  useEffect(() => {
    setFilteredMenu(menu);
  }, []);

  return (
    <section className="w-full px-6 py-10 h-max bg-zinc-800 md:px-20">
      <h2 className="mb-4 text-2xl text-zinc-500">Menu</h2>
      <h3 className="text-3xl font-bold text-yellow-200">
        Check Our Tasty Menu
      </h3>

      <div className="flex items-center justify-center gap-5 my-6 text-lg font-semibold text-white ">
        <button
          className="hover:text-yellow-200"
          value={"all"}
          onClick={(e) => handleClick(e)}
        >
          All
        </button>
        <button
          className="hover:text-yellow-200"
          value={"starter"}
          onClick={handleClick}
        >
          Starters
        </button>
        <button
          className="hover:text-yellow-200"
          value={"salad"}
          onClick={handleClick}
        >
          Salads
        </button>
        <button
          className="hover:text-yellow-200"
          value={"speciality"}
          onClick={handleClick}
        >
          Speciality
        </button>
      </div>

      <ul className="grid w-full gap-3 text-white md:grid-cols-2 md:gap-6">
        {filteredMenu.map((item: any) => (
          <li key={item.name} className="flex w-full gap-2">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-zinc-700">
              <img
                className="rounded-full w-14 h-14"
                src={item.imageURL}
                alt=""
              />
            </div>
            <div className="flex-1">
              <p>{item.name}</p>
              <p className="text-sm italic text-gray-400">{item.description}</p>
            </div>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
