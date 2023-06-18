import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ValidInput } from "../pages/ValidInput";
import { Todos } from "../pages/Todos";

export const Auth = () => {
  const auth = useSelector((state) => state.auth.auth);

  const dispath = useDispatch();
  const login = () => {
    dispath({ type: "LOGIN" });
  };
  const logout = () => {
    dispath({ type: "LOGOUT" });
  };
  return (
    <div>{auth ? <ValidInput login={logout} /> : <Todos logout={login} />}</div>
  );
};
