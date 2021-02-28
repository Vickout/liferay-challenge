import React, { useContext } from 'react';
import { RepositoriesContext } from './context/RepositoriesContext';
import EmptyPage from './pages/EmptyPage';
import GridPage from './pages/GridPage';

import Toolbar from './components/Toobar';
import Popover from './components/Popover';

import './styles/global.css';

function App() {
  const { isPopoverActive, reposList } = useContext(RepositoriesContext);

  return (
    <>
      <Toolbar />
      { reposList.length !== 0 ? (
        <>
        <GridPage />
        </>
      ) : (
        <EmptyPage />
      )}
      { isPopoverActive && <Popover />}
    </>
  );
}

export default App;
