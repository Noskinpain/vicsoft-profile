import React from 'react'
import {motion} from "framer-motion"
import Footer from '../Components/Footer'
import Mainfooter from '../Components/Mainfooter'
import styled from 'styled-components'
import img from "./../image/image35.png"
import {useFormic} from "formic"
import { PhoneOutlined, RedEnvelopeOutlined, EnvironmentOutlined,
  FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined,
  GithubOutlined } from '@ant-design/icons'

const Contact = styled.div`
   background: url(${img});
    width: 100%;
    height: 730px;
    position: relative;
  background-size: cover;
   background-position: center;
   object-fit: cover;
`
const Body = styled.div`
  background-color:  #0c0c3f;
  width: 100%;
 height: 1170px;
 padding-top: 8%;
`
const Container = styled.div`
background-color: white;
width: 40%;
height: 880px;
margin-left: 30%;
padding-left: 5%;
  padding-right: 5%;
h2{
  text-align: center;
  color: #0c0c3f;
  font-weight: bold;
  font-size: 30px;
  padding-top: 3%;
}
p{
  padding-top: 5%;
  color: #0c0c3f;
  font-size: 20px;
  font-weight: bold;
  line-height: 40px;
}
hr{
  border: 1px solid black;
}

`
const Form = styled.div`
  background-color: silver;
  width: 100%;
  height: 600px;

`

const ContactUs = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <Contact/>
       <Body>
       <Container>
        <h2>Contacts</h2>
        <p><RedEnvelopeOutlined style={{fontSize:"30px", paddingRight:"6%"}}/>lordvic@gmail.com</p>
        <hr/>
        <p><GithubOutlined style={{fontSize:"30px", paddingRight:"6%"}}/>Github.com</p>
        <hr/>
         <p><LinkedinOutlined style={{fontSize:"30px", paddingRight:"6%"}}/>Linkedin.com</p>
         <hr/>
         <p><FacebookOutlined style={{fontSize:"30px", paddingRight:"6%"}}/>Facebook.com</p>
         <hr/>
         <p><TwitterOutlined style={{fontSize:"30px", paddingRight:"6%"}}/>Twitter.com</p>
         <hr/>
         <p><InstagramOutlined style={{fontSize:"30px", paddingRight:"6%"}}/>Instagram.com</p>
         <hr/>
         <p style={{fontSize: "15px"}}><EnvironmentOutlined style={{fontSize:"30px", paddingRight:"6%"}}/>No.20, Corner Shop, Passo Road, After University of Abuja Teach</p>
         <hr/>
       </Container>
       </Body>
       <Form>

       </Form>
      
    <Footer/>
    <Mainfooter/>
    </motion.div>
  )
}

export default ContactUs