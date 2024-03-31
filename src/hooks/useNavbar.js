import React from "react";
import NavListItem from "./../components/ui/NavListItem";
import useContextHook from "./useContextHook";

function useNavbar() {
  const { activeLayout, setActiveLayout } = useContextHook();

  const isNavListItemActive = (item) => {
    if (item !== activeLayout) return false;

    return true;
  };

  const navListItems = [
    {
      navListItem: "dashboard",
    },
    {
      navListItem: "youtube",
    },
    {
      navListItem: "settings",
    },
  ];

  const capitalizeStr = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const renderNavListItems = navListItems.map(({ navListItem }, index) => {
    const active = isNavListItemActive(navListItem);

    return (
      <NavListItem
        key={index + 1}
        text={capitalizeStr(navListItem)}
        onClick={() => setActiveLayout(navListItem)}
        active={active}
      />
    );
  });

  return { renderNavListItems, isNavListItemActive, setActiveLayout };
}

export default useNavbar;
