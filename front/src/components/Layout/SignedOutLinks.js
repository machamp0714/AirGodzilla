import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <Button color="inherit">
          <NavLink className="navlink" to="/signup">
            新規登録
          </NavLink>
        </Button>
      </li>
      <li>
        <Button color="inherit">
          <NavLink className="navlink" to="/signin">
            ログイン
          </NavLink>
        </Button>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
