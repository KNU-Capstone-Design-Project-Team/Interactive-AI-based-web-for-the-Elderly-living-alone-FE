import React, { createContext, useState } from "react";

export const SeniorContext = createContext();

export const SeniorContextProvider = ({ children }) => {


  return (
    <SeniorContext.Provider 
    value={{ 

       }}>
      {children}
    </SeniorContext.Provider>
  );
};
