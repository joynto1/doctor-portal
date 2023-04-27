 
import React     from "react";
 
 

const AppointmentServices = ({ name, slots, length, date,setTreatment,treatment  }) => {
     

  const formHandler = (event) => {
    event.preventDefault();
    const slot =event.target.slot.value;
     
    console.log(slot);
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title ">{name}</h2>
        <p>{slots[0]}</p>
        <p>{length} Spaces Avilable</p>
        <div className="card-actions">
          {" "}
          {/* The button to open modal */}
          <label onClick={()=>setTreatment(name)}
            htmlFor="my-modal-3"
            className="btn bg-secondary text-white border-none"
          >
            Booking For Appointment
          </label>
          <input type="checkbox" id="my-modal-3"  className="modal-toggle" />
          <div className="modal" >
            <div className="modal-box relative">
            <label
                htmlFor="my-modal-3"  
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h2 className="text-secondary font-bold">{treatment}</h2>
              <form onSubmit={formHandler}>
                <input
                  type="text"
                  className="mt-5 px-10 py-3  border outline-primary  rounded-xl"
                  disabled
                  value={date}
                />
                <br />
                <select name="slot" className="select select-bordered mt-5 w-64 ">
                  <option disabled selected>
                    Selected Time
                  </option>
                   {slots.map(slot=><option value={slot}>{slot}</option>)}
                </select>
                <br />
                <input
                  className="mt-5 px-10 py-3  border outline-primary  rounded-xl"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                   
                />
                <br />
                <input
                  className="mt-5 px-10 py-3 border outline-primary  rounded-xl"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                   
                />
                <br />
                <input
                  className="mt-5 px-10 py-3  border outline-primary  rounded-xl"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                   
                /> 
                <br />
                <button  className="btn  bg-secondary mt-10 text-white border-none">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentServices;
