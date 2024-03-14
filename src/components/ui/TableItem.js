import React from "react";
import useButtons from "../../hooks/useButtons";

function TableItem({ no, media, title, status }) {
  const {EditButton, DeleteButton} = useButtons()
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
        <td aria-label="Title">{title}</td>
        <td aria-label="Status" style={statusStyles}>
          {status}
        </td>
        <td aria-label="Actions" className="actions">
          <EditButton text="Update"/>
          <DeleteButton text="Delete"/>
        </td>
      </tr>
    </tbody>
  );
}

export default TableItem;
