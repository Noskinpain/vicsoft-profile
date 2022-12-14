import React from 'react'
import {motion} from "framer-motion"
import Mainfooter from '../Components/Mainfooter'

const Projects = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      projects
      <Mainfooter/>
      </motion.div>
  )
}

export default Projects