import Navbar from "./Navbar";

const Home = () => {
  return (
    <section className="w-screen h-screen">
      <div className="w-full h-full bg-[url('./assets/hero-bg.jpg')] bg-cover bg-center">
        <Navbar />
        <div className="w-full h-full bg-zinc-900 bg-opacity-50">
          <div className="w-full h-screen grid md:grid-cols-3 p-20 text-white">
            <div className="w-full flex flex-col justify-center items-center md:col-span-2 md:items-start">
              <h2 className="text-3xl md:text-5xl font-bold mb-3">
                Welcome to <span className="text-yellow-200">Restaurantly</span>
              </h2>
              <p className="text-xl md:text-2xl mb-6">
                Delivering great food for more than 18 years!
              </p>
              <div>
                <button className="border-2 border-yellow-200 rounded-full w-36 px-4 py-2">
                  Our Menu
                </button>
                <button className="border-2 border-yellow-200 rounded-full w-36 ml-4 px-4 py-2">
                  Book A Table
                </button>
              </div>
            </div>

            {/* TODO: */}
            <button>PLAY BUTTON</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
