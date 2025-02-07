import { useState } from "react";
import { Link } from "react-router-dom";
import whiteLogo from "../assets/logo-white.png"; // Corrected filename for clarity
import blackLogo from "../assets/logo-black.png";

const Homepage = () => {
  return (
    <div className="flex grow justify-center items-center bg-base-200">
      {/* Light Mode Logo */}
      <img src={blackLogo} alt="Bananazon!" className="block dark:hidden w-48 md:w-96" />
      {/* Dark Mode Logo */}
      <img src={whiteLogo} alt="Bananazon!" className="hidden dark:block w-48 md:w-96" />
    </div>
  );
};

export default Homepage;
