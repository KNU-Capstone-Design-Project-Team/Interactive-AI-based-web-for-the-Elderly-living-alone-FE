import React, { createContext, useState } from "react";

export const SupervisorContext = createContext();

export const SupervisorContextProvider = ({ children }) => {
    const [supervisorCode, setSupervisorCode] = useState("");

  return (
    <SupervisorContext.Provider 
    value={{supervisorCode, setSupervisorCode }}>
      {children}
    </SupervisorContext.Provider>
  );
};
