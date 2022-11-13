import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { courseList } from './Data/CourseList'

const Course = styled.div`
.course-display{
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.course-display h1 {
  margin-top: 50px;
  color: #3e497a;
  font-size: 35px;
}
.course-display  img {
  width: 700px;
  border-radius: 10px;
}
.course-display  p {
  font-size: 40px;
  color: #3e497a;
}
`

const CourseDisplay = () => {
  const {id} = useParams()
  const course = courseList[id]
  return (
    <>
    <Course>
     <div className='course-display'>
     <h1>{course.name}</h1>
        <img src={course.image} alt= ""/>
        <p>
            <b>Duration:</b> {course.duration}<br/>
            <b>Fee:</b> {course.fee}<br/>
            <b>Requirements:</b> {course.requirements}<br/>
        </p>
     </div>
    </Course>
    </>
  )
}

export default CourseDisplay