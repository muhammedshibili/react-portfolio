import React from 'react';
import './Footer.css';
import footerImg from './img/logo.png';

function Footer() {
  return (
    <div className="footer d__flex align__items__center justify__content__space__between pz-10" style={{"padding":"10px 20px","zIndex":"100"}}>
      <img src={footerImg} alt="" className="footer__img pointer" />
      <span className="copyright" style={{"color":"#c6c9d8","font-size":"14px","opacity":"0.75"}}>Copyright @ 2022 programmer Muhammed Shibili.All Rights Reserved.</span>
    </div>
  )
}

export default Footer
