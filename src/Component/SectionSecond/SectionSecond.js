import React from "react";
import Img from "../../assets/w.png";
import Img2 from "../../assets/tab.png";
import "./style.css";

const SectionSecond = () => {
  return (
    <div
      className=" d-flex align-items-center container-fluid mainWrapper"
     
    >
      <div className="d-flex align-items-center secondsection">
        <div style={{ marginLeft: "6rem", width: "60%" }} className="secondContent">
          <h3 style={{ paddingBottom: "1rem", fontWeight: "bolder" }}>
            Conditionali Based <br /> Monitoring that <span>works</span>
          </h3>
          <p>
            Intellithink combines the potential of vibration and current
            signature analysis with AI to detect fault conditions and the extent
            of these faults in rotating equipment.
          </p>
          <p>
            Our robust MAchine Learning algorithms aid in mitigating potential
            motar failure anywhere from weeks to months ahead of more standard
            vibration-based solutions. Our techniques ae capable of redicting
            the most commonly occuring fault conditions in 3-phase induction
            motors and rotating equipment.
          </p>
          <button className="btn btn-danger mt-3">Request a demo</button>
        </div>
        <div className="imgDiv">
          <img src={Img} className="img1" alt="img" />
          <img src={Img2} className="img2" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SectionSecond;
