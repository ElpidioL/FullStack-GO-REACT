import React from 'react';
import {Routes,Route} from "react-router-dom";
import RegisterPage from './pages/RegisterPage.js';
import LoginPage from './pages/LoginPage.js'; 
import IndexPage from './pages/IndexPage'; 
import { PrivateRoute } from './PrivateRoute.js';

function App() {
  let isAuthenticated
  let value = document.cookie.split("=");
  for (let i = 0; i < value.length; i++){
    if (value[i] === `Colour`){
      isAuthenticated = value[i+1]
    }
  }
  return (
   
      <Routes>
       <Route path="/" element={
            <PrivateRoute>
              <IndexPage  Auth={isAuthenticated}/>
            </PrivateRoute>
        }/>
        <Route path="/login" element={<LoginPage/>} exact />
        <Route path="/register" element={<RegisterPage/>} exact />
      </Routes>

  );
};

export default App;