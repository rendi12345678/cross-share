import React from "react";
import TableItems from "./TableItems";
import Button from "./ui/Button";
import TableHead from "./ui/TableHead";

function PostTable() {
  return (
    <>
      <header>
        <h3>Posts</h3>
        <Button bgColor="var(--accent-color)">Create New Post</Button>
      </header>
      <table>
        <TableHead />
        <TableItems />
      </table>
    </>
  );
}

export default PostTable;
