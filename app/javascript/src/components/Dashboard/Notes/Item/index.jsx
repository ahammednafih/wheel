import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown, Tag, Tooltip, Avatar } from "neetoui";

import TimeWithStatus from "./TimeWithStatus";
import { randomStatus } from "./utils";

const Item = ({ note, handleEdit, handleDelete }) => {
  return (
    <>
      <div className="neeto-ui-shadow-xs mb-4 border p-4">
        <div className="mb-3 border-b">
          <div className="flex justify-between">
            <Typography style="h4" weight="semibold" lineHeight="normal">
              {note.title}
            </Typography>
            <Dropdown
              buttonStyle="text"
              label=""
              position="bottom-end"
              icon={MenuVertical}
              trigger="hover"
            >
              <li onClick={() => handleEdit(note)}>Edit</li>
              <li onClick={() => handleDelete(note.id)}>Delete</li>
            </Dropdown>
          </div>
          <Typography
            style="body2"
            lineHeight="tight"
            className="neeto-ui-text-gray-600 mb-3 mt-0.5"
          >
            {note.description}
          </Typography>
        </div>
        <div className="flex h-6 justify-between">
          <Tag
            label="Getting Started"
            className="neeto-ui-bg-gray-100 neeto-ui-text-gray-600 my-0.5 leading-4"
          />
          <div className="flex items-center">
            <Tooltip position="bottom-end" content="Wednesday, 10:30AM">
              <TimeWithStatus label={`${randomStatus()} 2 hours ago`} />
            </Tooltip>
            <Avatar
              size="small"
              user={{
                name: "Oliver Smith",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
