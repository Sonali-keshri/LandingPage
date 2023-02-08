import React from "react";
import Navbar from "../navbar/Navbar";
import "./style.css";
import {MdKeyboardArrowRight, MdKeyboardArrowLeft} from 'react-icons/md'
import biocon from '../../assets/bi.png'
import infyiot from '../../assets/inf.png'
import aws from '../../assets/aws.png'
import apollo from '../../assets/apollo.png'
import tvs from '../../assets/tvs.png'
import vid1 from '../../assets/vid1.mp4'



const SectionFirst = () => {
  return (
    <>
      <div className=" container-fluid wrapper">
        <video autoPlay muted playsInline className="bg-video">
          <source src={vid1} type="video/mp4"/>
        </video>
        <Navbar />
        <div
          className="container d-flex align-items-center main-Container"
          style={{ height: "90%" }}
        >
          <div className="content">
            <h1 style={{minWidth:"80%"}}>
              Building the Future of machine analytics
            </h1>
            <p className="my-3" style={{color:"lightgrey"}}>
              8 out of manufactures say the elimination of unplanned downtime is a number one or hight priority of them.
              Explore how Intellithink can bring the future of machine health analtytics using sensors and Artificial Intelligence.
            </p>
            <button className="btn btn-danger">Request a demo</button>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 mb-5 bg-body rounded stickyNav">
          <div class="container comapny">
            <span class="navbar-brand"><MdKeyboardArrowLeft/></span>
            <a class="navbar-brand" href="#">
              <img src={biocon} alt="img"/>
            </a>
            <a class="navbar-brand" href="#">
              <img src={infyiot} alt="img"style={{width:"100%" ,marginLeft:"-30px"}} className="infyiot"/>
            </a>
            <a class="navbar-brand" href="#">
              <img src={aws} alt="img"/>
            </a>
            <a class="navbar-brand" href="#">
              <img src={apollo} alt="img"/>
            </a>
            <a class="navbar-brand" href="#">
              <img src={tvs} alt="img"/>
            </a>
            <span class="navbar-brand "><MdKeyboardArrowRight/></span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default SectionFirst;
