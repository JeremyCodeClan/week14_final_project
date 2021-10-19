import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import TablePage from 'pages/TablePage';
import ChartPage from 'pages/ChartPage';
import AssetPage from 'pages/AssetPage';
import PersonalPage from 'pages/PersonalPage';

import { GlobalStyle } from 'helpers/styles'

const App = () => {
  return (
    <>
      <GlobalStyle />
       <Route component={HomePage} path='/' exact />
       <Route component={TablePage} path='/table' exact />
       <Route component={ChartPage} path='/table/@:coin' exact />
       <Route component={AssetPage} path='/asset' exact />
       <Route component={PersonalPage} path='/personal' exact />
    </>
  );
}

export default App;