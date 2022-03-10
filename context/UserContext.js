import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserStateProvider = (props) => {
  // eslint-disable-next-line
  const [userId, setUserId] = useState(0);

  return (
    <UserContext.Provider value={[userId, setUserId]}>
      {props.children}
    </UserContext.Provider>
  );
};
