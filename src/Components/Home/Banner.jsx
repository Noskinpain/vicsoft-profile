import React from 'react'
import { Carousel } from 'antd'
import styled from "styled-components"
import img from "../../image/image10.jpg"
import img1 from "../../image/image14.jpg"
import img2 from "../../image/image8.jpg"
import img3 from "../../image/image12.jpg"
import { AiFillCheckCircle } from "react-icons/ai"
import "../../styles/myStyles.css"


const CarouselWrap = styled.div`
height: 780px;
z-index: -2;
position: relative;
transition: 3s ease-in-out;
  .caro1{
   background:linear-gradient(#00000052,#0d0a42ac), url(${img});
   height: 780px;
   background-size: cover;
   background-position: center;
   object-fit: cover;
  } 
  .caro2{
   background:linear-gradient(#00000052,#0d0a42ac),url(${img1});
   height: 780px;
   background-size: cover;
   background-position: center;
   object-fit: cover;
  } 
  .caro3{
   background:linear-gradient(#00000052,#0d0a42ac),url(${img3});
   height: 780px;
   background-size: cover;
   background-position: center;
   object-fit: cover;
   
  } 
  
 /* > .slick-dots li button {
    width: 6x;
    height: 6px;
    border-radius: 100%;
 }
  > .slick-dots li.slick-active button {
    width: 7px;
    height: 7px;
    border-radius: 100%;
    background: red;
  }  */
   h1{
    color: white;
    font-weight: bold;
    font-size: 65px;
    line-height: 70px;
    padding-left: 8%;
    padding-top: 175px;
    font-family: 'Saira Condensed', sans-serif;
    
  }
  
  .content{
    
  }
  .content span{
    color: white;
    font-size: 25px;
    padding-left: 20px;
  }
  button{
  border-radius: 30px;
  color: black;
  border: none;
  width: 200px;
  height: 60px;
  padding: 0px;
  background-color: #ADFF2F;
  margin-left: 8%;
  margin-top: 70px;
  font-weight: bold;
  cursor: pointer;
  
 
 }
 @media only screen and (max-width : 700){

  
 }
`
const icon = {
  fontSize: "50px",
  color: "white",
  marginLeft: "8%",
 paddingTop: "20px",
}




const Banner = () => {
  return (
    <CarouselWrap>
    <Carousel autoplay autoplaySpeed={9000} effect='fade' dotPosition='left' easing= "random">
    <div className='caro1'>
      <h1>
        Building Innovation And Creative <br/>Minds For Tommorow.
      </h1>
      <div className='content'>
      <AiFillCheckCircle style={icon}/><span>Ui/Ux design</span><br/>
      <AiFillCheckCircle style={icon}/><span>Content Management
        </span>
      </div>
      <div className='buttons'>
        <button>View plans and pricing</button>
      </div>
    </div>
    <div className='caro2'>
      <h1> Building Innovation And Creative <br/>Minds For Tommorow.</h1>
      <div className='content'>
      <AiFillCheckCircle style={icon}/><span>Mobile development</span><br/>
      <AiFillCheckCircle style={icon}/><span>Web development
      </span>
      </div>
      <div className='buttons'>
        <button>View plans and pricing</button>
      </div>
    </div>
    <div className='caro3'>
      <h1> Building Innovation And Creative <br/>Minds For Tommorow.</h1>
      <div className='content'>
      <AiFillCheckCircle style={icon}/> 
      <span>Game Applications</span><br/>
      <AiFillCheckCircle style={icon}/>
      <span>Web applications</span>
      <div className='buttons'>
        <button>View plans and pricing</button>
      </div>
      </div>
    </div>
    
  </Carousel>
  </CarouselWrap>
  )
}

export default Banner