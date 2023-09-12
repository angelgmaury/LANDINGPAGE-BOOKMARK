import { useState } from "react";

function FeaturesSection() {
  const options = ["Simple BookMarking", "Speedy Searching", "Easy Sharing"];
  const infoOps = [
    {
      id: 1,
      img: "./images/illustration-features-tab-1.svg",
      title: "Simple BookMarking",
      description:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites",
    },
    {
      id: 2,
      img: "./images/illustration-features-tab-2.svg",
      title: "Speedy Searching",
      description:
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    },
    {
      id: 3,
      img: "./images/illustration-features-tab-3.svg",
      title: "Easy Sharing",
      description:
        "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    },
  ];

  const [activeOption, setActiveOption] = useState(infoOps[0]);

  const handleOptionClick = (option) => {
    const selectedOption = infoOps.find(
      (ops) => ops.title.toLowerCase() === option.toLowerCase()
    );
    if (selectedOption) {
      setActiveOption(selectedOption);
    }
  };

  return (
    <div className="px-6 mb-32">
      <div className="text-center">
        <h2 className="text-VeryDarkBlue font-medium text-2xl mb-4 lg:text-4xl">
          Features
        </h2>
        <p className="text-GrayishBlue mb-8 lg:text-lg lg:mx-auto lg:w-1/2">
          Our aim is to make it quick and easy for you to access your favorite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>

        <hr />

        <div className="lg:flex lg:justify-evenly">
          {options.map((option) => (
            <div
              key={option}
              className={`cursor-pointer  ${
                activeOption.title.toLowerCase() === option.toLowerCase()
                  ? "active-option"
                  : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <p
                className={`text-lg mb-4 mt-4 ${
                  activeOption.title.toLowerCase() === option.toLowerCase()
                    ? "text-SoftRed"
                    : ""
                }`}
              >
                {option}
              </p>
              <hr className="lg:hidden" />
            </div>
          ))}
        </div>

        <hr className="hidden lg:block" />

        <div key={activeOption.id} className="mt-14 lg:grid lg:grid-cols-2 ">
          <figure className="flex justify-center">
            <img
              src={activeOption.img}
              alt="illustrations-features"
              className="h-60 lg:h-80"
            />
          </figure>
          <div className="text-center mt-16 lg:text-start">
            <h2 className="text-VeryDarkBlue font-medium text-2xl mb-4 lg:text-4xl">
              {activeOption.title}
            </h2>
            <p className="text-GrayishBlue mb-8 lg:text-lg lg:w-2/3">
              {activeOption.description}
            </p>

            <button className="px-6 py-4 rounded-lg text-white bg-softBlue text-sm lg:text-base lg:py-3">
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
