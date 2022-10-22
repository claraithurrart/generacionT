import React from 'react'
import './Header.css'
import img from './img/logo.png'

function Header (props){
    const { subtitulo} =props
    return (
      <div className='headerClass'>
        <img src= {img}/>
    
     <h2>{subtitulo}</h2>
     
      </div>
    )
  }


export default Header