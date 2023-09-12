import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

function MenuMobile() {
  const [modal, setModal] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    modal ? (document.body.style.overflowY = "hidden") : null;

    return () => {
      modal ? (document.body.style.overflowY = "auto") : null;
    };
  }, [modal]);

  const navigations = ["FEATURES", "PRICING", "CONTACT"];
  return (
    <div className="mb-24 h-full w-full">
      {modal ? (
        <div className="fixed inset-0 bg-VeryDarkBlue opacity-90">
          <div className="py-8 px-12 w-full text-white">
            <div className="flex justify-between items-center w-full">
              <h2 className="tracking-[1px] text-xl font-medium">BOOKMARK</h2>
              <button
                onClick={() => {
                  setModal(false);
                }}
              >
                <FontAwesomeIcon icon={faClose} className="text-xl" />
              </button>
            </div>

            <hr className="border-GrayishBlue mt-6" />

            {navigations.map((navigation) => (
              <div key={navigation}>
                <div className="text-center w-full mt-6">
                  <a href="#" className="tracking-[2px] text-xl text-zinc-200">
                    {navigation}
                  </a>
                </div>
                <hr className="border-GrayishBlue mt-6" />
              </div>
            ))}

            <button className="w-full h-12 flex items-center justify-center border-2 rounded-[4px] border-white mt-6">
              <p className="font-medium tracking-[2px] text-xl text-zinc-200">
                LOGIN
              </p>
            </button>

            <footer className="flex items-center gap-8 justify-center absolute w-full right-0 bottom-0 mb-20">
              <a href="#">
                <img src="./images/icon-facebook.svg" alt="logo de facebook" />
              </a>
              <a href="#">
                <img src="./images/icon-twitter.svg" alt="logo de twitter" />
              </a>
            </footer>
          </div>
        </div>
      ) : (
        <div
          className={`fixed w-full flex justify-between p-8 sm:hidden ${
            scrollBackground ? "bg-white sombra" : ""
          } `}
        >
          <figure>
            <img src="./images/logo-bookmark.svg" alt="logo de Bookmark" />
          </figure>

          <button
            onClick={() => {
              setModal(!modal);
            }}
            className="relative top-0.5"
          >
            <FontAwesomeIcon icon={faBars} className="text-xl" />
          </button>
        </div>
      )}
    </div>
  );
}

export default MenuMobile;
