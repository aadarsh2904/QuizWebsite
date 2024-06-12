import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home-Page/HomePage';
import ProfilePage from './pages/profile/ProfilePage';
export default function App() {
  return (
   <>
       <Router>
        <Routes>
          <Route path ='/' element={<Home/>}/>
          <Route path ='/profile' element={<ProfilePage/>}/>
        </Routes>
       </Router>
    </>
  );
}
