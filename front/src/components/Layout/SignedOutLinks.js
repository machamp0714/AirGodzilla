import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="/signup">新規登録</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
