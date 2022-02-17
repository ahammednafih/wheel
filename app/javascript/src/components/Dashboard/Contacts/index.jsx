import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import { CONTACTS_LIST } from "./constants";
import Menubar from "./Menubar";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <>
      <Menubar showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={<Button label="Add Contact" icon="ri-add-line" />}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
          menuBarToggle={() => setShowMenu(val => !val)}
        />
        <Table
          contacts={CONTACTS_LIST}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </Container>
    </>
  );
};

export default Contacts;
