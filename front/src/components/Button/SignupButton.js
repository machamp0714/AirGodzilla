import React from "react";
import Button from "@material-ui/core/Button";
import SignupModal from "../../containers/Auth/SignupModal";
const SignupButton = () => {
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
        新規登録
      </Button>
      <SignupModal open={open} handleClose={handleClose} />
    </li>
  );
};

export default SignupButton;
