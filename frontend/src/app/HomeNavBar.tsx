import Link from "next/link";
import React from "react";

function HomeNavBar() {
  return (
    <div>
      <nav>
        <ul className="flex space-x-3">
          <li>
            <Link href={`/`}>All</Link>
          </li>
          <li>
            <Link href={`/music`}>Music</Link>
          </li>
          <li>
            <Link href={`/podcast`}>Podcast</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomeNavBar;
