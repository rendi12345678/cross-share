import React from "react";
import "../../assets/styles/navbar.css";
import useNavbar from "../../hooks/useNavbar";
import Button from "../ui/Button";
import NavList from "../ui/NavList";

function Navbar() {
  const { renderNavListItems, isNavListItemActive, setActiveLayout } = useNavbar();
  const logoutBgColor = isNavListItemActive("logout") ? "var(--hover-color)" : "transparent";

  return (
    <aside className="side-bar-nav">
      <div>
        <h3 className="nav-title">Cross Share</h3>
      </div>
      <NavList>{renderNavListItems}</NavList>
      <div>
      <Button
        text={"logout"}
        className="nav-btn"
        bgColor={logoutBgColor}
        onClick={() => setActiveLayout("logout")}
      />
      </div>
    </aside>
  );
}

export default Navbar;
