"use client";

import Link from "next/link";
import React, { useState } from "react";

function HeaderSearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <span className="material-symbols-outlined">search</span>
      <input type="text" value={searchTerm} onChange={handleSearchTerm} />
      <Link href="/browse">
        <span className="material-symbols-outlined">travel_explore</span>
      </Link>
    </div>
  );
}

export default HeaderSearchBar;
