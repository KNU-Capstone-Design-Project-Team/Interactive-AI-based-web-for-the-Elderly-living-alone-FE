import React, { createContext, useState } from "react";

export const ProcessStateContext = createContext();

export const ProcessStateProvider = ({ children }) => {
  const [processState, setProcessState] = useState('selectType');

  return (
    <ProcessStateContext.Provider value={{ processState, setProcessState }}>
      {children}
    </ProcessStateContext.Provider>
  );
};
