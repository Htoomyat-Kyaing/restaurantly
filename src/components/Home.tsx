import Navbar from "./Navbar";

const Home = () => {
  return (
    <section className="w-full h-screen">
      <div className="w-full h-full bg-[url('./assets/hero-bg.jpg')] bg-cover bg-center">
        <Navbar />
        <div className="w-full h-full bg-opacity-50 bg-zinc-900">
          <div className="grid w-full h-screen p-20 text-white md:grid-cols-3">
            <div className="flex flex-col items-center justify-center w-full md:col-span-2 md:items-start">
              <h2 className="mb-3 text-3xl font-bold md:text-5xl">
                Welcome to <span className="text-yellow-200">Restaurantly</span>
              </h2>
              <p className="mb-6 text-xl md:text-2xl">
                Delivering great food for more than 18 years!
              </p>
              <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                <button className="px-4 py-2 border-2 border-yellow-200 rounded-full w-36">
                  Our Menu
                </button>
                <button className="px-4 py-2 border-2 border-yellow-200 rounded-full w-36">
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
