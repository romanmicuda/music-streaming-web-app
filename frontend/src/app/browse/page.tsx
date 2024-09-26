import { genres } from "@/mockData";
import Link from "next/link";
import React from "react";

function Browse() {
  return (
    <div>
      <h1>Browse all</h1>
      <div className="grid grid-cols-3">
        {genres.map((genre, index) => (
          <div key={index}>
            <Link href={`/browse/${genre}`}>{genre}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
