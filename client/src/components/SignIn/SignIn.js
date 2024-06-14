import React from "react";
import { Formik, Form, Field } from "formik";

const SignIn = (props) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values, actions) => {
    props.sendData(values);
    actions.resetForm();
  };

  return (
    <>
      <h2>Sign In</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(formikProps) => (
          <Form>
            <Field name="email" placeholder="Type ur email" />
            <Field name="password" placeholder="Type ur password" />
            <button type="submit">Sign in</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignIn;
