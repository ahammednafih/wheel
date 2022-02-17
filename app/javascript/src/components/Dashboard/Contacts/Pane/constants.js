import * as yup from "yup";

export const CONTACT_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: "",
};

export const CONTACT_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Invalid email address").required("Required"),
  role: yup.object().required("Required"),
});

export const CONTACT_ROLES = [
  {
    label: "Owner",
    value: 1,
  },
  {
    label: "Admin",
    value: 2,
  },
];
