import React from 'react'
import Details from './Details.jsx'
import Navbar from '../../components/Navbar.jsx'
import CourseList from './CourseList.jsx'
import Footer from '../../components/footer.jsx'
import Recent from './Recent.jsx'
export default function ProfilePage() {
  return (
    <>
     <Navbar/>
     <Details/>
     <CourseList/>
     <Recent/>
     <Footer/>

  
    </>
  )
}
