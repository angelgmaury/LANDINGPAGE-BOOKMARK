function SectionPrincipal() {
  return (
    <section className="px-6 lg:px-20 lg:gap-4 mb-32 lg:grid lg:grid-cols-2 lg:items-center">
      <figure className="flex justify-center order-2">
        <img src="./images/illustration-hero.svg" alt="" />
      </figure>

      <div className="text-center order-1 lg:text-start">
        <h2 className="text-VeryDarkBlue font-medium text-2xl mb-4 lg:text-5xl">
          A Simple Bookmark Manager
        </h2>
        <p className="text-GrayishBlue mb-8 lg:text-xl">
          A clean and simple interface to organize yout favourite websites. Open
          a new browser tab and see your sites load instantly. Try it por free
        </p>

        <div className="flex w-full items-center justify-center gap-4 lg:justify-start">
          <button className="px-4 py-4 rounded-lg bg-softBlue text-white text-sm font-medium hover:bg-transparent hover:border hover:border-softBlue hover:text-softBlue border border-transparent transition-colors">
            Get it on Chrome
          </button>
          <button className="px-4 py-4 rounded-lg bg-white text-GrayishBlue text-sm font-medium sombra2 border border-transparent hover:bg-transparent hover:border hover:border-black hover:text-black transition-colors">
            Get it on Firefox
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionPrincipal;
