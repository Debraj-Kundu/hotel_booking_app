import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginMutation } from "../../api/apiSlice";

const Login = () => {
  const [login] = useLoginMutation();
  

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      login(formik.values);
    },
    validationSchema: Yup.object({
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

export default Login;
