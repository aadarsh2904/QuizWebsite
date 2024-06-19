import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home-Page/HomePage';
import ProfilePage from './pages/profile/ProfilePage';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
export default function App() {
  return (
   <>
       <Router>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/profile' element={<ProfilePage/>}/>
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
        </Routes>
       </Router>
    </>
  );
}
