import React from 'react'
import './footer.css'

const Footer = ()=> {
  return (
    <div className='footer flex'>
      <div>Developed By Walaa Ayyad &copy; 2024</div>
      <div className="footer-social-links flex">
        <a 
          href="https://github.com/walaaayyad/egyptianCoders" 
          target="_blank"
          aria-label="Github link">
          <span className='icon-github'></span>
          </a>
        <a 
          href="https://www.linkedin.com/in/walaa-ayyad/" 
          target="_blank"
          aria-label="Linkedin link">
          <span className='icon-linkedin-square'></span>
        </a>
        <a 
          href="mailto:walaa_ayyad7@yahoo.com" 
          target="_blank"
          aria-label="Email link">
          <span className='icon-mail'></span>
        </a>
      </div>
    </div>
  )
}

export default Footer