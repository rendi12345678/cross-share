import React from "react";

function Item({ platform, reactions, comments, shared }) {
  return (
    <li>
      <h4>{platform}</h4>
      <p>Reactions : {reactions}</p>
      <p>Comments : {comments}</p>
      <p>Shared : {shared}</p>
    </li>
  );
}

export default Item;
