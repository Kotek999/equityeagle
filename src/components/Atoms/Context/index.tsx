import React, { createContext, useState } from "react";
import { ContextType, DataProviderProps } from "../../../types";

const DataContext: React.Context<ContextType> = createContext<any>(0);

const DataProvider = (props: DataProviderProps) => {
  const [status, setStatus] = useState<number>(0);

  return (
    <DataContext.Provider value={{ status, setStatus }}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
