import React from 'react'
import {useContext } from "react";
import {contextapi} from '../App';

const Home = () => {
  const mei = useContext(contextapi); 
  return (
    <div className='about' style={mei.sendcolor}>
      <center>
      Home
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nisi, ipsa asperiores pariatur, sit inventore suscipit voluptates sunt cumque ducimus tenetur mollitia voluptas consequuntur aliquam? In natus odit molestiae ea.</h2>
      </center>
      
    </div>
  )
}

export default Home