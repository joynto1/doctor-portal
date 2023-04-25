import React from "react";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
const PatientsSays = () => {
  return (
   <div className="pt-10 pb-40">
    <div className="ms-10 pb-20"><h3 className="text-secondary text-xl">Testimonial</h3>
    <h1 className="text-3xl">What Our Patients Says</h1></div>
     <div className="lg:flex  justify-center gap-4 ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="pb-10">If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex  items-center	">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={people1} />
              </div>
            </div>
            <div className="ms-5">
              <h1 className="font-semibold">Winson Herry</h1>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="pb-10">If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex  items-center	">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={people2} />
              </div>
            </div>
            <div className="ms-5">
              <h1 className="font-semibold">Winson Herry</h1>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <p className="pb-10">If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex  items-center	">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={people3} />
              </div>
            </div>
            <div className="ms-5">
              <h1 className="font-semibold">Winson Herry</h1>
              <p>California</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default PatientsSays;
