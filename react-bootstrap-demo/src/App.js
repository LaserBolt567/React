import React from 'react';
import AppHeader from './AppHeader';
import AppMain from './welcome/AppMain';

function App() {
  console.log("Rendering App...");
  return (
    <React.Fragment>
      <AppHeader />
      <AppMain />
    </React.Fragment>
  );
}

export default App;
