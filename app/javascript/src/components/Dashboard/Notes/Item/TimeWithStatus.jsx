import React, { forwardRef } from "react";

import { Clock } from "neetoicons";
import { Typography } from "neetoui";

const TimeWithStatus = forwardRef(({ label }, ref) => (
  <div ref={ref} className="neeto-ui-text-gray-600 m-2 flex h-4 items-center">
    <Clock size={12} className="mr-2" />
    <Typography style="body3" className="leading-4">
      {label}
    </Typography>
  </div>
));

TimeWithStatus.displayName = "TimeWithStatus";

export default TimeWithStatus;
