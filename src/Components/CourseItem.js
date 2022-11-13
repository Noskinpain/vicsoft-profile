import React from 'react'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"

const Course = styled.div`
.course-item{
  border-radius: 15px;
  width: 600px;
  height: 600px;
  margin: 40px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-left: 1%;
  
}
.course-item .bgImage {
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  width: 100%;
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.course-item:hover {
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in;
  cursor: pointer;
}
h3{
  color: black;
  font-size: 25px;
  margin-top: 3%;
}
h5{
  color: black;
}
`

function CourseItem ({image, name, duration, fee, requirements, id}){ 
  const navigate = useNavigate()
  return (
    <>
    <Course>
      <div className='course-item' onClick={() => {
        navigate("/course/" + id)
      }}>
        <div style={{backgroundImage: `url(${image})`}} className= "bgImage"/>
        <h3>{name}</h3>
        <h5>{duration}</h5>
        

      </div>
    </Course>
    </>
  )
  }

export default CourseItem