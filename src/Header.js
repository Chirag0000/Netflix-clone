import React, { useEffect, useState } from 'react';
import "./Header.css";

function Header(){
  const[show,setShow]=useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY>100){
        setShow(true)
      }else{
        setShow(false)
      }
    })

    return()=> {
      window.removeEventListener("scroll")
    }
  },[])


  return(
    <div className={`header ${show && "header_black"}`} >
    <img className="header_logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="" />

    <img className="header_usericon" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""/>
    </div>
  )
}
export default Header;