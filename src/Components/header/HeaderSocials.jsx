import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsMedium} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        
      <a href="https://www.linkedin.com" target="_blank"  rel="noreferrer" ><BsLinkedin/></a>
 
      <a href="https://github.com/" target="_blank"  rel="noreferrer" ><AiFillGithub/></a>

      <a href="https://medium.com/" target="_blank"  rel="noreferrer" ><BsMedium/></a>
       
      </div>
  )
}

export default HeaderSocials