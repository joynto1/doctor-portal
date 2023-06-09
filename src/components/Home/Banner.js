import React from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png"
const Banner = () => {
    
  return (

     <div style={{backgroundImage:`url(${bg})`}}  className="hero min-h-screen  bg-cover ">
      <div className="hero-content   flex-col  lg:flex-row-reverse  ">
        <img src={chair} className=" max-w-sm rounded-lg shadow-2xl" />
        <div className="p-5"></div>
        <div>
          <h1 className="text-5xl font-bold">
            You New Smile Starts <br /> Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            <br /> excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>

  );
};

export default Banner;
