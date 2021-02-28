import React, { useContext, useState } from 'react';
import ClayLabel from "@clayui/label";
import ClayButton from '@clayui/button';
import { FiStar, FiTrash } from 'react-icons/fi';
import { RepositoriesContext } from '../context/RepositoriesContext';

import Modal from '../components/Modal';

import styles from '../styles/pages/GridPage.module.css';

import logo from '../assets/liferay.svg';

const GridPage = () => {
  const [repoId, setRepoId] = useState(0);

  const { reposList, showModal, isModalActive } = useContext(RepositoriesContext);
  console.log(reposList);

  return (
    <div className={styles.gridContainer}>
      { isModalActive && <Modal repoId={repoId} />}
      <div className={styles.grid}>
        { reposList.length !== 0 && reposList.map(repo => (
          <div key={repo.id} className={styles.cardRepository}>
            <header>
              <img src={logo} alt="Liferay" />
              <h2>{repo.full_name}</h2>
              <div>
                <ClayButton displayType="unstyled">
                  <FiStar size={16} color="#6b6c7e" />
                </ClayButton>
                <ClayButton
                  onClick={() => {
                    showModal();
                    setRepoId(repo.id);
                  }}
                  displayType="unstyled">
                  <FiTrash size={16} color="#6b6c7e" />
                </ClayButton>
              </div>
            </header>
            <main>
              <div>
                <strong>Stars</strong>
                <span> {repo.stargazers_count}</span>
              </div>
              <div>
                <strong>Forks</strong>
                <span> {repo.forks_count}</span>
              </div>
              <div>
                <strong>Open Issues</strong>
                <span> {repo.open_issues_count}</span>
              </div>
              <div>
                <strong>Age</strong>
                <span> 8 years ago</span>
              </div>
              <div>
                <strong>Last Commit</strong>
                <span> Nov 20, 2019</span>
              </div>
              <div>
                <strong>License</strong>
                <span> {repo.license ? `${repo.license.name}`: 'N/A'}</span>
              </div>
              <ClayLabel displayType="warning">
                {repo.language ? `${repo.language}` : 'N/A'}
              </ClayLabel>
            </main>
          </div>

        ))}
      </div>
    </div>
  );
}

export default GridPage;
