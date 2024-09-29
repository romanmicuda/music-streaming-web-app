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
    </div>
  );
}

export default Header;
