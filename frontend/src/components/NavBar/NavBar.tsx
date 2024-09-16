import React from "react";

function NavBar() {
  return (
    <div>
      <nav>
        <ul className="flex space-x-3">
          <li>All</li>
          <li>Music</li>
          <li>Podcast</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
