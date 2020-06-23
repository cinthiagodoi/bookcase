import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './pages/Home'
import CreateLogin from './pages/CreateLogin'
 
const Routes = () => {
  return (
    <BrowserRouter>
      < Route component={Home} path='/' exact />
      < Route component={CreateLogin} path='/create-account' exact />
    </BrowserRouter>
  )
}

export default Routes;