import { createContext, useContext, useEffect, useState } from 'react';

type SearchContextType = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCheckboxes: string[];
  setSelectedCheckboxes: (items: string[]) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem('searchTerm');
    const storedCheckboxes = localStorage.getItem('selectedCheckboxes');

    if (storedSearchTerm) setSearchTerm(storedSearchTerm);
    console.log('Loaded searchTerm from localStorage:', storedSearchTerm);
    if (storedCheckboxes) setSelectedCheckboxes(JSON.parse(storedCheckboxes));
    console.log(
      'Loaded selectedCheckboxes from localStorage:',
      storedCheckboxes
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('searchTerm', searchTerm);
    localStorage.setItem(
      'selectedCheckboxes',
      JSON.stringify(selectedCheckboxes)
    );
  }, [searchTerm, selectedCheckboxes]);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        selectedCheckboxes,
        setSelectedCheckboxes,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};

//! ////////////////////////////////////////////////////////////////////////////////////////////////////////
