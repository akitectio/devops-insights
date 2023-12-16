import React from "react";
import withAuth from "@hooks/useAuth";

const HomePage = () => {
  return <div>Welcome to the Home Page!</div>;
};

export default withAuth(HomePage);
