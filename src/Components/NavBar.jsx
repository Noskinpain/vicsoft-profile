import React from 'react'
import {NavLink, Link} from "react-router-dom"
import styled from 'styled-components'
import "./../styles/myStyles.css"
import { useState, useEffect } from 'react'
import img2 from "./../image/image 8.png"

const Navigator = styled.nav`
background-color:#123456;


.navbar{
  padding: 30px 5%;
display: flex;
justify-content: space-between;
font-size: 20px;
gap: 40px;
text-align: center;
  width: 100%;
z-index: 1000;
@media only screen and (max-width : 700){
.navbar{
display: block;
font-size: 5px;
  width: 100%;
z-index: 1000;
  width: 50%;
}
}
}

.present{
  background-color: black;
  transition: all 0.1s ease-in-out 0.3s;
  padding: 20px 5%;
  display: flex;
justify-content: space-between;
font-size: 20px;
gap: 10px;
text-align: center;
  width: 100%;
z-index: 1000;
position: fixed;
}

.menu{
  display: flex;
  gap: 25px;
}

.imgs{
  background:url(${img2});
   height: 20px;
   background-size: cover;
   background-position: center;
   object-fit: cover;
   display: flex;
   color: white;
}


`

const Button = styled.button`
background: #28a9ff;
border-radius: 30px;
color: white;
border: none;
width: 145px;
height: 60px;
padding: 0px;
cursor: pointer;
:hover{
  background-color: transparent;
  border: 1px solid #28a9ff;
  transition: all 0.1s ease-in-out ;
}
`

const NavBar = () => {
  const [navbar, setNavbar] = useState(false)

  const updateNavbar = () =>{
    if(window.scrollY >= 150){
      setNavbar(true)
    } else{
      setNavbar(false)
    }
  }
  window.addEventListener("scroll", updateNavbar)
  return (
    <>
    
    <Navigator >

      <div className={navbar ? "present" : "navbar"}>
      
    <div className='flex'>
    
   <span className='imgs'></span> <span style={{color:"white",position:"relative",top:"15px"}}>Vicsoft</span>
    </div>
   <div className='menu'> 
    <NavLink className= "href"  exact to="/"  >Home</NavLink>
    <NavLink className= "href" exact to="/AboutUs">About Us</NavLink>
    <NavLink className= "href" exeact to="/Services">Courses</NavLink>
    {/* <NavLink className= "href" exact to="/Projects">Projects</NavLink> */}
    <NavLink className= "href"  exact to="/Courses">Services</NavLink>
    <NavLink className= "href"  exact to="/ContactUS">Contacts</NavLink>
    
    <Button className='btn'>Get Started</Button>
    </div>
    </div>
    </Navigator>
    </>
  )
}

export default NavBar