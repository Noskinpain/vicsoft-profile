import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"
import img from "./../image/image27.png"
import { AiFillCheckCircle } from "react-icons/ai"
import Mainfooter from '../Components/Mainfooter'
import { courseList } from '../Components/Data/CourseList'
import CourseItem from '../Components/CourseItem'

const Head  = styled.div`
height: 600px;
background-color:  #0c0c3f;
.grid{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.image{
  background-image: url(${img});
  position: relative;
  background-size: contain;
   background-position: center;
   object-fit: cover;
   background-repeat: no-repeat;
   width: 300px;
   height: 280px;
   left: 30%;
   top: 40%;
}
.text{
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-left: 10%;
  margin-top: 30%;
}

`
const icon = {
  fontSize: "25px",
  color: "blue",
}
const Notes = styled.div`

height:  500px;

h1{
  color: #060649;
  text-align: center;
  margin-top: 3%;
}
.grid2{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.note2{
margin-left: 20%;
margin-top: 3%;
}
.note2 h3{
  color: black;
  font-size: 20px;
}
.note2 span{
    font-size: 18px;
    line-height: 40px;
    padding-top: 2%;
    padding-left: 20px;
  }
  .square{
  width: 280px;
  height: 250px;
  background-color: white;
  margin-left: 40%;
  position: relative;
  top: 10%;
  border:4px solid #03033a;
}
.mini-square{
  width: 140px;
  height: 110px;
  position: relative;
  right: 12%;
  bottom: 60%;
  z-index: 100;
  background-color: white;
}
.nano-square{
  width: 120px;
  height: 90px;
  background-color: #03033a;
  p{
    color: white;
    font-weight: bold;
    font-size: 18px;
    margin-left: 16%;
    padding-top: 10%;
    font-family: 'Times New Roman', Times, serif;
  }
}
.container{
  position: relative;
  top: 40%;
  p{
    font-size: 25px;
    color: #03033a;
    font-weight: bold;
    line-height: 10px;
    margin-left: 5%;
  }
}
`
const Course = styled.div`
margin-bottom: 20%;
h2{
  text-align: center;
  color: #03033a;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 5%;
}
.courses{
  width: 100%;
  height: auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.course-list{
  width: 70vw;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr ;
  place-items: center;

}

`


const Services = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
    <Head>
    <div className='grid'>
      <div className='text'>
      We are working hard to ensure quality<br/> entertainment for customers. 
       
      </div>
      <div className='image'></div>
    </div>
    </Head>
    <Notes>
      <h1>Our Curriculum</h1>
      <div className='grid2'>
        <div className='note2'>
          <h3>Enhance your own skills with a selection of our programs including:</h3>
          <AiFillCheckCircle style={icon}/> 
      <span>Graphics Design</span><br/>
      <AiFillCheckCircle style={icon}/>
      <span>Ui/Ux Design</span><br/>
      <AiFillCheckCircle style={icon}/>
      <span>ICT Fundamentals</span><br/>
      <AiFillCheckCircle style={icon}/>
      <span>Software Development; Web design, Advanced Javascript,<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      React JS, React Native and Node JS. </span> 
        </div>
    <div className='square'>
     <div className='container'><p>Six-weeks</p>
      <p>3 days a week</p>
      <p>3 hours per contact!</p>
      </div> 
      <div className='mini-square'>
       <div className='nano-square'>
        <p>Lesson <br/> Duration</p>
       </div>
      </div>
    </div>
    </div>
    </Notes>
    <Course>
    <h2>Courses</h2>
      <div className='courses'>
      
       <div className='course-list'>
       {courseList.map((course, idx) => {
              return(
                <CourseItem id= {idx} image={course.image} name={course.name}  duration= {course.skills}
                fee= {course.fee} requirements = {course.requirements} />
              )
            })}
       </div>
       </div>
      </Course>
      
    <Mainfooter/>
    </motion.div>
  )
}

export default Services