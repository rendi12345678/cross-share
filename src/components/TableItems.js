import React from "react";
import TableItem from "./ui/TableItem";

function TableItems() {
  const tableItems = [
    {
      media: "/logo192.png",
      text: "New React js 19 is Launched !!",
      status: "Uploaded",
    },
    {
      media: "/logo192.png",
      text: "Lorem ipsum dolor sr veniam earum! !!",
      status: "Pending",
    },
    {
      media: "/logo192.png",
      text: "Lorepm ipsum dolor sit amet consectetur adipisicing elit. Ea, similique! !!",
      status: "Pending",
    },
    {
      media: "/logo192.png",
      text: "I do love React Js !!",
      status: "Uploaded",
    },
  ];

  return (
    <>
      {tableItems.map(({ media, text, status }, index) => (
        <TableItem
          key={index + 1}
          no={index + 1}
          media={media}
          status={status}
          text={text}
        />
      ))}
    </>
  );
}

export default TableItems;
