import { createContext, useState } from "react";

export const SearchContextValue = createContext();

const SearchContext = ({ children }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <SearchContextValue.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContextValue.Provider>
  );
};

export default SearchContext;
