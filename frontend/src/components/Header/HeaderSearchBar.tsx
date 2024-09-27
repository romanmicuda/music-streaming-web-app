"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function HeaderSearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const router = useRouter();

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      router.push(`/search/${value}`);
    } else {
      router.push(`/browse`);
    }
  };
  useEffect(() => {
    handleSearchTerm;
  }, [searchTerm]);

  return (
    <div>
      <span className="material-symbols-outlined">search</span>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTerm}
        onClick={() => router.push("/browse")}
      />

      {searchTerm ? (
        <span
          className="material-symbols-outlined"
          onClick={() => {
            setSearchTerm("");
            router.push("/browse");
          }}
        >
          close
        </span>
      ) : (
        <Link href="/browse">
          <span className="material-symbols-outlined">travel_explore</span>
        </Link>
      )}
    </div>
  );
}

export default HeaderSearchBar;
