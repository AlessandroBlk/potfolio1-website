import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials' >
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/AlessandroBlk" target="_blank" rel="noreferrer"><BsGithub /></a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer"><BsWhatsapp /></a>
    </div>
  )
}

export default HeaderSocials