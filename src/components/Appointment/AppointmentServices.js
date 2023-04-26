import React from "react";
 

const AppointmentServices = ({ name, slots, length, day }) => {
  const formHandler = (event) => {
    event.preventDefault();
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
          <label
            htmlFor="my-modal-3"
            className="btn bg-secondary text-white border-none"
          >
            Booking For Appointment
          </label>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h2 className="text-secondary font-bold">{name}</h2>
              <form onSubmit={formHandler}>
                <input
                  type="text"
                  className="mt-5 px-10 py-3  border outline-primary  rounded-xl"
                  disabled
                  value={day}
                />
                <br />
                <select className="select select-bordered mt-5 w-64 ">
                  <option disabled selected>
                    Selected Your Time
                  </option>
                  <option>{slots}</option>
                </select>
                <br />
                <input
                  className="mt-5 px-10 py-3  border outline-primary  rounded-xl"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <br />
                <input
                  className="mt-5 px-10 py-3 border outline-primary  rounded-xl"
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
                <br />
                <input
                  className="mt-5 px-10 py-3  border outline-primary  rounded-xl"
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />{" "}
                <br />
                <button className="btn  bg-secondary mt-10 text-white border-none">
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
