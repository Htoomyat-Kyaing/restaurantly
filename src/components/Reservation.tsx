const Reservation = () => {
  return (
    <section className="w-full px-6 py-12 h-max bg-zinc-900 md:px-20">
      <h2 className="mb-4 text-2xl text-zinc-500">Reservation</h2>
      <h3 className="text-3xl font-bold text-yellow-200">Book A Table</h3>

      <div className="grid w-full gap-5 my-12 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto">
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
    </section>
  );
};

export default Reservation;
