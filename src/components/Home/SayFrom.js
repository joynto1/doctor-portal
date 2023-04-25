import React from "react";
import appointment from "../../assets/images/appointment.png";
const SayFrom = () => {
    const submitHandler =(event)=>{
        event.preventDefault();
    }
  return (
    <div style={{ backgroundImage: `url(${appointment})` }} className="pb-5">
        <div className="text-center p-5">
            <h3 className="text-xl font-semibold text-secondary">Contact Us</h3>
            <h1 className="text-3xl text-white">Stay Connected With Us</h1>
        </div>
      <div className="hero">
          <form onSubmit= {submitHandler}  className="card flex-shrink-0 w-full max-w-sm ">
            <div className="card-body">
              <div className="form-control">
               
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <textarea
                  type="text"
                  required
                  placeholder="Your Message"
                  className="textarea textarea-bordered"
                /> 
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white">submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
   
  );
};

export default SayFrom;
