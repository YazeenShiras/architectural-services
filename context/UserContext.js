import React, { useState, createContext } from "react";

export const MobileContext = createContext();

export const UserStateProvider = (props) => {
  // eslint-disable-next-line
  const [mobileForOTP, setMobileForOTP] = useState("");

  return (
    <MobileContext.Provider value={[mobileForOTP, setMobileForOTP]}>
      {props.children}
    </MobileContext.Provider>
  );
};
