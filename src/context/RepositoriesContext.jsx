import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const RepositoriesContext = createContext();

export function RepositoriesProvider({ children }) {
  const [repository, setRepository] = useState('');
  const [reposList, setReposList] = useState([]);
  const [isPopoverActive, setIsPopoverActive] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [hasError, setHasError]  = useState(false);
  const [favorite, setFavorite] = useState([]);
  const [isFavoritedPageActive, setIsFavoritedPageActive] = useState(false);
  const [favoriteChecked, setFavoriteChecked] = useState(false);
  const [infoToDeleteRepo, setInfoToDeleteRepo] = useState(0);
  const [findRepo, setFindRepo] = useState('');
  const [findedRepo, setFindedRepo] = useState({});

  const showModal = useCallback(() => {
    setIsModalActive(active => !active);
  }, []);

  const showPopover = useCallback(() => {
    setIsPopoverActive(active => !active);
  }, []);

  const showFavorites = useCallback(() => {
    setFavoriteChecked(active => !active);
    setIsFavoritedPageActive(active => !active);
  }, []);

  const handleAddRepository = useCallback(async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`repos/${repository}`);

      setIsPopoverActive(false);
      setReposList([...reposList, response.data])
      setRepository('');
    } catch (error) {
      setHasError(true);
    }
  }, [repository]);

  const handleDeleteReposiory = useCallback((id) => {
    reposList.map((repo, index) => {
      if (repo.id === id) {
        return reposList.splice(index, 1);
      }
    })

    favorite.map((repo, index) => {
      if (repo.id === id) {
        return favorite.splice(index, 1);
      }
    })
  }, [reposList, favorite]);

  const favoriteRepo = useCallback((id, isFavorited) => {
      reposList.map(repo => {
        if (repo.id === id && !isFavorited) {
          console.log('colocou', !isFavorited)
          setFavorite([...favorite, repo]);
        }
      })

      favorite.map((repo, index) => {
        if (repo.id === id && isFavorited ) {
          console.log('retirou', isFavorited)
          return favorite.splice(index, 1);
        }
      })
  }, [reposList, favorite]);

  const handleOrder = useCallback((order) => {
    switch (order) {
      case "star":
        console.log('entrou star');
        return (reposList.sort((a, b) => {
          if (a.stargazers_count > b.stargazers_count) {
            return 1;
          }
          if (a.stargazers_count < b.stargazers_count) {
            return -1;
          }
          return 0;
        }));
      case "forks":
        console.log('entrou forks');
        return reposList.sort((a, b) => a.forks_count - b.forks_count).map(p => p);
      case "open_issues":
        return reposList.sort((a, b) => a.open_issues_count - b.open_issues_count).map(p => p);
      default:
        return reposList.map(p => p);
    }
  }, [reposList])

  const handleFindRepo = useCallback(() => {
    reposList.map(repo => {
      if (findRepo === repo.full_name) {
        return setFindedRepo(findedRepo);
      }
    })
  }, []);

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
        favoriteRepo,
        showFavorites,
        isFavoritedPageActive,
        favorite,
        setInfoToDeleteRepo,
        infoToDeleteRepo,
        favoriteChecked,
        handleOrder,
        setFindRepo,
        handleFindRepo,
        findedRepo,
        findRepo,
      }}
    >
      {children}
    </RepositoriesContext.Provider>
  );
}
