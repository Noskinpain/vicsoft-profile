import React from 'react'
import styled from 'styled-components'
import img5 from "./../image/image17.jpg"
import img6 from "./../image/image10.jpg"
import img19 from "./../image/image19.png"
import img1 from "./../image/image5.jpg"
import img3 from "./../image/image6.jpg"
import img7 from "./../image/image7.jpg"
import { useNavigate } from 'react-router-dom'

const Demo = styled.div`
height: 800px;
width: 100%;
background: url(${img5});

    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
    h1{
        text-align: center;
        text-shadow: 30px;
        color: white;
        margin: 0% 0% 0% 0%;
        width: 100%;
        background: linear-gradient(#1234567e, #00206a67 ) ;
        height:70px;
        padding-top: 10px;
    }
    .box{
        width: 450px;
        height: 180px;
        background: linear-gradient(#12345687, #00206a77 ) ;
        color: white;
        margin-top: 16%;
        margin-left: 5%;
        p{
          text-align: start;
          padding-left: 8%;
          padding-right: 8%;
          padding-top: 12%;
        }
    }
`
const Epic = styled.div`
 width: 100%;
  height: 800px;
  color: white;
  background: linear-gradient(#020c15, #00206aee ) ,url(${img6});
  position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   .grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 10%;
    margin-right: 0%;
   }
   .box2{
    width: 500px;
        height: 220px;
        background: linear-gradient(#020c15, #00206aee ) ,url(${img6});
        color: white;
        border: 2px solid white;
        margin-top: 42%;
        margin-left: 10%;
        p{
          text-align: start;
          padding-left: 8%;
          padding-right: 8%;
          padding-top: 12%;
        }
   }
   .buton button{
    border: none;
  width: 170px;
  height: 45px;
  color: #090945;
  font-weight: bold;
  cursor: pointer;
  margin-left: 40px;
  margin-top: 10px;
   }
   .images{
    background: url(${img19});
    position: relative;
  background-size: contain;
  background-repeat: no-repeat;
   background-position: center;
   object-fit: cover;
   height:400px;
   width: 650px;
   border: none;
   margin-left: -19%;
   margin-top: 35%;
   z-index: 1;
   }
   .circle1{
    width: 170px;
    height: 170px;
    border-radius: 100%;
    background: url(${img1});
    z-index: 100;
    bottom: 45%;
    left: 50%;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   }
   .circle2{
    width: 170px;
    height: 170px;
    border-radius: 100%;
    background: url(${img3});
    bottom: 56%;
    right: 12%;
    z-index: 100;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   }
   .circle3{
    width: 170px;
    height: 170px;
    border-radius: 100%;
    background: url(${img7});
    z-index: 100;
    position: relative;
    bottom: 53%;
    left: 65%;
  background-size: cover;
   background-position: center;
   object-fit: cover;
   }
`

const Comp = () => {
  const navigate = useNavigate()
  return (
    <>
    <Demo>
    <h1>WHAT WE DO.</h1>
    <div className='box'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Odio reprehenderit tempore sint deserunt, nobis beatae modi possimus
           harum quidem dicta iste omnis ut optio reiciendis cum?</p>
    </div>
    </Demo>
    <Epic>
            <div className='grid'>
              <div className='box1'>
                <div className='images'></div>
                <div className='circle1'></div>
                <div className='circle2'></div>
                <div className='circle3'></div>
              </div>
              <div className='box2'><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Odio reprehenderit tempore sint deserunt, nobis beatae modi possimus
           harum quidem dicta iste omnis ut optio reiciendis cum?</p>
           <div className='buton'>
           <button onClick={()=> navigate("/Services") }>Read more about us</button>
      </div></div>
            </div>

    </Epic>
    
    </>
  )
}

export default Comp