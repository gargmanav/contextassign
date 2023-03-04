import React from 'react'
import './About.css'
import {useContext } from "react";
import {contextapi} from '../App';

const Services = () => {
  const mei = useContext(contextapi); 
  return (
    <div className='about' style={mei.sendcolor}>
      <center>
      Services
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod corporis cupiditate reprehenderit, magni ducimus quis dolor eveniet eos rerum beatae sed. Dicta, quasi facilis cumque accusamus velit voluptate eaque!</h2>
      </center>
     
    </div>
  )
}

export default Services