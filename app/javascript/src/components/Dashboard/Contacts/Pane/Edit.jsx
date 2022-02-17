import React from "react";

import { Pane, Typography } from "neetoui";

import ContactForm from "./Form";

const EditContactPane = ({ showPane, setShowPane, setContacts, contact }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Edit Contact
        </Typography>
      </Pane.Header>
      <ContactForm
        isEdit
        onClose={onClose}
        setContacts={setContacts}
        contact={contact}
      />
    </Pane>
  );
};

export default EditContactPane;
