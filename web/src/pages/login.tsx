import React from "react";
import LoginForm from "@components/Login/LoginForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps } from "next";

function LoginPage() {
  return <LoginForm />;
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["login"])),
    },
  };
};

export default LoginPage;
