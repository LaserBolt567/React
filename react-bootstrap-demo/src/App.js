import React from 'react';
import AppNavbar from './AppNavbar';
import Welcome from './welcome/Welocme';

function App() {
  console.log("Rendering App...");
  return (
    < div className="reactstrap-demo" >
      <AppNavbar />
      <Welcome />
    </div >
  );
}

export default App;
