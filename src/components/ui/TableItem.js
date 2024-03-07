import React from "react";
import Button from "./Button";

function TableItem({ no, media, text }) {
  return (
    <tr>
      <td aria-label="No">{no}</td>
      <td aria-label="Media">
        <img src={media} alt="media" />
      </td>
      <td aria-label="Text">{text}</td>
      <td aria-label="Actions" className="actions">
        <Button bgColor="orange">Update</Button>
        <Button bgColor="red">Delete</Button>
      </td>
    </tr>
  );
}

export default TableItem;
