import React from 'react';
import './App.scss';
import { Switch, BrowserRouter } from 'react-router-dom'
import Routes from './routes';



function App() {
  return (
    <BrowserRouter>
      <Switch>         
         <Routes />      
      </Switch>
    </BrowserRouter>
  );
}

export default App;