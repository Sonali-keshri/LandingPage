import React from "react";
import "./style.css";
import { RiComputerLine } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";
import { FiEye } from "react-icons/fi";
import { BsTablet } from "react-icons/bs";
import { TfiTimer } from "react-icons/tfi";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const SectionThird = () => {
  return (
    <div className="wrapperClass container-fluid">
      <div className="d-flex gap-2 insideWrapperDiv container">
        <div className=" d-flex gap-4 cards ">
          <div className="cardDiv1 ">
            <div class="card shadow singleCard" style={{ width: "14rem" }}>
              <div class="card-body text-center ">
                <p style={{ fontSize: "2rem" }}>
                  <RxCross2 className="crossIcon1 " />{" "}
                  <AiOutlineNodeIndex style={{ color: "red" }} />
                  <RxCross2 className="crossIcon2" />
                </p>
                <h5 class="card-title ">End-to-end Solution</h5>
                <div
                  style={{
                    width: "60px",
                    height: "2px",
                    backgroundColor: "red",
                    margin: ".8rem auto",
                  }}
                />
                <p class="card-text">
                  We span the whole process from intelligence sensors to machine
                  analiysis
                </p>
              </div>
            </div>
            <div class="card shadow singleCard" style={{ width: "14rem" }}>
              <div class="card-body text-center">
                <p style={{ fontSize: "2rem" }}>
                  <RiComputerLine />
                  <BsTablet className="tabIcon" />
                </p>
                <h5 class="card-title ">Device as a Service</h5>
                <div
                  style={{
                    width: "60px",
                    height: "2px",
                    backgroundColor: "red",
                    margin: ".8rem auto",
                  }}
                />
                <p class="card-text">
                  The ability to scale devices up and down as needed, pushing
                  cost from capital expenditures to operating expenses
                </p>
              </div>
            </div>
          </div>
          <div className="cardDiv2">
            <div class="card shadow singleCard" style={{ width: "14rem" }}>
              <div class="card-body text-center">
                <p style={{ fontSize: "2.5rem" }}>
                  <VscSearch /> <FiEye className="eyeIcon" />
                </p>
                <h5 class="card-title">Actionable Insight</h5>
                <div
                  style={{
                    width: "60px",
                    height: "2px",
                    backgroundColor: "red",
                    margin: ".8rem auto",
                  }}
                />
                <p class="card-text">
                  Intelligent sensors/devices and Artificial intelligence
                  solutions to provide early and actionable insights into
                  machine health
                </p>
              </div>
            </div>
            <div class="card shadow singleCard" style={{ width: "14rem" }}>
              <div class="card-body text-center">
                <p style={{ fontSize: "2rem" }}>
                  <TfiTimer />
                </p>
                <h5 class="card-title">Fastest time to value</h5>
                <div
                  style={{
                    width: "60px",
                    height: "2px",
                    backgroundColor: "red",
                    margin: ".8rem auto",
                  }}
                />
                <p class="card-text">
                  Plug and play solutions that ensures a rapid time-to-value
                  without having to build complicated custom solutions
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{marginTop:"6rem", width:"40%"}} className="thirdSecContent">
          <div style={{width:"450px"}} className="mx-5">
            <h1 className="my-4" style={{fontSize:"2.2rem"}}>The Intellthink <span className="text-danger ">Advantage</span></h1>
            <div
                  style={{
                    width: "60px",
                    height: "2px",
                    backgroundColor: "red",
                    margin: ".8rem auto",
                  }}
                />
            <p >
             Intellithink combines the potential of vibration and current
             signature analysis with AI to detect fault conditions and the extent of these faults.
            </p>
            <button className="btn btn-danger px-4 mt-3">Know More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThird;
