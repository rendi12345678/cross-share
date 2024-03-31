import React from "react";
import Item from "../ui/Item";

function ListSocialMediaPosts({ items }) {
  return (
    <ul className="list-social-media-posts">
      {items.map(({ title, reactions, comments, shared }, index) => (
        <Item
          key={index + 1}
          title={title}
          reactions={reactions}
          comments={comments}
          shared={shared}
        />
      ))}
    </ul>
  );
}

export default ListSocialMediaPosts;
