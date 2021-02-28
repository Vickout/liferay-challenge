import React, { useContext, useState } from 'react';
import ClayLabel from "@clayui/label";
import ClayButton from '@clayui/button';
import { FiStar, FiTrash } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { RepositoriesContext } from '../context/RepositoriesContext';

import styles from '../styles/components/Card.module.css';

import logo from '../assets/liferay.svg';

const Card = ({
  id,
  fullName,
  stars,
  forks,
  OpenIssues,
  license,
  language
}) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const {
    showModal,
    favoriteRepo,
    setInfoToDeleteRepo,
  } = useContext(RepositoriesContext);

  return (
    <div className={styles.cardRepository}>
      <header>
        <img src={logo} alt="Liferay" />
        <h2>{fullName}</h2>
        <div>
          <ClayButton
            displayType="unstyled"
            onClick={() => {
              setIsFavorited(active => !active);
              favoriteRepo(id, isFavorited);
            }}
          >
            {isFavorited ? (
              <FaStar size={16} color="#6b6c7e" />
            ) : (
                <FiStar size={16} color="#6b6c7e" />
              )}
          </ClayButton>
          <ClayButton
            onClick={() => {
              showModal();
              setInfoToDeleteRepo({id, fullName});
            }}
            displayType="unstyled">
            <FiTrash size={16} color="#6b6c7e" />
          </ClayButton>
        </div>
      </header>
      <main>
        <div>
          <strong>Stars</strong>
          <span> {stars}</span>
        </div>
        <div>
          <strong>Forks</strong>
          <span> {forks}</span>
        </div>
        <div>
          <strong>Open Issues</strong>
          <span> {OpenIssues}</span>
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
          <span> {license ? `${license.name}` : 'N/A'}</span>
        </div>
        <ClayLabel displayType="warning">
          {language ? `${language}` : 'N/A'}
        </ClayLabel>
      </main>
    </div>
  );
};

export default Card;
