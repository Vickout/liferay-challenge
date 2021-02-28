import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const RepositoriesContext = createContext();

export function RepositoriesProvider({ children, ...rest }) {
  const [repository, setRepository] = useState('');
  const [reposList, setReposList] = useState([]);
  const [isPopoverActive, setIsPopoverActive] = useState(false);

  const [hasError, setHasError]  = useState(false);

  const showPopover = useCallback(() => {
    setIsPopoverActive(active => !active)
  }, []);

  const handleAddRepository = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`repos/${repository}`);

      setIsPopoverActive(false);
      setReposList([...reposList, response.data])
    } catch (error) {
      setHasError(true);
    }
  }, [repository]);
  return (
    <RepositoriesContext.Provider
      value={{
        handleAddRepository,
        setRepository,
        repository,
        showPopover,
        isPopoverActive,
        reposList,
        hasError,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
}
