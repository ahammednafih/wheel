import React from "react";

import { Avatar, Typography } from "neetoui";

const NameWithRole = ({ contact }) => {
  const fullName = `${contact.firstName} ${contact.lastName}`;
  return (
    <div className="flex items-center">
      <Avatar size="large" user={{ name: fullName }} className="mr-3" />
      <div>
        <Typography style="h5">{fullName}</Typography>
        <Typography
          style="body3"
          lineHeight="tight"
          className="neeto-ui-text-gray-600"
        >
          {contact.role?.label}
        </Typography>
      </div>
    </div>
  );
};

export default NameWithRole;
