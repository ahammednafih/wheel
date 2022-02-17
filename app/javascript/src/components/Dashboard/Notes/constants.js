import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assigned_contacts: [],
  tags: [],
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assigned_contacts: yup
    .array()
    .required("Required")
    .min(1, "Select at least a role"),
  tags: yup.array().required("Required").min(1, "Select at least a tag"),
});
