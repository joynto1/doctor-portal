import React from 'react';
import treatment from "../../assets/images/treatment.png"

const Exceptional = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row ">
          <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="p-5"></div>
        <div></div>
          <div>
            <h1 className="text-5xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut <br /> assumenda excepturi exercitationem quasi. In deleniti eaque aut <br /> assumenda excepturi exercitationem quasi. In deleniti eaque aut <br />  assumenda excepturi exercitationem quasi. In deleniti eaque aut <br />  repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Exceptional;