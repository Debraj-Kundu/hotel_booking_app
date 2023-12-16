import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useCreateHotelMutation } from "../../api/apiSlice";
import Input from "../../components/form-input/Input";

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
      cheapestPrice: "",
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
          <Input name={"name"} value={formik.values.name} formik={formik} />
          <div className="errors">
            {formik.errors.name && formik.touched.name && formik.errors.name}
          </div>
        </div>
        <div>
          <Input name="type" value={formik.values.type} formik={formik} />
          <div className="errors">
            {formik.errors.type && formik.touched.type && formik.errors.type}
          </div>
        </div>
        <div>
          <Input name="city" value={formik.values.city} formik={formik} />
          <div className="errors">
            {formik.errors.city && formik.touched.city && formik.errors.city}
          </div>
        </div>
        <div>
          <Input name="address" value={formik.values.address} formik={formik} />
          <div className="errors">
            {formik.errors.address &&
              formik.touched.address &&
              formik.errors.address}
          </div>
        </div>
        <div>
          <Input
            name="distance"
            value={formik.values.distance}
            formik={formik}
          />
          <div className="errors">
            {formik.errors.distance &&
              formik.touched.distance &&
              formik.errors.distance}
          </div>
        </div>
        <div>
          <Input name="title" value={formik.values.title} formik={formik} />
          <div className="errors">
            {formik.errors.title && formik.touched.title && formik.errors.title}
          </div>
        </div>
        <div>
          <Input name="desc" value={formik.values.desc} formik={formik} />
          <div className="errors">
            {formik.errors.desc && formik.touched.desc && formik.errors.desc}
          </div>
        </div>
        <div>
          <Input
            name="cheapestPrice"
            value={formik.values.cheapestPrice}
            formik={formik}
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
