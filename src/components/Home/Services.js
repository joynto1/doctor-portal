import React from "react";
import teath from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {
  return (
  <div>
   <div className="text-center p-10">
   <h2 className="text-xl font-bold text-primary">OUR SERVICES</h2>
    <h1 className="text-3xl">Services We Provide</h1>
   </div>
      <div className=" lg:flex  justify-center gap-4  " >
      <div className="card w-96 bg-base-100 shadow-xl mb-20">
        <figure className="px-10 pt-10">
          <img
            src={teath}
            alt='' 
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Fluoride Treatment</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-20">
        <figure className="px-10 pt-10">
          <img
            src={cavity}
            alt=" "
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Cavity Filling</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
       
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl mb-20">
        <figure className="px-10 pt-10">
          <img
            src={whitening}
            alt=" "
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Teeth Whitening</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        
        </div>
      </div>
    </div>
  </div>
  );
};

export default Services;
