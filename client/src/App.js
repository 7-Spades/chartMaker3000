import React from 'react'
import {Router, Route} from 'react-router-dom';
import DataContextProvider from './util/dataContext';
function App() {
  return (
    <DataContextProvider>
   <Router>
    
   </Router>
   </DataContextProvider>
  );
}

export default App;
