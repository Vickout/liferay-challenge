import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const RepositoriesContext = createContext();

export function RepositoriesProvider({ children, ...rest }) {
  const [repository, setRepository] = useState('');
  const [reposList, setReposList] = useState([]);
  const [isPopoverActive, setIsPopoverActive] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const showModal = useCallback(() => {
    setIsModalActive(active => !active);
  }, []);

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

  const handleDeleteReposiory = useCallback((id) => {
    reposList.map((repo, index) => {
      console.log(repo.id);
      if (repo.id === id) {
        return reposList.splice(index, 1);
      }
    })
  }, [reposList]);

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
        showModal,
        isModalActive,
        handleDeleteReposiory,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
}
