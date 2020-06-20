import React from 'react'
import {Router, Route} from 'react-router-dom';
import DataContextProvider from './util/dataContext';
import ThemeContextProvider from './util/themeContext';

function App() {
  return (
    <DataContextProvider>
      <ThemeContextProvider>
        <Router>
          <Route />
          <Route />
          <Route />
          <Route />
        </Router>
    </ThemeContextProvider>
   </DataContextProvider>
  );
}

export default App;
