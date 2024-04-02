import { createContext, useState, useContext } from "react";
import prodect from "./prodect";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [prodects, setProdects] = useState(prodect);
  const [prodectQuantity, setProdectQuantity] = useState(prodects.length);
  const [prodectAmount, setProdectAmount] = useState(0);
  return (
    <UserContext.Provider
      value = {{
        prodects,
        setProdects,
        prodectQuantity,
        setProdectQuantity,
        prodectAmount,
        setProdectAmount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
