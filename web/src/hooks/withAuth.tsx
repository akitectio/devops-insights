import React, { ComponentType, useEffect, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { isLoggedInSelector } from "@redux/auth/selectors";
import AdminLayout from "@layouts/AdminLayout";
import LoginLayout from "@layouts/LoginLayout";

const withAuth = (WrappedComponent: ComponentType<any>) => {
  return (props: PropsWithChildren<{}>) => {
    const isLoggedIn = useSelector(isLoggedInSelector);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("access_token");
      if (!isLoggedIn && !token) {
        router.push("/login");
      } else if (!isLoggedIn && token) {
        router.push("/dashboard");
      }
    }, [isLoggedIn]);

    // Pass additional props to the WrappedComponent
    return isLoggedIn ? (
      <AdminLayout>
        <WrappedComponent {...props} additionalProp="value" />
      </AdminLayout>
    ) : (
      <LoginLayout>
        <WrappedComponent {...props} additionalProp="value" />
      </LoginLayout>
    );
  };
};

export default withAuth;
