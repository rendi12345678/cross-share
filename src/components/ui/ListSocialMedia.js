import React from "react";
import useListSocialMedia from "../../hooks/useListSocialMedia";
import Item from "./Item";

function ListSocialMedia() {
  const { items } = useListSocialMedia();
  return (
    <ul className="list-social-media">
      {items.map(({ platform, reactions, comments, shared }, index) => (
        <Item
          key={index + 1}
          platform={platform}
          reactions={reactions}
          comments={comments}
          shared={shared}
        />
      ))}
    </ul>
  );
}

export default ListSocialMedia;
