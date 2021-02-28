
import React, { useContext } from 'react';
import ClayButton from '@clayui/button';
import { FiX } from 'react-icons/fi';
import { GoAlert } from 'react-icons/go';
import { RepositoriesContext } from '../context/RepositoriesContext';

import styles from '../styles/components/Modal.module.css';

const Modal = ({ repoInfo }) => {
  const { showModal, handleDeleteReposiory } = useContext(RepositoriesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>
          <div>
            <GoAlert size={14} color="#b95000" />
            <strong>Delete Repository</strong>
          </div>
          <button onClick={showModal} className={styles.button}>
            <FiX size={24} color="#b95000" />
          </button >
        </header>
        <main>
          <p>Are you sure to delete the
            <span>
              <strong> {repoInfo.fullName} </strong>
            </span>
           repository?</p>
        </main>
        <div className={styles.buttonContainer}>
          <ClayButton
            style={{ marginRight: 16 }}
            displayType="secondary"
            onClick={showModal}
          >
            Cancel
          </ClayButton>
          <ClayButton
            displayType="unstyled"
            className={styles.deleteButton}
            onClick={() => {
              handleDeleteReposiory(repoInfo.id);
              showModal();
            }}
          >
            Delete
          </ClayButton>
        </div>
      </div>
    </div>
  );
};

export default Modal;
