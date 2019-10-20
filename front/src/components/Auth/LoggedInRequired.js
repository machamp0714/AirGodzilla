import React from "react";
import {Redirect} from "react-router-dom";

const LoggedInRequired = ({WrappedComponent, loggedInStatus}) => {
  console.log(WrappedComponent);
  if (!loggedInStatus) {
    return <Redirect to="/signin" />;
  }

  return <WrappedComponent />;
};

export default LoggedInRequired;
