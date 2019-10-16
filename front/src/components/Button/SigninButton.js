import React from "react";
import Button from "@material-ui/core/Button";
import SigninModal from "../../containers/Auth/SigninModal";

const SigninButton = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <li>
      <Button color="inherit" onClick={handleOpen}>
        ログイン
      </Button>
      <SigninModal open={open} handleClose={handleClose} />
    </li>
  );
};

export default SigninButton;
