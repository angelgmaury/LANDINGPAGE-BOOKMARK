import { useState } from "react";

function ContactSection() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Validar el correo electrónico usando una expresión regular
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(regex.test(value));
  };
  return (
    <div className="bg-softBlue flex flex-col items-center px-6 pb-16 pt-16 text-white">
      <p className=" tracking-[2px] text-sm mb-2 font-medium">
        35.000+ ALREADY JOINED
      </p>

      <h3 className="font-medium text-xl text-center mb-6 lg:text-2xl lg:w-1/3 lg:mx-auto">
        Stay up-to-date whit what we´re doing
      </h3>

      <form
        className="lg:flex lg:gap-4 lg:mx-auto lg:items-center lg:justify-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Enter your email address"
          className={`rounded-lg w-full px-4 py-4 mb-4 lg:w-auto lg:mb-0 text-black ${
            isValidEmail ? "" : "border-red-500"
          }`}
          value={email}
          onChange={handleChange}
        />

        <button
          className="w-full py-3 bg-SoftRed rounded-lg font-medium lg:px-6 lg:py-4 border-2 border-transparent hover:bg-white hover:border-2 hover:border-SoftRed hover:text-SoftRed transition-colors"
          type="submit"
        >
          Contact Us
        </button>
      </form>
    </div>
  );
}

export default ContactSection;
