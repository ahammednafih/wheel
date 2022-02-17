import React, { useState } from "react";

import { Alert } from "neetoui";

import notesApi from "apis/notes";

const DeleteAlert = ({
  refetch,
  onClose,
  selectedNoteId,
  setSelectedNoteId,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      await notesApi.destroy(selectedNoteId);
      onClose();
      setSelectedNoteId(0);
      refetch();
    } catch (error) {
      logger.error(error);
      setDeleting(false);
    }
  };

  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to delete the note? This action cannot be undone."
      title="Delete note"
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
