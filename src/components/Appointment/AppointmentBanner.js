import React, { useEffect, useState } from "react";
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import AppointmentServices from "./AppointmentServices";
 
 
const AppoinmentBanner = () => {
  const [date, setDate] = useState(new Date());
  const [treatment,setTreatment] =useState(null)
  const [appointments,setAppointments] =useState([]);
  useEffect( ()=>{
      fetch('appointments.json')
      .then(res => res.json())
      .then(data => setAppointments(data));
  },[])

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="hero min-h-screen"
      >
        <div className="hero-content   flex-col  lg:flex-row-reverse  ">
          <img src={chair} className=" max-w-sm rounded-lg shadow-2xl" />
          <div className="p-5"></div>
          <DayPicker mode="single" date={date} onSelect={setDate}></DayPicker>
        </div>
      </div>
      <p className="text-center text-xl mt-20 text-secondary "> 
        Selected Appointmented Date {format(date,"PP")}
      </p>
      <p className="text-center">Select Your Service</p>
     <div className="ms-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 pt-20">
       {
        appointments.map(appointment=> 
        <AppointmentServices
        key={appointment._id}
        name={appointment.name}
        appointment={appointment}
        slots={appointment.slots}
        setTreatment ={setTreatment}
        length={appointment.slots.length}
        date ={date}
     
        treatment ={treatment}
        ></AppointmentServices>
        )
        
      }
     
     </div>
     
        
    </div>
  );
};

export default AppoinmentBanner;
