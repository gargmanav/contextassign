import React from 'react'
import './About.css'
import {useContext } from "react";
import {Himanshu} from '../App';

const AboutUs = () => {
  const mei = useContext(Himanshu); 
  return (
    <div className='about' style={mei.sendcolor}>
     <center>
     About Us
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sapiente accusamus cupiditate, delectus consequatur saepe dicta ipsa, corporis explicabo cum aliquam, fugit maiores! Deleniti, itaque molestias illo excepturi natus qui?</h2>
      </center> 
    </div>
  )
}

export default AboutUs