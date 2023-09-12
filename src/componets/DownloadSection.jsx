function DownloadSection() {
  const browsersOptions = [
    {
      id: 1,
      routeImg: "./images/logo-chrome.svg",
      text: "Add to Chrome",
      version: "Minumin version 62",
    },
    {
      id: 2,
      routeImg: "./images/logo-firefox.svg",
      text: "Add to Firefox",
      version: "Minumin version 55",
    },
    {
      id: 3,
      routeImg: "./images/logo-opera.svg",
      text: "Add to Opera",
      version: "Minumin version 46",
    },
  ];
  return (
    <div className="px-6 mb-32">
      <div className="text-center">
        <h2 className="text-VeryDarkBlue font-medium text-2xl mb-4 lg:text-4xl">
          Download the extension
        </h2>
        <p className="text-GrayishBlue mb-8 lg:text-lg lg:w-1/2 lg:mx-auto lg:mb-16">
          We´ve got more browsers in the pipeline. Please do let us know if
          you´ve got a favourite you´d like us to prioritize.
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center mb-10 lg:flex-row lg:justify-center">
        {browsersOptions.map((browser) => (
          <div
            className="flex items-center flex-col bg-white sombra py-5 h-auto w-auto rounded-xl"
            key={browser.id}
          >
            <img src={browser.routeImg} alt="logo browser" className="mb-6" />
            <p className="mb-2 text-VeryDarkBlue font-medium text-xl">
              {browser.text}
            </p>
            <p className="mb-6 text-GrayishBlue text-sm font-medium">
              {browser.version}
            </p>
            <img
              src="./images/bg-dots.svg"
              alt="imagen de puntos de separacion"
              className="mb-6"
            />

            <button className="bg-softBlue text-white px-6 py-3 text-sm rounded-lg flex items-center font-medium border border-transparent hover:bg-transparent hover:border hover:border-softBlue hover:text-softBlue transition-colors">
              Add & Install Extension
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DownloadSection;
