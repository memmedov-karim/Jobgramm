import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import Login from './Pages/Login/Login';
import AllJobs from './Pages/AllJobs/AllJobs';
import Userpagejobs from './Pages/UserPageJobs/Userpagejobs';
import AddJobs from './Pages/AddJobs/AddJobs';
import Applys from './Pages/Applys/Applys';
import Company from './Pages/Company/Company';
import Payment from './Components/PaymentForAnnouncment/Payment';
import { GetUserData,GetAllUsers } from "./Redux/Reducers/UserSignUpReducers";
import { GetAllJobs } from './Redux/Reducers/UserAddJobReducers';
import { GetAllApply } from './Redux/Reducers/UserApplyReducers';
import { useDispatch, useSelector } from "react-redux/es/exports";
import User from './Pages/User/User';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}
from 'react-router-dom';

function App(props) {
  const dispatch = useDispatch();
  React.useEffect(()=>{
    const fetchData = () => {
      try {
        axios.get('http://localhost:3001/users').then(data=>{
          dispatch(GetAllUsers(data.data))

        })
        // console.log(data.data)
        
        
      } catch (error) {
        console.log(error)
        
      }
      
    }
    fetchData();
    
    // axios.get('http://localhost:3001/users').then(dt=>{
      
    //   dispatch(GetAllUsers(dt.data))
    // })
  },[])
  React.useEffect(()=>{
    axios.get('http://localhost:3001/jobs').then(dt=>{
      
      dispatch(GetAllJobs(dt.data))
    })
  },[])
  React.useEffect(()=>{
    axios.get('http://localhost:3001/userapplys').then(dt=>{
      
      dispatch(GetAllApply(dt.data))
    })
  },[])
  console.log(props)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='alljobs' element={<AllJobs />} />
          <Route path='company' element={<Company />} />
          <Route path=':id' element={<User />} />
          <Route path=':id/alljobs' element={<Userpagejobs />} />
          <Route path=':id/addjobs' element={<AddJobs />} />
          <Route path=':id/allapplys' element={<Applys />} />
          <Route path=':id/payment' element={<Payment />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
