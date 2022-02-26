import React from 'react';
import {Routes,Route} from "react-router-dom";
import RegisterPage from './pages/RegisterPage.js';
import LoginPage from './pages/LoginPage.js'; 
import IndexPage from './pages/IndexPage'; 
import { PrivateRoute } from './PrivateRoute.js';

function App() {
  let colour; let email
  let value = document.cookie.split(/[;= ]+/);

  console.log(value)
  for (let i = 0; i < value.length; i++){
    if (value[i] === `Colour`){
      colour = value[i+1]
    }
    if (value[i] === `Email`){
      email = value[i+1]
    }
  }
  return (
   
      <Routes>
       <Route path="/" element={
            <PrivateRoute>
              <IndexPage Auth={colour} Email={email}/>
            </PrivateRoute>
        }/>
        <Route path="/login" element={<LoginPage Email={email}/>} exact />
        <Route path="/register" element={<RegisterPage/>} exact />
      </Routes>

  );
};

export default App;