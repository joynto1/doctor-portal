import React from "react";
import Banner from "./Banner";
import Landing from "./Landing";
import Services from "./Services";
import Exceptional from "./Exceptional";
import AppoinmentPage from "./AppoinmentPage";
import PatientsSays from "./PatientsSays";
import SayFrom from "./SayFrom";
import Footer from "../Footer/Footer";

const Home = () => {
    
  return (
  <div>
    <Banner></Banner>
    <Landing></Landing>
    <Services></Services>
    <Exceptional></Exceptional>
    <AppoinmentPage></AppoinmentPage>
    <PatientsSays></PatientsSays>
    <SayFrom></SayFrom>
    <Footer></Footer>
  </div>
  );
};

export default Home;
