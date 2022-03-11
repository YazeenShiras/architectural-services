import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginStateProvider = (props) => {
  // eslint-disable-next-line
  const [loginNumber, setLoginNumber] = useState("");

  return (
    <LoginContext.Provider value={[loginNumber, setLoginNumber]}>
      {props.children}
    </LoginContext.Provider>
  );
};
