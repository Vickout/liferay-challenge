import React, { useContext } from 'react';
import { FaPlus, FaSearch, FaAdjust } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import { IoGrid } from 'react-icons/io5'
import { RepositoriesContext } from '../context/RepositoriesContext';

import styles from '../styles/components/Toobar.module.css';

import githubIcon from '../assets/icons/github.svg';

const Toolbar = () => {
  const { showPopover } =  useContext(RepositoriesContext);

  return (
    <>
    <div className={styles.container}>
      <img src={githubIcon} alt="Github" />
      <h3>Github Compare</h3>

      <select name="filter" id="cars">
        <optgroup label="ORDER BY" />
        <option value="hide">Filter and order</option>
        <option value="star">Stars</option>
        <option value="forks">Forks</option>
        <option value="open_issues">Open Issues</option>
        <option value="age">Age</option>
        <option value="last_commit">Last Commit</option>
      </select>
      <div className={styles.input}>
        <input type="text" name="repository" id="repository"/>
        <button>
          <FaSearch size={16} color="#6b6c7e" />
        </button>
      </div>
      <AiOutlineStar size={16} color="#6b6c7e" />
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

