import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import SigninModal from "../Modal/SigninModal";

const SignedOutLinks = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ul className="navMenu">
      <li>
        <Button color="inherit">
          <NavLink className="navlink" to="/signup">
            新規登録
          </NavLink>
        </Button>
      </li>
      <li>
        <Button color="inherit" onClick={handleOpen}>
          ログイン
        </Button>
        <SigninModal open={open} handleClose={handleClose} />
      </li>
    </ul>
  );
};

export default SignedOutLinks;
