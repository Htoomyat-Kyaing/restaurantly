import { Avatar, Blockquote } from "flowbite-react";

const Testimonials = () => {
  return (
    <section className="w-full px-6 py-12 text-yellow-200 h-max bg-zinc-950 md:px-20">
      <h2 className="mb-4 text-2xl text-zinc-500">Testimonials</h2>
      <h3 className="text-3xl font-bold text-yellow-200">
        What they say about our restaurant
      </h3>
      <div className="grid w-full gap-5 mt-6 h-max md:grid-cols-3">
        <figure className="flex flex-col items-center justify-center h-full max-w-screen-md gap-5 mx-auto">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <Blockquote>
            <p className="italic font-medium rounded-lg md:text-sm text-slate-100 bg-zinc-800">
              "Proin iaculis purus consequat sem cure digni ssim donec
              porttitora entum suscipit rhoncus. Accusantium quam, ultricies
              eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
            </p>
          </Blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <Avatar
              rounded
              size="lg"
              img="/img/testimonials-2.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-slate-200">
                Sara Willson
              </cite>
              <cite className="pl-3 text-sm text-slate-500">Designer</cite>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center h-full max-w-screen-md gap-5 mx-auto">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <Blockquote>
            <p className="italic font-medium rounded-lg md:text-sm text-slate-100 bg-zinc-800">
              "Proin iaculis purus consequat sem cure digni ssim donec
              porttitora entum suscipit rhoncus. Accusantium quam, ultricies
              eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
            </p>
          </Blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <Avatar
              rounded
              size="lg"
              img="/img/testimonials-1.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-slate-200">
                Saul Goodman
              </cite>
              <cite className="pl-3 text-sm text-slate-500">CEO & Founder</cite>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center h-full max-w-screen-md gap-5 mx-auto">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <Blockquote>
            <p className="italic font-medium rounded-lg md:text-sm text-slate-100 bg-zinc-800">
              "Proin iaculis purus consequat sem cure digni ssim donec
              porttitora entum suscipit rhoncus. Accusantium quam, ultricies
              eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
            </p>
          </Blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3">
            <Avatar
              rounded
              size="lg"
              img="/img/testimonials-3.jpg"
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-slate-200">
                Jena Karlis
              </cite>
              <cite className="pl-3 text-sm text-slate-500">Store Owner</cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
