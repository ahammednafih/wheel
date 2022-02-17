import React from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

import { MENUBAR_MAIN_ITEMS } from "./constants";

const Menubar = ({ showMenu = false }) => {
  return (
    <MenuBar showMenu={showMenu} title="Notes">
      {MENUBAR_MAIN_ITEMS.map(menubarItem => (
        <MenuBar.Block
          {...menubarItem}
          key={menubarItem.label}
          active={menubarItem.label === "All"}
        />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
    </MenuBar>
  );
};

export default Menubar;
