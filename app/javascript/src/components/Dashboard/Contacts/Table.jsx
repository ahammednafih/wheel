import React, { useState, useMemo } from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Dropdown } from "neetoui";

import { CONTACTS_TABLE_COLUMN_DATA, TABLE_PAGE_SIZE } from "./constants";
import NameWithRole from "./NameWithRole";

const nameWithRoleRenderer = (_, contact) => <NameWithRole contact={contact} />;

const Table = ({ contacts = [], handleEdit, handleDelete }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const tableColumnData = useMemo(
    () =>
      CONTACTS_TABLE_COLUMN_DATA.map(columnData => {
        if (columnData.key === "nameAndRole") {
          return {
            ...columnData,
            render: nameWithRoleRenderer,
          };
        }

        if (columnData.key === "actionButtons") {
          return {
            ...columnData,
            render: (_, contact) => (
              <Dropdown
                icon={MenuHorizontal}
                buttonStyle="text"
                trigger="hover"
              >
                <li onClick={() => handleEdit(contact)}>Edit</li>
                <li onClick={() => handleDelete(contact.id)}>Delete</li>
              </Dropdown>
            ),
          };
        }

        return columnData;
      }),
    []
  );

  return (
    <>
      <div className="notes-table-height w-full">
        <NeetoUITable
          allowRowClick
          fixedHeight
          rowData={contacts}
          columnData={tableColumnData}
          currentPageNumber={currentPage}
          handlePageChange={page => setCurrentPage(page)}
          defaultPageSize={TABLE_PAGE_SIZE}
        />
      </div>
    </>
  );
};

export default Table;
