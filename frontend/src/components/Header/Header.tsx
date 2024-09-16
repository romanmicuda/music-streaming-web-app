import React from "react";
import HeaderSearchBar from "./HeaderSearchBar";

function Header() {
  return (
    <div className="flex">
      <span className="material-symbols-outlined">home</span>
      <HeaderSearchBar />
      <p>Explore Premiem</p>
      <p>Install App</p>
      <span className="material-symbols-outlined">notifications</span>
    </div>
  );
}

export default Header;
