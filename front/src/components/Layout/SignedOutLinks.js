import React from "react";
import SigninButton from "../Button/SigninButton";
import SignupButton from "../Button/SignupButton";

const SignedOutLinks = () => {
  return (
    <ul className="navMenu">
      <SignupButton />
      <SigninButton />
    </ul>
  );
};

export default SignedOutLinks;
