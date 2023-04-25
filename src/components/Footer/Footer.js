import React from "react";
import { Link } from "react-router-dom";
import  footerbg  from "../../assets/images/footer.png"
const Footer = () => {
  const date = new Date();
  
  const year = date.getFullYear();
  return (
   <div className="mt-20"> 
     <div style={{backgroundImage:`url(${footerbg})`}}>
      <footer className="footer justify-around p-10 text-third-content  ">
        <div>
          <span className="footer-title">SERVICES</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link className="link link-hover">BANGLADESH-KHULNA-10</Link>
        </div>
      </footer>
      <p className="text-center">Copyright @{year} all right reserved</p>
    </div>
   </div>
  );
};

export default Footer;
