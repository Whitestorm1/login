import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Signin from './Signin';

function Main() {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={Signin} />
      
    </BrowserRouter>
  );
}

export default Main
