import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateComponent from "./components/PrivateComponent";
import AboutUs from './screens/AboutUs';
import Contact from './screens/Contact';
import AdminLogin from './components/AdminLogin';
import Category from './screens/Category';
import AdminDashboard from './pages/AdminDashboard'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <ToastContainer />
      <Routes>
          <Route element={<PrivateComponent />} />
          <Route path='/' element = {<App />} />
          <Route path = '/admin' element = {<AdminPage />} />
          <Route path='/about' element = {<AboutUs />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/adminlogin' element = {<AdminLogin />} />
          <Route path='/category' element={<Category />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
          
      </Routes>
  </Router>
); 
