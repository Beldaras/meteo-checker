import { createContext, useState } from "react";

const currentUserContext = createContext();

export default currentUserContext;

export const CurrentUserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <CurrentUserProvider.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserProvider.Provider>
  );
};
