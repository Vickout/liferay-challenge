import React, { useContext } from 'react';

import { RepositoriesContext } from '../context/RepositoriesContext';

import Modal from '../components/Modal';

import styles from '../styles/pages/GridPage.module.css';

import Card from '../components/Card';

const GridPage = () => {
  const {
    reposList,
    isModalActive,
    isFavoritedPageActive,
    favorite,
    infoToDeleteRepo,
  } = useContext(RepositoriesContext);

  return (
    <div className={styles.gridContainer}>
      { isModalActive && <Modal repoInfo={infoToDeleteRepo} />}
      <div className={styles.grid}>
        {isFavoritedPageActive ? (
          <>
            {favorite.length !== 0 && favorite.map(repo => (
              <Card
                key={repo.id}
                id={repo.id}
                fullName={repo.full_name}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
                OpenIssues={repo.open_issues_count}
                license={repo.license}
                language={repo.language}
              />
            ))}
          </>
        ) : (
            <>
            {reposList.length !== 0 && reposList.map(repo => (
              <Card
                key={repo.id}
                id={repo.id}
                fullName={repo.full_name}
                stars={repo.stargazers_count}
                forks={repo.forks_count}
                OpenIssues={repo.open_issues_count}
                license={repo.license}
                language={repo.language}
              />
            ))}
            </>
          )}
      </div>
    </div>
  );
}

export default GridPage;
