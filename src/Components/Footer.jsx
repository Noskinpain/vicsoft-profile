import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { PhoneOutlined, RedEnvelopeOutlined, EnvironmentOutlined,
    FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined,
    GithubOutlined } from '@ant-design/icons'


const Overall = styled.div`
  background-color: silver;
  margin-top: 5%;
  padding-bottom: 3%;
  h2{
    padding-top: 8%;
   color: #090945;
   text-align: center;
   font-weight: bold;
   padding-bottom: 4%;
  }
 
  .textbox p{
    font-weight: 400;
    font-size: 20px;
    color: #090945;
    text-align: start;
    padding-left: 28%;
    margin-bottom: 20px;
    margin-top: 20px;
  }
input, textarea{
  border: none;
  border-bottom: 2px solid #090945;
  background: transparent;
  width: 45%;
  margin-left: 27%;
}

button{
  margin-left: 27%;
  margin-top: 3%;
  width: 45%;
  height: 70px;
  margin-bottom: 50px;
  background-color:#090945;
  font-weight: bold;
  color:white;
    font-size: 15px;
    cursor: pointer;
   border: none;
}
.lastgrid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-left: 10%;
  margin-right: 10%;
  justify-content: center;
p{
  color: #090945;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    padding-left: 3%;
}
span{
  font-weight: 400;
    font-size: 18px;
    text-align: center;
    line-height: 35px;
    padding-left: 30%;
    color: #090945;
    margin-bottom: 50px;
}
}

`


const Footer = () => {
    const navigate = useNavigate()
  return (
    <>
   
    <Overall>
    <h2>Contact Us</h2>
        
           <div className='textbox'>
           <p>Name</p>
           <input type="text" size="" autocomplete=""  required/>
           <p>Email</p>
           <input type="email" name="email"  id="email" />
           <p>Sybject</p>
           <input type="text" size="" autocomplete=""  required/>
           <p>Message</p>
           <textarea name="" id="" cols="0" rows="5"></textarea>
           </div>
           <button>Submit</button>
           <div className='lastgrid'>
            <div><EnvironmentOutlined style={{fontSize:"50px", color:"black",paddingLeft:"46%",
          paddingTop:"3%"}} />
            <p>WHERE TO FIND US</p>
            <span>xxxxxxx xxxxx xxxx</span><br/><span>Gwagwalada, Abuja.<br/></span>
            </div>
            <div><RedEnvelopeOutlined style={{fontSize:"50px", color:"black",paddingLeft:"42%",
          paddingTop:"3%"}}/>
            <p>EMAIL US AT</p>
            <span>xxxxxxxxxx@gmail.com </span><br/>
               <span>xxxxxxxxxxx@gmail.com</span>
           
            </div>
            <div><PhoneOutlined style={{fontSize:"50px", color:"black",paddingLeft:"40%",
          paddingTop:"3%"}}/>
            <p>CALL US AT</p>
            <span>phone: xxxxxxxxxxx or</span> <br/> <span>xxxxxxxxxxx</span>
            </div>
           </div>
          
    </Overall>
    </>
  )
}

export default Footer