// src/hocs/withAuth.tsx
import React, { useEffect, FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../store/rootState"; // Import your root state type

const withAuth = (WrappedComponent: FunctionComponent) => {
  const RequiresAuth: FunctionComponent = (props) => {
    const router = useRouter();
    const isLoggedIn = useSelector(
      (state: RootState) => state.auth?.isLoggedIn
    );

    useEffect(() => {
      if (!isLoggedIn) {
        router.replace("/login");
      }
    }, [isLoggedIn, router]);

    if (!isLoggedIn) {
      return null; // Or a loading indicator
    }

    return <WrappedComponent {...props} />;
  };

  return RequiresAuth;
};

export default withAuth;
