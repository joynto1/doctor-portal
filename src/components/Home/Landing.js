import React from "react";
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import call from '../../assets/icons/phone.svg'
 
const Landing = () => {
  return (
    <div className=" lg:flex  justify-center gap-4 text-white ps-5 pe-5">
      <div style={{background:`linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)`}} className="card card-side  px-5 shadow-xl mb-10">
        <figure>
          <img src={clock} alt=" "/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>Click the button to watch on Jetflix app.</p>
           
        </div>
      </div>
      <div style={{background:`#3A4256`}} className="card card-side px-5 shadow-xl mb-10">
        <figure>
          <img src={location} alt=" "/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Visit Our Location</h2>
          <p>Click the button to watch on Jetflix app.</p>
           
        </div>
      </div>
      <div style={{background:`linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)`}} className="card card-side  px-5  shadow-xl mb-10">
        <figure>
          <img src={call} alt=" "/>
        </figure>
        <div className="card-body">
          <h2 className="card-title">Contact Us Now</h2>
          <p>Click the button to watch on Jetflix app.</p>
           
        </div>
      </div>
    </div>
  );
};

export default Landing;
