import React, { useState, createContext } from "react";

export const LoginNumberContext = createContext();

export const LoginNumberStateProvider = (props) => {
  // eslint-disable-next-line
  const [loginNumber, setLoginNumber] = useState("");

  return (
    <LoginNumberContext.Provider value={[loginNumber, setLoginNumber]}>
      {props.children}
    </LoginNumberContext.Provider>
  );
};
