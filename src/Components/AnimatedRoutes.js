import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Services from '../pages/Services';
// import Projects from '../pages/Projects';
import ContactUs from '../pages/ContactUs';
import Courses from '../pages/Courses';
import {AnimatePresence} from "framer-motion"
import CourseDisplay from './CourseDisplay';

function AnimatedRoutes() {
    const location = useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path='/' element={<Home/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path='/Services' element={<Services/>}/>
    <Route path="/course/:id" element= {<CourseDisplay/>} />
    <Route path='/ContactUs' element={<ContactUs/>}/>
    <Route path='/Courses' element={<Courses/>}/>
   
   </Routes>
   </AnimatePresence>
  )
}

export default AnimatedRoutes