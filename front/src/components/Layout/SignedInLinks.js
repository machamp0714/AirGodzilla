import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Menu, MenuItem, Button } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  navMenu: {
    marginLeft: "auto"
  }
}));

const SignedInLinks = ({ logout }) => {
  const classes = useStyles();

  const [anchorEl, setState] = React.useState(null);

  const handleMenu = (e) => {
    setState(e.currentTarget);
  };

  const handleClose = () => {
    setState(null);
  };

  return (
    <div className={classes.navMenu}>
      <Button>
        <NavLink to="/become-a-host">Create Room</NavLink>
      </Button>
      <IconButton
        aria-label="current user"
        aria-controls="menu"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu"
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My Rooms</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default SignedInLinks;
