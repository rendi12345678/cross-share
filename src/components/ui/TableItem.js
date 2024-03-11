import React from "react";
import Button from "./Button";

function TableItem({ no, media, text, status }) {
  const statusStyles =
    status === "Uploaded"
      ? {
          color: "#00ff00",
        }
      : {
          color: "yellow",
        };

  return (
    <tbody>
      <tr>
        <td aria-label="No">{no}</td>
        <td aria-label="Media">
          <img src={media} alt="media" />
        </td>
        <td aria-label="Text">{text}</td>
        <td aria-label="Status" style={statusStyles}>
          {status}
        </td>
        <td aria-label="Actions" className="actions">
          <Button bgColor="orange">Update</Button>
          <Button bgColor="red">Delete</Button>
        </td>
      </tr>
    </tbody>
  );
}

export default TableItem;
