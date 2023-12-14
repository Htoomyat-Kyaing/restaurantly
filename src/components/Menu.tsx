// import { useState } from "react";

const menu = [
  {
    name: "Lobster Bisque",
    price: 5.95,
    imageURL: "../assets/lobster-bisque.jpg",
    category: "starter",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    name: "Bread Barrel",
    price: 6.95,
    imageURL: "../assets/bread-barrel.jpg",
    category: "specialty",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    name: "Crab Cake",
    price: 7.95,
    imageURL: "../assets/cake.jpg",
    category: "starter",
    description:
      "A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
  },
  {
    name: "Caesar Selection",
    price: 8.95,
    imageURL: "../assets/caesar.jpg",
    category: "salad",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    name: "Tuscan Grilled",
    price: 9.95,
    imageURL: "../assets/tuscan-grilled.jpg",
    category: "specialty",
    description:
      "Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
  },
  {
    name: "Mozzarella Stick",
    price: 4.95,
    imageURL: "../assets/mozzarella.jpg",
    category: "starter",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    name: "Spinach Salad",
    price: 9.95,
    imageURL: "../assets/spinach-salad.jpg",
    category: "salad",
    description:
      "Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
  },
  {
    name: "Greek Salad",
    price: 9.95,
    imageURL: "../assets/greek-salad.jpg",
    category: "salad",
    description: "Lorem, deren, trataro, filede, nerada",
  },
  {
    name: "Lobster Roll",
    price: 12.95,
    imageURL: "../assets/lobster-roll.jpg",
    category: "specialty",
    description:
      "Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
  },
];

// const [filteredMenu, setFilteredMenu] = useState(menu);

// const handleClick = (e: any) => {
//   console.log(e);
// };

const Menu = () => {
  return (
    <section className="w-screen px-6 py-10 h-max bg-zinc-800 md:px-20">
      <h2 className="mb-4 text-2xl text-zinc-500">Menu</h2>
      <h3 className="text-3xl font-bold text-yellow-200">
        Check Our Tasty Menu
      </h3>

      <div className="flex items-center justify-center gap-5 my-6 text-lg font-semibold text-white ">
        <button className="hover:text-yellow-200">All</button>
        <button className="hover:text-yellow-200">Starters</button>
        <button className="hover:text-yellow-200">Salads</button>
        <button className="hover:text-yellow-200">Speciality</button>
      </div>

      <ul className="grid w-full gap-3 text-white md:grid-cols-2 md:gap-6">
        {menu.map((item: any) => (
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
