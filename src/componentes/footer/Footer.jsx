import React from 'react'

export const Footer = () => {
  return (
    <footer>
      <div className='icons_container'>
      <a href="https://www.linkedin.com/in/ariel-sotelo-sartoris-6a66b8170/" target='_blank'>
        
        <i className="fa-brands fa-linkedin fa-2xl" style={{cursor:  "pointer"}}></i>
        </a> 
       
        <a href="mailto:arielsotelosartoris@gmail.com">

        <i class="fa-regular fa-envelope fa-2xl"  style={{cursor:  "pointer"}}></i>
        </a>
        <a href="https://github.com/Jass2693" target='_blank'>

        <i class="fa-brands fa-github fa-2xl"  style={{cursor:  "pointer"}}></i>
        </a>
      </div>
      <div>
        ©2023 Watcher - All rigths reserved.
      </div>
    </footer>
  )
}
