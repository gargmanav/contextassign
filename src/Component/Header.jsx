import React from "react";
import {NavLink} from 'react-router-dom';
import { useContext } from "react";
import {Himanshu} from '../App';

import './header.css'

 const Header = () => {
    const mei = useContext(Himanshu); 
  return (
    <div className="header" style={mei.sendcolor}>
        {console.log(mei)}
        <img src="https://www.geekster.in/images/logo.svg" style={{paddingRight:"5rem"}}></img>
        <span style={{width:"15vw"}}><NavLink to='/Home' style={mei.sendcolor}>Home</NavLink></span>
        <span style={{width:"15vw"}}><NavLink to='/AboutUs' style={mei.sendcolor} >About Us</NavLink></span>
        <span style={{width:"15vw"}}><NavLink to='/Services' >Services</NavLink></span>
        <button id="btn_submit" style={{width:"8vw",height:"30px"}} onClick={() =>{
            if(mei.sendcolor.backgroundColor == "white"){
                mei.setbg({backgroundColor:"black",color:"white"})
            }
            else{
                mei.setbg({backgroundColor:"white",color:"black"})
            }
        }}>{mei.sendcolor.backgroundColor}</button>
        </div>
  )
}

export default Header