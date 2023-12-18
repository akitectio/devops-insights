import React from "react";
import withAuth from "@/src/hooks/withAuth";

export const Dashboard = () => {
  return <div>Welcome to the Home Page!</div>;
};

export default withAuth(Dashboard);
