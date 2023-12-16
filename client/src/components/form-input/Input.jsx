import React from "react";

const Input = ({name, value, formik}) => {
  return (
    <input
      name={name}
      placeholder={name}
      value={value}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
    />
  );
};

export default Input;
