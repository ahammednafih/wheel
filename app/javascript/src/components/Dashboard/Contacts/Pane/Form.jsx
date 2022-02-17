import React from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane, Toastr } from "neetoui";
import { Input, Select } from "neetoui/formik";

import { CONTACT_ROLES, CONTACT_VALIDATION_SCHEMA } from "./constants";

const ContactForm = ({ isEdit, onClose, contact, setContacts }) => {
  const handleSubmit = ({ id, ...values }) => {
    const contactValues = {
      ...values,
      id: isEdit ? id : new Date().getTime(),
      createdAt: "Feb, 5, 2021",
    };

    if (isEdit) {
      setContacts(currentContacts =>
        currentContacts.map(currentContact => {
          if (id === currentContact.id) return contactValues;

          return currentContact;
        })
      );
      Toastr.success("Contact updated successfully.");
    } else {
      setContacts(currentContacts => [...currentContacts, contactValues]);
      Toastr.success("Contact added successfully.");
    }

    onClose();
  };

  return (
    <Formik
      initialValues={contact}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <div className="flex w-full justify-between">
              <Input
                required
                label="First Name"
                name="firstName"
                className="mr-6"
              />
              <Input required label="Last Name" name="lastName" />
            </div>
            <Input
              required
              label="Email"
              name="email"
              className="w-full flex-grow-0"
            />
            <Select
              required
              label="Role"
              name="role"
              options={CONTACT_ROLES}
              placeholder="Select Role"
              className="w-full flex-grow-0"
            />
          </Pane.Body>
          <Pane.Footer className="border-t">
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              icon={Check}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
