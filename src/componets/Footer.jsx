function Footer() {
  return (
    <footer className="bg-VeryDarkBlue text-white px-6 pb-10 flex flex-col items-center lg:flex-row lg:justify-between lg:w-full lg:gap-10 lg:px-28 lg:py-10">
      <h2 className="py-8 text-xl font-medium tracking-[1px] mb-4 lg:mb-0 lg:py-0">
        BOOKMARK
      </h2>

      <div className="flex flex-col gap-4 text-center lg:flex-row lg:gap-8">
        <a
          href="#"
          className="text-GrayishBlue  tracking-[1px] hover:text-SoftRed"
        >
          FEATURES
        </a>
        <a
          href="#"
          className="text-GrayishBlue  tracking-[1px] hover:text-SoftRed"
        >
          PRICING
        </a>
        <a
          href="#"
          className="text-GrayishBlue  tracking-[1px] hover:text-SoftRed"
        >
          CONTACT
        </a>
      </div>

      <div className="flex items-center gap-8 justify-center w-full mt-8 lg:mt-0 lg:w-auto">
        <a href="#">
          <img src="./images/icon-facebook.svg" alt="logo de facebook" />
        </a>
        <a href="#">
          <img src="./images/icon-twitter.svg" alt="logo de twitter" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
