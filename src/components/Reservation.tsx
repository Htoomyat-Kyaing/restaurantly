const Reservation = () => {
  return (
    <section className="w-screen h-max bg-zinc-900 px-6 py-12 md:px-20">
      <h2 className="text-zinc-500 text-2xl mb-4">Reservation</h2>
      <h3 className="text-3xl text-yellow-200 font-bold">Book A Table</h3>

      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto my-12">
        <input
          className="p-2 bg-zinc-800 text-zinc-300"
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
          className="p-2 bg-zinc-800 text-zinc-300"
          type="text"
          name="phone"
          placeholder="Your Phone"
        />
        <input
          className="p-2 bg-zinc-800 text-zinc-300"
          type="date"
          name="date"
          placeholder="Date"
        />
        <input
          className="p-2 bg-zinc-800 text-zinc-300"
          type="time"
          name="time"
          placeholder="Time"
        />
        <input
          className="p-2 bg-zinc-800 text-zinc-300"
          type="number"
          name=""
          id=""
          placeholder="number of people"
        />
        <textarea
          className="bg-zinc-800 p-2 md:col-span-2 lg:col-span-3"
          name="message"
          cols={30}
          rows={5}
          placeholder="Message"
        ></textarea>
        <div className="md:col-span-2 lg:col-span-3 flex justify-center items-center">
          <button className="bg-yellow-200 hover:bg-yellow-300 rounded-full w-36 ml-4 px-4 py-2">
            Book A Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
