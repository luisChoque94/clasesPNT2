import { createContext, useState, useContext, useEffect } from "react";

export const CronometroContext = createContext(false);

export const CronometroProvider = ({ children }) => {
  const [isRunning, setIsRunning] = useState(false);
  const [isWorking, setIsWorking] = useState(true);

  return (
    <CronometroContext.Provider
      value={{ isRunning, setIsRunning, isWorking, setIsWorking }}
    >
      {children}
    </CronometroContext.Provider>
  );
};

export const useCronometro = () => {
  const useCronometro = useContext(CronometroContext);

  if (!useCronometro) {
    throw new Error("useCronometro must be used within a CronometroProvider");
  }
  return useCronometro;
};
