import React from 'react'
import styled from "styled-components"
import { PhoneOutlined, RedEnvelopeOutlined, EnvironmentOutlined,
    FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined,
    GithubOutlined } from '@ant-design/icons'
import img from "./../image/vicsoft 2.png"

const Wrap = styled.div`
background-color: #0c0c3f;
padding-top: 4%;
.icon{
  background: url(${img});
   height: 45px;
   width: 90px;
   position: relative;
   background-size: cover;
   background-position: center;
   object-fit: center;
   margin-left: 13%;
}
.bottom{
  background-color: black;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 18px;
  padding-top: 2%;
}
`
const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  color: white;
  margin-top: 2%;
  margin-right: 40%;
  margin-left: 30%;
  span{
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 3%;
  }
  p{
    font-size: 15px;
  }
  .container{
display: flex;
gap: 12%;
position: relative;
left: 250%;
bottom: 85%;
  }
`
const Mainfooter = () => {
  return (
    <>
    <Wrap>
    <div className='icon'></div>
    <Section>
     <span>Brytahub</span>
     <span>Brytahub</span>
     <p>Lorem ipsum dolor</p>
     <p>Lorem ipsum dolor</p>
     <p>Lorem ipsum dolor</p>
     <p>Lorem ipsum dolor</p>
     <p>Lorem ipsum dolor</p>
     <p>Lorem ipsum dolor</p>
     <p>Lorem ipsum dolor</p>
     <p>Lorem ipsum dolor</p>
     <p>Lorem ipsum dolor</p>
     <p>Lorem ipsum dolor</p>

<div className='container'>
 <FacebookOutlined style={{fontSize:"40px"}} />
 <TwitterOutlined  style={{fontSize:"40px"}}/>
 <InstagramOutlined  style={{fontSize:"40px"}}/>
 <LinkedinOutlined  style={{fontSize:"40px"}}/>
  <GithubOutlined  style={{fontSize:"40px"}}/>
</div>
    </Section>
    <div className='bottom'>
      Copyright all Rights Reserved
    </div>
    </Wrap>
    
    </>
  )
}

export default Mainfooter