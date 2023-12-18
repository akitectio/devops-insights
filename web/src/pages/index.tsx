import React from "react";
import withAuth from "@/src/hooks/withAuth";

const HomePage = () => {
  return <div>Welcome to the Home Page!</div>;
};

export default withAuth(HomePage);
