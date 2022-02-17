import React from "react";

import { Avatar, Typography } from "neetoui";

const NameWithRole = ({ contact }) => {
  return (
    <div className="flex items-center">
      <Avatar size="large" user={{ name: contact.name }} className="mr-3" />
      <div>
        <Typography style="h5">{contact.name}</Typography>
        <Typography
          style="body3"
          lineHeight="tight"
          className="neeto-ui-text-gray-600"
        >
          {contact.role}
        </Typography>
      </div>
    </div>
  );
};

export default NameWithRole;
