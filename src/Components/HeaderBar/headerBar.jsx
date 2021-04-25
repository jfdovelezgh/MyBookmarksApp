import React from "react";
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  headerTypography: {
    flex: 1
  }
}));

const HeaderBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.headerTypography}>
          My Bookmarks
        </Typography>
        <AccountCircle />
      </Toolbar>
    </AppBar>
  )
}

export default HeaderBar;