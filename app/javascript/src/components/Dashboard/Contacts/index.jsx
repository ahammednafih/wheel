import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACTS_LIST } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Menubar from "./Menubar";
import NewContactPane from "./Pane/Create";
import EditContactPane from "./Pane/Edit";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [showNewPane, setShowNewPane] = useState(false);
  const [contacts, setContacts] = useState(CONTACTS_LIST);
  const [selectedContact, setSelectedContact] = useState({});
  const [selectedContactId, setSelectedContactId] = useState(0);
  const [showEditPane, setShowEditPane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const handleEdit = contact => {
    setSelectedContact(contact);
    setShowEditPane(true);
  };

  const handleDelete = id => {
    setSelectedContactId(id);
    setShowDeleteAlert(true);
  };

  return (
    <>
      <Menubar showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              label="Add Contact"
              onClick={() => setShowNewPane(true)}
              icon="ri-add-line"
            />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          menuBarToggle={() => setShowMenu(val => !val)}
        />
        <Table
          contacts={contacts}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <NewContactPane
          setContacts={setContacts}
          showPane={showNewPane}
          setShowPane={setShowNewPane}
        />
        <EditContactPane
          contact={selectedContact}
          setContacts={setContacts}
          showPane={showEditPane}
          setShowPane={setShowEditPane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            onClose={() => setShowDeleteAlert(false)}
            setContacts={setContacts}
            setSelectedContactId={selectedContactId}
            selectedContactId={selectedContactId}
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
