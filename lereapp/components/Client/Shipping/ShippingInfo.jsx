import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { TextField, MenuItem, Select } from "@material-ui/core";
import { object, string, number } from "yup";
const initialValues = {
  fullName: "",
  email: "",
  telephoneNumber: "",
  city: -1,
  district: -1,
  ward: -1,
  address: "",
};

const city = [
  {
    idCity: 1,
    nameCity: "Hồ chí Minh",
  },
  {
    idCity: 1,
    nameCity: "Hà Nội",
  },
];
const district = [
  {
    idDistrct: 1,
    idCity: 1,
    nameCity: "Go Vap",
  },
  {
    idDistrct: 2,
    idCity: 1,
    nameCity: "Phu Nhuan",
  },
  {
    idDistrct: 3,
    idCity: 2,
    nameCity: "Hang Buom",
  },
  {
    idDistrct: 4,
    idCity: 2,
    nameCity: "Pho Ha Noi",
  },
];
const ward = [
  {
    idWard: 1,
    idDistrct: 1,
    nameCity: "Go Vap w",
  },
  {
    idWard: 2,
    idDistrct: 1,
    nameCity: "Phu Nhuan w",
  },
  {
    idWard: 3,
    idDistrct: 2,
    nameCity: "Hang Buom w",
  },
  {
    idDistrct: 4,
    idDistrct: 2,
    nameCity: "Pho Ha Noi w",
  },
];
const renderCity = () => {
  return city.map((item, index) => (
    <option key={index} value={index + 1}>
      {item.nameCity}
    </option>
  ));
};
const renderDistrict = (values) => {
  const ef = parseInt(values);
  return district
    .filter((e) => e.idCity == ef)
    .map((item, index) => (
      <option key={index} value={index + 1}>
        {item.nameCity}
      </option>
    ));
};
const renderWard = (values) => {
  const ef = parseInt(values);
  return ward
    .filter((e) => e.idDistrct == ef)
    .map((item, index) => (
      <option key={index} value={index + 1}>
        {item.nameCity}
      </option>
    ));
};
const ShippingInfo = (props) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 1000);
        }}
        validationSchema={object({
          fullName: string().required("Full Name is required").min(6).max(100),
          email: string().required("Email is required").min(10).max(100),
          telephoneNumber: number().required("TelephoneNumber is required"),
          city: number().required("City is required").min(0),
          district: number().required("District is required").min(0),
          ward: number().required("Ward is required").min(0),
        })}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Field name="fullName" placeholder="Họ và tên" />
            <Field name="email" type="email" placeholder="VD:dsdsd@gmail.com" />
            <ErrorMessage name="fullName" />
            <Field
              name="telephoneNumber"
              type="number"
              placeholder="02323242"
            />
            <Field name="city" as="select" onChange={handleChange}>
              <option defaultValue hidden>
                Chọn City
              </option>
              {renderCity()}
            </Field>
            <Field name="district" as="select" onChange={handleChange}>
              <option defaultValue hidden>
                Chọn Quan
              </option>
              {renderDistrict(values.city)}
            </Field>
            <Field name="ward" as="select">
              <option defaultValue hidden>
                Chọn Phường
              </option>
              {renderWard(values.district)}
            </Field>
            <Field name="address" />
            <pre>{JSON.stringify(errors, null, 7)}</pre>
            <pre>{JSON.stringify(values, null, 7)}</pre>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ShippingInfo;
