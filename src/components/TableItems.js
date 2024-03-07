import React from "react";
import TableItem from "./ui/TableItem";

function TableItems() {
  const tableItems = [
    {
      media: "/logo192.png",
      text: "New React js 19 is Launched !!",
    },
    {
      media: "/logo192.png",
      text: "Lorem ipsum dolor sr veniam earum! !!",
    },
    {
      media: "/logo192.png",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, similique! !!",
    },
  ];

  return (
    <>
      {tableItems.map(({ media, text }, index) => (
        <TableItem no={index + 1} media={media} text={text} />
      ))}
    </>
  );
}

export default TableItems;
