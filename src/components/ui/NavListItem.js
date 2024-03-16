import React from "react";
import Button from "./Button";

function NavListItem({ text, onClick, active }) {
  return (
    <li>
      <Button
        text={text}
        className="nav-btn"
        bgColor={active ? "var(--hover-color)" : "transparent"}
        onClick={onClick}
      />
    </li>
  );
}

export default NavListItem;
