import React, { createContext, useContext, useState } from 'react';

const GlobalDataContext = createContext();

export const useGlobalData = () => {
  return useContext(GlobalDataContext);
};

export const GlobalDataProvider = ({ children }) => {
  const [globalData, setGlobalData] = useState({
    points: 0,
  });

  const updateGlobalData = (newData) => {
    setGlobalData({ ...globalData, ...newData });
  };

  return (
    <GlobalDataContext.Provider value={{ globalData, updateGlobalData }}>
      {children}
    </GlobalDataContext.Provider>
  );
};