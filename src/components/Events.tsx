import { Carousel } from "flowbite-react";

const Events = () => {
  return (
    <section className="w-full px-6 py-12 bg-zinc-950 h-max md:px-20">
      <h2 className="mb-4 text-2xl text-zinc-500">Events</h2>
      <h3 className="text-3xl font-bold text-yellow-200">
        Organize Your Events in our Restaurant
      </h3>

      <div className="w-full mt-6 text-white">
        <Carousel className="h-96">
          <div className="grid md:grid-cols-2">
            <img src="/public/img/event-birthday.jpg" alt="..." />

            <div className="flex flex-col w-full h-full mx-6 justify-evenly">
              <h3 className="text-3xl font-bold text-yellow-200">
                Birthday Parties
              </h3>
              <p className="text-3xl underline decoration-yellow-200">$189</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, aliquam.
              </p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2">
            <img src="/public/img/event-custom.jpg" alt="..." />

            <div className="flex flex-col w-full h-full mx-6 justify-evenly">
              <h3 className="text-3xl font-bold text-yellow-200">
                Custom Parties
              </h3>
              <p className="text-3xl underline decoration-yellow-200">$99</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, aliquam.
              </p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <img src="/public/img/event-private.jpg" alt="..." />

            <div className="flex flex-col w-full h-full mx-6 justify-evenly">
              <h3 className="text-3xl font-bold text-yellow-200">
                Private Parties
              </h3>
              <p className="text-3xl underline decoration-yellow-200">$290</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, aliquam.
              </p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Events;
