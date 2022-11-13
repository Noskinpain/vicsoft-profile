import React from 'react'
import Banner from '../Components/Home/Banner'
import "antd/dist/antd.css"
import styled from "styled-components"
import img2 from "./../image/image8.jpg"
import img3 from "./../image/image7.jpg"
import img4 from "./../image/image6.jpg"
import img5 from "./../image/image9.jpg"
import img6 from "./../image/image10.jpg"
import img1 from "./../image/image20.jpeg"
import img8 from "./../image/image21.PNG"
import img9 from "./../image/image22.PNG"
import Comp from '../Components/Comp'
import Footer from '../Components/Footer'
import Mainfooter from '../Components/Mainfooter'
import { useNavigate } from 'react-router-dom'
import {motion} from "framer-motion"

const Boxes = styled.div`
  .box{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-left: 190px;
    margin-right: 190px;
    height: 230px;
    margin-top: -90px;
    margin-bottom: 200px;
    position: relative;
    :hover{
    background-color:black;
    color: blue;
    
  }
  }
  .box1{
    /* color:#FFFF00; */
    background: linear-gradient(#FFFF00, #b9a709ac ) , url(${img5});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   
   }
  
  .box1 p{
   margin-top: 12%;
   text-align: center;
   font-size: 20px;
   color: black;
   font-weight: bold;
   font-family:'Lucida Sans', 'Lucida Sans Regular',
    'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    :hover{
      color: white;
    }
   }
   .box2 p{
   margin-top: 12%;
   text-align: center;
   color: black;
   font-size: 20px;
   font-weight: bold;
   font-family:'Lucida Sans', 'Lucida Sans Regular',
    'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    :hover{
      color: white;
    }
   }
   .box3 p{
   margin-top: 12%;
   text-align: center;
   font-size: 20px;
   color: black;
   font-weight: bold;
   font-family:'Lucida Sans', 'Lucida Sans Regular',
    'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    :hover{
      color: white;
    }
   }
  
  .box2{
    color: #123456;
    background: linear-gradient(#123456, #00206aac ) ,url(${img3});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   :hover{
    background-color:black;
    color: blue;
   }
  }
  .box3{
    color: #ADFF2F;
    background: linear-gradient(#ADFF2F, #a0ff23ac ) ,url(${img4});
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   :hover{
    background-color:black;
    color: blue;
   }
  }
`
const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 190px;
  margin-right: 190px;
.part2{
  background:url(${img2});
  height: 400px;
  position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   margin-left: 60px;
   width: 100%;
   margin-bottom: 180px;
   z-index: -2;
}
h1{
  font-weight: bold;
  font-size: 40px ;
  line-height: 50px;
  z-index: -2;
}
p{
  font-weight: 400;
  font-size: 18px;
  text-align: start;
  line-height: 30px;
  margin-top: 60px;
  z-index: 0;
}
button{
  border-radius: 30px;
  color: black;
  border: none;
  width: 200px;
  height: 60px;
  padding: 0px;
  background-color: #ADFF2F;
  margin-left: 7px;
  margin-top: 40px;
  font-weight: bold;
  cursor: pointer;
  z-index: 0;
  
 }
`
const Demo = styled.div`
  width: 100%;
  height: 700px;
  color: white;
  background: linear-gradient(#020c15, #00206aee ) ,url(${img6});
  position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   h1{
    text-align: center;
    color: white;
    padding-top: 4%;
   }
   p{
    text-align: start;
    padding-top: 35%;
    font-size: 18px;
   }
   .grid{
    display: grid;
    grid-template-columns: repeat(2,1fr);
   margin-left: 10%;
  margin-right: 15%;
   }
   .buton button{
    border: none;
  width: 170px;
  height: 45px;
  color: #090945;
  font-weight: bold;
  cursor: pointer;
   }
   .two .circle1{
    width: 250px;
    height: 250px;
    border-radius: 100%;
    background-color: white;
    z-index: -1;
    margin-left: 67%;
    margin-top: 10%;
   }
   .firstcircle{
    
    width: 220px;
    background: url(${img6});
    height: 220px;
    border-radius: 100%;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   top:18px;
   left: 12px;
   border: 4px solid black;
   
   }
   .circle2{
    width: 220px;
    height: 220px;
    border-radius: 100%;
    background-color: white;
    z-index: 3;
    margin-left: 65%;
    margin-top: -13%;
   }
   .secondcircle{
    width: 190px;
    background: url(${img4});
    height: 190px;
    border-radius: 100%;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   top:15px;
   left: 15px;
   z-index: 3;
   border: 4px solid black;
   }

   .circle3{
    width: 210px;
    height: 210px;
    border-radius: 100%;
    background-color: white;
    z-index: 10;
    margin-top: -55%;
    margin-left: 48%;
   }
   .thirdcircle{
    width: 180px;
    background: url(${img3});
    height: 180px;
    border-radius: 100%;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   top:15px;
   left: 15px;
   border: 4px solid black;
   }
   .circle4{
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-color: white;
    z-index: 5;
    margin-top: -10%;
    margin-left: 49%;
   }
   .fourcircle{
    width: 170px;
    background: url(${img2});
    height: 170px;
    border-radius: 100%;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   top:15px;
   left: 15px;
   border: 4px solid black;
   }
  
`
const Bar = styled.div`
h1{
    text-align: center;
    font-weight: 400;
    color: #0b0b77;
    margin-top: 3%;
}
.grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    width: 100%;
    height: 550px;
    background-color: white;
    padding-left: 8%;
    padding-right: 8%;
    gap: 30px;
    margin-top: 3%;
    border: none;
}
.image1{
    background: url(${img1});
    position: relative;
  background-size: contain;
  background-repeat: no-repeat;
   background-position: cover;
   object-fit: cover;
}
.image2{
    background: linear-gradient(#020c159f, #00206a90 ) , url(${img8});
    position: relative;
  background-size: contain;
  background-repeat: no-repeat;
   background-position: cover;
   object-fit: cover;
  
}
.image3{
    background:  linear-gradient(#020c159f, #00206a90 ) , url(${img9});
    position: relative;
  background-size: contain;
  background-repeat: no-repeat;
   background-position: cover;
   object-fit: cover;
}
.buton button{
    border: 2px solid #090945;
  width: 170px;
  height: 45px;
  color: #090945;
  font-weight: bold;
  cursor: pointer;
  margin-left: 45%;
  margin-top: 2%;
   }
`
const Home = () => {
  const navigate = useNavigate()
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
    
     <Banner/>
    <Boxes>
      <div className='box'>
      <div className='box1'>
       <p>Front-End Web Development<br/>
       Back-End Web Development<br/>
       Full Stack</p>
      </div>
      <div className='box2'>
      <p>Graphics Design<br/>
       Ui/Ux Design<br/>
       Web design</p>
      </div>
      <div className='box3'>
      <p>Mobile App Development<br/>
      Web Applications<br/>
       Game Applications </p>

      </div>
      </div>
    </Boxes>
    <Layout>
      <div className='part1'>
         <h1>
          Experience the magic of <br/> networking
          </h1>
          <p>
Company trustworthiness and service reliability are our main principles for consumer loyalty.
 We are working hard to ensure quality entertainment for customers. Individual 
 approach and high flexibility are combined with reasonable prices. Networking
  have never been so simple!
</p>
<div className='buton'>
        <button onClick={()=> navigate("/AboutUs") }>Read more about us</button>
      </div>
         
      </div>
      <div className='part2'>
        
      </div>
    </Layout>
    <Demo>
      <h1>WHO ARE WE?</h1>
      <div className='grid'>
        <div className='one'>
         <p>We are working hard to ensure quality entertainment for customers. Individual 
       approach and high flexibility are combined with reasonable prices. Networking
         have never been so simple!</p>
         <div className='buton'>
        <button onClick={()=> navigate("/AboutUs") }>About</button>
      </div>
         
        </div>
        <div className='two'>
          <div className='circle1'>
            <div className='firstcircle'></div>
          </div>
          <div className='circle2'>
            <div className='secondcircle'></div>
          </div>
          <div className='circle3'>
            <div className='thirdcircle'></div>
          </div>
          <div className='circle4'>
            <div className='fourcircle'></div>
          </div>
        </div>
      </div>
    </Demo>
    <Comp/>
    <Bar>
       <h1>OUR WORKS</h1>
        <div className='grid'>
            <div className='image1'></div>
            <div className='image2'></div>
            <div className='image3'></div>
        </div>
        <div className='buton'>
           <button onClick={()=> navigate("/Services") }>View Courses</button>
           </div>

    </Bar>
    <Footer/>
    <Mainfooter/>
    </motion.div>
  )
}

export default Home