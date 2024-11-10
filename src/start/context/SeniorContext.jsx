import React, { createContext, useState } from "react";

export const SeniorContext = createContext();

export const SeniorContextProvider = ({ children }) => {
    const [birthYear, setBirthYear] = useState(null);
    const [birthMonth, setBirthMonth] = useState(null);
    const [birthDay, setBirthDay] = useState(null);
    const [city, setCity] = useState("");
    const [gu, setGu] = useState("");
    const [dong, setDong] = useState("");
    const [categories, setCategories] = useState([]);
    const [seniorCode, setSeniorCode] = useState([]);

  return (
    <SeniorContext.Provider 
    value={{ 
        birthYear,
        setBirthYear,
        birthMonth,
        setBirthMonth,
        birthDay,
        setBirthDay,
        city,
        setCity,
        gu,
        setGu,
        dong,
        setDong,
        categories,
        setCategories,
        seniorCode,
        setSeniorCode
       }}>
      {children}
    </SeniorContext.Provider>
  );
};
