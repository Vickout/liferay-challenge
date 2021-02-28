import React, { useContext, useState } from 'react';
import ClayButton from '@clayui/button';
import { FaPlus, FaSearch, FaAdjust, FaStar } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import { IoGrid } from 'react-icons/io5'
import { RepositoriesContext } from '../context/RepositoriesContext';

import styles from '../styles/components/Toobar.module.css';

import githubIcon from '../assets/icons/github.svg';

const Toolbar = () => {
  const {
    showPopover,
    showFavorites,
    favoriteChecked,
    handleOrder,
    findRepo,
    setFindRepo,
    handleFindRepo,
  } = useContext(RepositoriesContext);

  const viewList = [
    {id: 1, value: 'star', name: 'Stars'},
    {id: 2, value: 'forks', name: 'Forks'},
    {id: 3, value: 'open_issues', name: 'Open Issues'},
    {id: 4, value: 'age', name: 'Age'},
    {id: 5, value: 'last_commit', name: 'Last Commit'},
  ]

  return (
    <>
      <div className={styles.container}>
        <img src={githubIcon} alt="Github" />
        <h3>Github Compare</h3>

        <select defaultValue="order" name="filter" id="cars">
          <optgroup label="ORDER BY" />
          <option value="order" disabled>Filter and order</option>
          {viewList.map(item => (
            <option
              key={item.id}
              value={item.value}
              onClick={e => handleOrder(e.target.value)}
            >
              {item.name}
            </option>
          ))}
        </select>
        <div className={styles.input}>
          <input
            value={findRepo}
            type="text"
            name="repository"
            id="repository"
            onChange={e => setFindRepo(e.target.value)}
          />
          <button onClick={() => handleFindRepo()}>
            <FaSearch size={16} color="#6b6c7e" />
          </button>
        </div>
        <ClayButton
        displayType="unstyled"
          onClick={() => {
            showFavorites();
          }}
        >
          { favoriteChecked ? (
            <FaStar size={16} color="#6b6c7e" />
          ) : (
            <AiOutlineStar size={16} color="#6b6c7e" />
          ) }
        </ClayButton>
        <FaAdjust size={16} color="#6b6c7e" />
        <IoGrid size={16} color="#6b6c7e" />
        <button
          className={styles.addRepositoryButton}
          onClick={showPopover}
        >
          <FaPlus style={styles.icon} size={16} color="#fff" />
        </button>
      </div>
    </>
  );
};

export default Toolbar;

