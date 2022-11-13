import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom' 
import styled, {css} from 'styled-components'
import img from "./../image/image23.jpeg" 
import img1 from "./../image/image24.jpg" 
import img2 from "./../image/image25.jpg" 
import Mainfooter from '../Components/Mainfooter'
// import img3 from "./../image/image25.jpg" 
// import img4 from "./../image/image25.jpg" 
// import img5 from "./../image/image25.jpg" 
import {motion} from "framer-motion"

const Aout = styled.div`
   .head{
    background: url(${img});
    width: 100%;
    height: 730px;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   }  
   p{
    font-weight: bold;
    font-size: 60px;
    line-height: 60px;
    font-family: 'Saira Condensed', sans-serif;
    color: white;
    padding-top: 10%;
    padding-left: 62%;
   } 
   .grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 7%;
    margin-left: 10%;
    margin-right: 10%;
    
   } 
.img{
  background: url(${img1});
  height: 300px;
  width: 300px;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   margin-left: 45%;
   margin-bottom: 250px;
}
.img1{
  background: url(${img2});
  height: 300px;
  width: 300px;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   margin-left: 0%;
   margin-bottom: 150px;
}

.text{
  padding-top: 30px;
}
.grid h6{
  color: black;
  font-size: 15px;
  font-weight: light;
  margin-bottom: 150px;
}
`
const Wrap = styled.div`
background-color: #090945;
height: 700px;
.text h1{
  color: white;
  padding-top: 10px;
  text-align: none;
}
.grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 12%;
    margin-left: 10%;
    margin-right: 10%;
   
   } 
.text h6{
  color: white;
  font-size: 18px;
  font-weight: light;
 
}
.img{
  background: url(${img1});
  height: 400px;
  width: 400px;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   margin-left: 38%;
   margin-top: 22%;
}
.text{
  padding-top: 30%;
}

`
const Team = styled.div`
.team{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  margin-left: 10%;
}
 
 .box{
  width: 350px;
  height: 330px;
  background-color:  #090945 ;
  border-top-right-radius: 5%;
  border-bottom-right-radius: 5%;
  margin-bottom: 15%;
  border: 3px solid red;
}
h1{
  margin-top: 3%;
  margin-bottom: 3%;
  text-align: center;
  color: #090945;
}
`
export const useScrollToTop = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location])
}
const AboutUs = () => {
 useScrollToTop()
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
    
    <Aout>
   <div className='head'>
       <p>We create<br/> opportunity for<br/> the next generation.</p>
   </div>
    <div className='grid'>

    <div className='text'>
      <h1>Tincidunt sed</h1>
      <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vitae semper augue placerat nunc consequat tempor sed. 
        Mattis ac orci praesent sit diam egestas. Enim faucibus egestas
         in dictum lectus donec justo donec. Volutpat tempor faucibus porttitor 
         sit scelerisque eget placerat sollicitudin sollicitudin. 
         Erat urna fermentum neque, accumsan. Amet mauris in nisl risus,
          est convallis arcu, morbi proin. 
        Diam sit felis habitasse eleifend. Consectetur donec mauris faucibus quis a.</h6>
    </div>
      <div className='img'>
      
    </div>
    <div className='img1'>
      
    </div>
    <div className='text'>
      <h1>Tincidunt sed</h1>
      <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vitae semper augue placerat nunc consequat tempor sed. 
        Mattis ac orci praesent sit diam egestas. Enim faucibus egestas
         in dictum lectus donec justo donec. Volutpat tempor faucibus porttitor 
         sit scelerisque eget placerat sollicitudin sollicitudin. 
         Erat urna fermentum neque, accumsan. Amet mauris in nisl risus,
          est convallis arcu, morbi proin. 
        Diam sit felis habitasse eleifend. Consectetur donec mauris faucibus quis a.</h6>
        </div>
        
     
    </div>
    </Aout>
    <Wrap>
      
       <div className='grid'>

<div className='text'>
  <h1>Tincidunt sed</h1>
  <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vitae semper augue placerat nunc consequat tempor sed. 
    Mattis ac orci praesent sit diam egestas. Enim faucibus egestas
     in dictum lectus donec justo donec. Volutpat tempor faucibus porttitor 
     sit scelerisque eget placerat sollicitudin sollicitudin. 
     Erat urna fermentum neque, accumsan. Amet mauris in nisl risus,
      est convallis arcu, morbi proin. 
    Diam sit felis habitasse eleifend. Consectetur donec mauris faucibus quis a.</h6>
</div>
  <div className='img'>
  
</div>
</div>
    </Wrap>
    <Team>
      <h1>The Team</h1>
     <div className='team'>
      <div className='box'>

      </div>
      <div className='box'>
        
      </div>
      <div className='box'>
        
        </div>
        <div className='box'>

       </div>
        <div className='box'>
  
          </div>
       <div className='box'>
  
  </div>
        </div>
    </Team>
    <Mainfooter/>
    </motion.div>
  )
}

export default AboutUs