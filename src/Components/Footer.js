import React from 'react'
import'./Footer.css'

function Footer() {
  return (
    <div className='footerCont'>
      <h2>Get in touch.</h2>
      <div className='footerLinksParentCont'>
        <div className='footerLinksParent'>
          <div className='footerLinks'>
            <a href='' target='_blank' rel="noreferrer"><img className='footerLogo' src='../address.png' alt=''/></a>
            <p>Dehiwela, Sri Lanka</p>
          </div>
          <div className='footerLinks'>
            <a href='' target='_blank' rel="noreferrer"><img className='footerLogo' src='../email.png' alt=''/></a>
            <p>raamakrishnanj@gmail.com</p>
          </div>
          <div className='footerLinks'>
            <a href='' target='_blank' rel="noreferrer"><img className='footerLogo' src='../mobile.png' alt=''/></a>
            <p>0777101714</p>
          </div>
      </div>
      <div className='footerLinksParentSocial'>
          <div className='footerLinks'>
            <a href='https://www.linkedin.com/in/jeyaraman-raamakrishnan-8740771b' target='_blank' rel="noreferrer"><img className='footerLogo' src='../linkedin.png' alt=''/></a>
          </div>
          <div className='footerLinks'>
            <a href='https://github.com/raam5544' target='_blank' rel="noreferrer"><img className='footerLogo' src='../github.png' alt=''/></a>
          </div>
          <div className='footerLinks'>
            <a href='' target='_blank' rel="noreferrer"><img className='footerLogo' src='../insta.png' alt=''/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
