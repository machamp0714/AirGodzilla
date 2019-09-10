import React from "react";
import { Link } from "react-router-dom";
import Signup from "../Auth/Signup";

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <Link to="/signup">新規登録</Link>
      </li>
      <li>
        <a href="#">ログイン</a>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
