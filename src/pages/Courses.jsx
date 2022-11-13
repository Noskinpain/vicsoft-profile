import React from 'react'
import {motion} from "framer-motion"
import Mainfooter from '../Components/Mainfooter'
import img from "./../image/image7.jpg"
import img1 from "./../image/image26.jpg"
import styled from 'styled-components'

const Course = styled.div`
    width: 100%;
    background: linear-gradient(#00000052,#0d0a42ac), url(${img});
    height: 700px;
    position: relative;
    background-size: cover;
    background-position: center;
    object-fit: cover;
  h2{
    color: white;
    margin-left: 7%;
    font-weight: bolder;
    font-size: 30px;
    padding-top: 15%;
    font-family: 'Times New Roman', Times, serif;
  }
`
const Service = styled.div`
  background-color: white;
  margin-top: 2%;
h1{
  font-weight: bolder;
  font-size: 30px;
  text-align: center;
}
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  border: 5px solid black;
  margin-left: 10%;
  margin-right :10%;
  margin-top: 5%;
  margin-bottom: 10%;
  .img1{
    background: linear-gradient(#00000052,#0d0a42ac), url(${img});
    height: 500px;
    width: 100%;
    position: relative;
    background-size: cover;
    background-position: center;
    object-fit: cover;
  
    :hover{
      cursor: pointer;
      
      
      
    }
  }
  .all-note{
   :hover{
    width: 80%;
   }
  }
  
  h3{
    text-align: center;
    font-weight: bold;
    color: #090974;
    font-size: 25px;
    margin-top: 8%;
  }
  p{
   text-align: center;
   font-size: 19px;
   margin-top: 8%;
  }
`
const Button = styled.button`
  margin-left: 40%;
  background-color: #04045c;
  width: 150px;
  height: 60px;
  color: white;
  cursor: pointer;
  margin-top: 3%;
`
const Courses = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      
      <Course>
        <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>
         Obcaecati dolores tempore ipsa eligendi officia. <br/>
         Quibusdam praesentis neque.

        </h2>

      </Course>
      <Service>
         <h1>Lorem ipsum dolor sit, amet consectetur<br/> adipisicing elit.</h1>
         <Grid>
         <div className='img1'></div>
         <div className='all-note'>
            <h3>Vicsoft, a platform where you can accuire knowledge<br/> 
              of computer related activities </h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet 
              Obcaecati dolores tempore ipsa eligendi officia. 
         Quibusdam praesentis neque.
              </p>
              <Button>Enroll Now</Button>
         </div>

         <div className='all-note'>
            <h3>Vicsoft, a platform where you can accuire knowledge<br/> 
              of computer related activities </h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet 
              Obcaecati dolores tempore ipsa eligendi officia. 
         Quibusdam praesentis neque.
              </p>
              <Button>View Ebooks</Button>
         </div>
         <div className='img1'></div>

         <div className='img1' style={{background:` url(${img1})`,
        objectFit:"cover",  position: "relative",
        backgroundSize:" cover",
        backgroundPosition:" center" }}></div>
         <div className='all-note'>
            <h3>Vicsoft, a platform where you can accuire knowledge<br/> 
              of computer related activities </h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet 
              Obcaecati dolores tempore ipsa eligendi officia. 
         Quibusdam praesentis neque.
              </p>
              <Button>Visit website Now</Button>
              </div>

              <div className='all-note'>
            <h3>Vicsoft, a platform where you can accuire knowledge<br/> 
              of computer related activities </h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet 
              Obcaecati dolores tempore ipsa eligendi officia. 
         Quibusdam praesentis neque.
              </p>
              <Button>Download Now</Button>
         </div>
         <div className='img1'></div>

         <div className='img1'></div>
         <div className='all-note'>
            <h3>Vicsoft, a platform where you can accuire knowledge<br/> 
              of computer related activities </h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet 
              Obcaecati dolores tempore ipsa eligendi officia. 
         Quibusdam praesentis neque.
              </p>
              <Button>See More</Button>
         </div>

         <div className='all-note'>
            <h3>Vicsoft, a platform where you can accuire knowledge<br/> 
              of computer related activities </h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet 
              Obcaecati dolores tempore ipsa eligendi officia. 
         Quibusdam praesentis neque.
              </p>
              <Button>Join Now</Button>
         </div>
         <div className='img1'></div>

         <div className='img1'></div>
         <div className='all-note'>
            <h3>Vicsoft, a platform where you can accuire knowledge<br/> 
              of computer related activities </h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Lorem ipsum dolor sit, amet 
              Obcaecati dolores tempore ipsa eligendi officia. 
         Quibusdam praesentis neque.
              </p>
              <Button>View Audiobook</Button>
              </div>
         
         </Grid>
      </Service>
        

    <Mainfooter/>
    </motion.div>
  )
}

export default Courses