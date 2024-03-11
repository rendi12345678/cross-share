import React from "react";
import CreateNewPostHeader from "./CreateNewPostHeader";
import TableItems from "./TableItems";
import TableHead from "./ui/TableHead";

function PostTable() {
  return (
    <>
      <CreateNewPostHeader />
      <table>
        <TableHead />
        <TableItems />
      </table>
    </>
  );
}

export default PostTable;
