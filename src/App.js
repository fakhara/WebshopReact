import React, { useEffect } from 'react';
//Use Redux hooks here
import {  useDispatch } from 'react-redux';
import { Route, Routes  } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

//components
import AdminToolbar from './components/AdminToolbar';
//hoc
import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

//Layouts
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';



//Pages
import Homepage from './pages/Homepage';
import Search from './pages/Search';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import './default.scss';


const App = (props) => {
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
   }, []);
  
    return (
      <div className="App">
      <AdminToolbar/>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/registration" element={<Registration/>} />
            <Route path="/login"  element={<Login/>} />
            <Route path="/recovery" element={<Recovery />} />
            <Route path="/dashboard" element={
               <WithAuth>
                 <DashboardLayout>
                     <Dashboard/>
                  </DashboardLayout>
                </WithAuth>}
               />
            <Route path="/admin" element={
              <WithAdminAuth>
                <AdminLayout>
                    <Admin />
                </AdminLayout>
              </WithAdminAuth>}
             />
          </Routes>
        </MainLayout>
      </div>
    );
}



export default App;
