import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { SignIn, SignUp, Main } from '../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/todo' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
