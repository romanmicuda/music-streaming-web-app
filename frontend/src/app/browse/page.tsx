import { genres, songs } from "@/mockData";
import React from "react";

function Browse() {
  return (
    <div>
      <h1>Browse all</h1>
      <div className="grid grid-cols-3">
        {genres.map((genre) => (
          <div>{genre}</div>
        ))}
      </div>
    </div>
  );
}

export default Browse;
