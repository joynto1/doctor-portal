import React from "react";
import Doctor from "../../assets/images/doctor-small.png";
import appointment from "../../assets/images/appointment.png";
const AppoinmentPage = () => {
  return (
    <div style={{ backgroundImage: `url(${appointment})` }} className="hero text-white">
      <div className="hero-content flex-col lg:flex-row ">
        <img  src={Doctor} className="max-w-sm   rounded-lg shadow-2xl" />
        <div className="p-5"></div>
        
        <div>
          <h3 className="text-lg font-bold text-secondary  ">Appointment</h3>
          <h1 className="text-5xl font-bold">
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut <br />{" "}
            assumenda excepturi exercitationem quasi. In deleniti eaque aut{" "}
            <br /> assumenda excepturi exercitationem quasi. In deleniti eaque
            aut <br /> assumenda excepturi exercitationem quasi. In deleniti
            eaque aut <br /> repudiandae et a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentPage;
