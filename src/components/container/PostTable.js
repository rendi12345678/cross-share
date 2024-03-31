import React from "react";
import TableHead from "./../ui/TableHead";
import CreateNewPostHeader from "./CreateNewPostHeader";
import DeletePostModal from "./DeletePostModal";
import TableItems from "./TableItems";
import UpdatePostModal from "./UpdatePostModal";
function PostTable() {
  return (
    <>
      <CreateNewPostHeader />
      <DeletePostModal />
      <UpdatePostModal />
      <table>
        <TableHead />
        <TableItems />
      </table>
    </>
  );
}

export default PostTable;
