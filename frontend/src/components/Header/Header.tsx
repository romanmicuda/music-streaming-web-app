import React from "react";
import HeaderSearchBar from "./HeaderSearchBar";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-center">
      <Link href="/">
        <span className="material-symbols-outlined">home</span>
      </Link>
      <HeaderSearchBar />
      <p>Explore Premiem</p>
      <p>Install App</p>
      <span className="material-symbols-outlined">notifications</span>
    </div>
  );
}

export default Header;
