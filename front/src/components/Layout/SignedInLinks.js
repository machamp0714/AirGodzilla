import React from "react";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authAction";

import { withStyles } from "@material-ui/styles";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

const styles = {
  root: {
    marginLeft: "auto"
  }
};

class SignedInLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleLogoutClick = () => {
    this.props.logout();
  };

  handleMenu = (e) => {
    this.setState({
      anchorEl: e.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          aria-label="current user"
          aria-controls="menu"
          aria-haspopup="true"
          onClick={this.handleMenu}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="menu"
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose}>My Rooms</MenuItem>
          <MenuItem onClick={this.handleClose}>
            <a href="/" onClick={this.handleLogoutClick}>
              Logout
            </a>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(SignedInLinks));
