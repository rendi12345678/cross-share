import React from "react";
import PostTable from "../container/PostTable";
import Top from "../ui/Top";

function Dashboard() {
  return (
    <>
      <Top title="Dashboard" />
      <PostTable />
    </>
  );
}

export default Dashboard;
