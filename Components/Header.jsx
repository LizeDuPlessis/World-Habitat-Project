import React from "react";
import propTypes from "prop-types";
import Image from "next/image";

function Header({ text }) {
  return (
    <header className="flex justify-center ml-5 mt-4">
      <Image src="/logo.png" width={115} height={110} alt="logo" />
      <h2 className="mt-5">{text}</h2>
    </header>
  );
}

export default Header;

Header.defaultProps = {
  text: "Habitats",
};

Header.propTypes = {
  text: propTypes.string,
};
