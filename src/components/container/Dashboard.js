import React from "react";
import LayoutTitle from "../ui/LayoutTitle";
import PostTable from "./PostTable";

function Dashboard() {
  return (
    <>
      <LayoutTitle title="Dashboard" />
      <PostTable />
    </>
  );
}

export default Dashboard;
