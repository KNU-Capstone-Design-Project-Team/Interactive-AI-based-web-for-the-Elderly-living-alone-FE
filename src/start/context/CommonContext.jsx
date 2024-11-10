import React, { createContext, useState } from "react";

export const CommonContext = createContext();

export const CommonContextProvider = ({ children }) => {
  const [userType, setUserType] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPnum, setUserPnum] = useState("");


  return (
    <CommonContext.Provider 
    value={{ 
      userType,
      setUserType,
      userName,
      setUserName,
      userId,
      setUserId,
      userPw,
      setUserPw,
      userPnum,
      setUserPnum

       }}>
      {children}
    </CommonContext.Provider>
  );
};
