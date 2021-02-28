import React, { useContext } from 'react';
import ClayForm, { ClayInput } from '@clayui/form';
import ClayButton from '@clayui/button';
import { IoMdAlert } from 'react-icons/io';

import styles from '../styles/components/Popover.module.css';
import { RepositoriesContext } from '../context/RepositoriesContext';


const Popover = () => {

  const {
    handleAddRepository,
    repository,
    setRepository,
    showPopover,
    hasError,
  } = useContext(RepositoriesContext);

  return (
    <div className={styles.container}>
      <ClayForm.Group>
        <div className={styles.inputContainer}>
          <h1>New Repository</h1>
          <label
            className={styles.required}
            htmlFor="basicInputText">
            Repository
          </label>
          <ClayInput
            id="basicInputText"
            type="text"
            className={styles.input}
            value={repository}
            onChange={e => setRepository(e.target.value)}
          />
          <div className={styles.errorContainer} >
            {hasError ? (
              <>
                <IoMdAlert size={14} color="#da1414" />
                <p
                  className={styles.textError}
                >
                  {'Erro na busca por esse repositório'}
                </p>
              </>
            ) : (
              <p>{''}</p>
            )}
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <ClayButton
            onClick={showPopover}
            style={{ marginRight: 16 }}
            displayType="secondary"
          >
            Cancel
          </ClayButton>
          <ClayButton
            onClick={handleAddRepository}
            displayType="primary"
          >
            Add
          </ClayButton>
        </div>
      </ClayForm.Group>
    </div>
  );
}

export default Popover;
