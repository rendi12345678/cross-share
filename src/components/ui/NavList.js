import React from "react";

function NavList({ children }) {
  return (
    <nav>
      <ul> {children}</ul>
    </nav>
  );
}

export default NavList;
