import React, { useState } from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({
  setContacts,
  onClose,
  selectedContactId,
  setSelectedContactId,
}) => {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = () => {
    setDeleting(true);
    setContacts(contacts =>
      contacts.filter(currentContact => currentContact.id !== selectedContactId)
    );
    Toastr.success("Contact deleted successfully.");
    onClose();
    setSelectedContactId(0);
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to delete the contact? This action cannot be undone."
      title="Delete contact"
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
