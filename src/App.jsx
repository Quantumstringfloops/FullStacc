import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Income from "./pages/Dashboard/Income";
import Home from "./pages/Dashboard/Home";
import Expense from "./pages/Dashboard/Expense";

const App = () => {
  return (
    <div className='text-3xl'>
      <Router>
        <Routes>
          <Route path='/' element={<Root /> } />
          <Route path='/login' exact element={<Login />} />
          <Route path='/Signup' exact element={<Signup />} />
          <Route path='dashboard' exact element={<Home />} />
          <Route path='/income' exact element={<Income />} />
          <Route path='/expense' exact element={<Expense />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ?(
    <Navigate to= "/dashboard" /> 
  ):(
    <Navigate to="/login" />
  )
}