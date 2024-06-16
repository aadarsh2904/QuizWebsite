import React from 'react'
import Navbar from '../../components/Navbar'
import Course_rec from './CourseSuggest/Course_rec'
import Carousel from '../../components/carousel'
import Footer from '../../components/footer'
export default function Home() {
  return (
    <>
     <Navbar></Navbar>
     <Carousel/>
     <Course_rec/>
     <Footer/>
     </>
  )
}
