import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateHotelMutation } from "../../api/apiSlice";

const CreateHotel = () => {
  const [createHotel] = useCreateHotelMutation();

  const formik = useFormik({
    initialValues: {
      name: "",
      type: "",
      city: "",
      address: "",
      distance: "",
      title: "",
      desc: "",
      cheapestPrice: 0,
    },
    onSubmit: (values) => {
      createHotel(formik.values);
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      type: Yup.string().required("type is required"),
      city: Yup.string().required("city is required"),
      address: Yup.string().required("address is required"),
      distance: Yup.string().required("distance is required"),
      title: Yup.string().required("tite is required"),
      desc: Yup.string().required("desc is required"),
      cheapestPrice: Yup.string().required("cheapestPrice is required"),
    }),
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input
            name="name"
            placeholder="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.name && formik.touched.name && formik.errors.name}
          </div>
        </div>
        <div>
          <input
            name="type"
            placeholder="type"
            value={formik.values.type}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.type && formik.touched.type && formik.errors.type}
          </div>
        </div>
        <div>
          <input
            name="city"
            placeholder="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.city && formik.touched.city && formik.errors.city}
          </div>
        </div>
        <div>
          <input
            name="address"
            placeholder="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.address &&
              formik.touched.address &&
              formik.errors.address}
          </div>
        </div>
        <div>
          <input
            name="distance"
            placeholder="distance"
            value={formik.values.distance}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.distance &&
              formik.touched.distance &&
              formik.errors.distance}
          </div>
        </div>
        <div>
          <input
            name="title"
            placeholder="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.title && formik.touched.title && formik.errors.title}
          </div>
        </div>
        <div>
          <input
            name="desc"
            placeholder="desc"
            value={formik.values.desc}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.desc && formik.touched.desc && formik.errors.desc}
          </div>
        </div>
        <div>
          <input
            name="cheapestPrice"
            placeholder="cheapestPrice"
            value={formik.values.cheapestPrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div className="errors">
            {formik.errors.cheapestPrice &&
              formik.touched.cheapestPrice &&
              formik.errors.cheapestPrice}
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateHotel;
