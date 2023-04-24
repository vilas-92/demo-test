import React from 'react';
import Switch from 'react-router-dom';
import Route from 'react-router-dom';
import Home from "./Home";
import './App.css';

function App() {
  return (
   <>
<Switch>

  <Route path ="/" Component = {Home}/>;

</Switch>
   </>
  );
}

export default App;
