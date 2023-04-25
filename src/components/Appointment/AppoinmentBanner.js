import React, { useState } from 'react';
import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png"
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppoinmentBanner = () => {
    const today = new Date();
    const [day,setDay] =useState();
     let footer =<p>Appointment for Select a Day </p>
     if(day){
        footer = <p>Appointmented Day {format(day,'PPP')} </p>;
     }
    return (
        <div style={{backgroundImage:`url(${bg})`}}  className="hero min-h-screen  ">
      <div className="hero-content   flex-col  lg:flex-row-reverse  ">
        <img src={chair} className=" max-w-sm rounded-lg shadow-2xl" />
        <div className="p-5"></div>
         <DayPicker
        
            mode='single'
            day ={day}
            onSelect ={setDay}
            footer ={footer}
         ></DayPicker>
      </div>
    </div>
    );
};

export default AppoinmentBanner;