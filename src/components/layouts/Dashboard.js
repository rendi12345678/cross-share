import React from "react";
import PostTable from "../container/PostTable";
import LayoutTitle from "../ui/LayoutTitle";

function Dashboard() {
  return (
    <>
      <LayoutTitle title="Dashboard" />
      <PostTable />
    </>
  )
}

export default Dashboard;
