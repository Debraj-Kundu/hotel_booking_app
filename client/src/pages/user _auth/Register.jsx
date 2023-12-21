import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { useRegisterMutation } from "../../features/users/userSlice";

const Register = () => {
  const [register] = useRegisterMutation();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      register(formik.values);
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
      password: Yup.string().required("Password is required"),
    }),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            name="username"
            placeholder="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.username &&
              formik.touched.username &&
              formik.errors.username}
          </div>
        </div>
        <div>
          <input
            name="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </div>
        </div>
        <div>
          <input
            name="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.password &&
              formik.touched.password &&
              formik.errors.password}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
