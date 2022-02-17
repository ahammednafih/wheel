import React from "react";

import { Pane, Typography } from "neetoui";

import { CONTACT_INITIAL_VALUES } from "./constants";
import ContactForm from "./Form";

const NewContactPane = ({ setContacts, showPane, setShowPane }) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <ContactForm
        onClose={onClose}
        setContacts={setContacts}
        contact={CONTACT_INITIAL_VALUES}
        isEdit={false}
      />
    </Pane>
  );
};

export default NewContactPane;
