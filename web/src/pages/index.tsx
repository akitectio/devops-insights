import React from "react";
import withAuth from "../hocs/withAuth";

function HomePage() {
  return <div>Welcome to the Home Page!</div>;
}

export default withAuth(HomePage);
