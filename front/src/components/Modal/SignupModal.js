import React from "react";
import Modal from "@material-ui/core/Modal";
import TypoGraphy from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 380,
    backgroundColor: "#fff",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 3
  },
  textField: {
    width: 380,
    marginTop: 20
  },
  button: {
    width: 380,
    marginTop: 20,
    textAlign: "center",
    boxShadow: "none"
  }
}));

const SignupModal = ({ open, handleClose, signup }) => {
  const classes = useStyles();

  const [values, setState] = React.useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setState({
      ...values,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    const params = {
      user: values
    };
    signup(params);

    e.preventDefault();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.paper}>
        <TypoGraphy variant="h6">新規登録</TypoGraphy>
        <Divider />
        <form noValidate method="post">
          <TextField
            id="name"
            name="name"
            type="text"
            placeholder="ユーザー名"
            onChange={handleChange}
            variant="outlined"
            className={classes.textField}
            autoComplete="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              )
            }}
          />
          <TextField
            id="email"
            name="email"
            type="text"
            placeholder="メールアドレス"
            onChange={handleChange}
            variant="outlined"
            className={classes.textField}
            autoComplete="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineIcon />
                </InputAdornment>
              )
            }}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="パスワード"
            onChange={handleChange}
            variant="outlined"
            className={classes.textField}
            autoComplete="new-password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              )
            }}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            onClick={handleSubmit}
          >
            新規登録
          </Button>
        </form>
      </div>
    </Modal>
  );
};

export default SignupModal;
