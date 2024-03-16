import React from "react";
import TableHead from "../ui/TableHead";
import CreateNewPostHeader from "./CreateNewPostHeader";
import TableItems from "./TableItems";

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
