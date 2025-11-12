import React from 'react'
import "./Header.css"
import headerImg from "../../assets/heroImg.jpg"

const Header = ({heading}) => {
  return (
    
      <section className="header" style ={{backgroundImage: `url(${headerImg})`, backgroundSize:"cover", backgroundPosition:"fixed"}}>
     <h1>{heading}</h1>
<p>Welcome to the new world of ADVENTURE!</p>
      </section>
    
  )
}

export default Header
