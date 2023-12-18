import React, { ComponentType, useEffect, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { isLoggedInSelector } from "@redux/auth/selectors";

const withAuth = (WrappedComponent: ComponentType<any>) => {
  return (props: PropsWithChildren<{}>) => {
    const isLoggedIn = useSelector(isLoggedInSelector);
    const router = useRouter();

    useEffect(() => {
      if (!isLoggedIn) {
        router.push("/login");
      }
    }, [isLoggedIn, router]);

    return isLoggedIn ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
