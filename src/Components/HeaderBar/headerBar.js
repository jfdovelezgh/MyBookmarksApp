import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const HeaderBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>My Bookmarks</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar;