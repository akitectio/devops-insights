import { Formik, Form } from "formik";
import React from "react";
import Button from "@components/common/Button";
import { Input, Image } from "@components/common";

interface FormValues {
  username: string;
  password: string;
}

const LoginForm = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex min-h-full">
          <Image
            className="mx-auto w-auto"
            src="/logo.png"
            alt="Your Company"
            width={100}
            height={100}
          />
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Formik
          className="space-y-6"
          initialValues={{ username: "", password: "" }}
          validate={(values: FormValues) => {
            const errors: Partial<FormValues> = {};

            if (!values.username) {
              errors.username = "Required";
            }

            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={(values: FormValues) => {
            console.log(values);
          }}
        >
          <Form>
            <Input
              groupClassName="mb-3"
              name="username"
              type="text"
              placeholder="Username"
            />
            <Input
              groupClassName="mb-3"
              name="password"
              type="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
