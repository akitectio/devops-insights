import { Formik, Form } from "formik";
import React from "react";
import { Input, Image, Button } from "@components/common";
import * as Yup from "yup";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { loginRequest } from "@redux/auth/slice";

interface FormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  const { t } = useTranslation(["login"]);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    username: Yup.string().required(t("login:username_required")),
    password: Yup.string().required(t("login:password_required")),
  });

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex min-h-full">
          <Image
            className="mx-auto w-auto"
            src="/logo.png"
            alt="Your Company"
            priority={true}
            width={100}
            height={100}
          />
        </div>
        <h1 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {t("login:sign_in")}
        </h1>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          className="space-y-6"
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values: FormValues) => {
            console.log(values);
            dispatch(loginRequest(values));
          }}
        >
          <Form>
            <Input
              groupClassName="mb-3"
              name="username"
              type="text"
              placeholder={t("login:username")}
            />
            <Input
              groupClassName="mb-3"
              name="password"
              type="password"
              placeholder={t("login:password")}
            />
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t("login:btn_sign_in")}
            </Button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
