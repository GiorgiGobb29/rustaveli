import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import RegisterPage from './Register/Register';
import LoginPage from './Login/LogIn';
import WholesalePage from './WholesalePage/Wholesale';
import RetailPage from './RetailPage/Retail';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path='/register' element= {<RegisterPage />}></Route>
        <Route path='/login' element= {<LoginPage />}></Route>
        <Route path='/wholesale' element= {<WholesalePage />}></Route>
        <Route path='/retail' element= {<RetailPage />}></Route>        
      </Routes>
    </Router>
    </>
  );
}

<style>
  
</style>

export default App;
