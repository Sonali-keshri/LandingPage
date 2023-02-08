import React from "react";
import "./style.css";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsFillOctagonFill } from "react-icons/bs";

const SectionFifth = () => {
  return (
    <div className="container-fluid wrapperFifth">
      <div className=" div1 d-flex justify-content-center gap-5">
        <div className="logo text-danger d-flex ">
          <BsFillOctagonFill style={{ fontSize: "2.5rem", margin: "0 .5rem" }} />
          <div>
          <h3>INTELLTHINK </h3>
          <small>CONNECT | INTEGRATE | TRANSFORM</small>
          </div>
        </div>

        <div>
          <h5 className=" h5 text-danger">Products</h5>
          <p>IntelliVibe</p>
          <p>IntelliAmp</p>
        </div>
        <div>
          <h5 className=" h5 text-danger">Industries</h5>
          <p>Cement</p>
          <p>Steel</p>
          <p>Power Generation</p>
          <p>Oil & gas</p>
          <p>Food</p>
        </div>
        <div>
          <h5 className=" h5 text-danger">Resourses</h5>
          <p>Blog</p>
          <p>Case Studies</p>
        </div>
        <div>
          <h5 className=" h5 text-danger">Company</h5>
          <p>About us</p>
          <p>Career</p>
        </div>
        <div>
          <h5 className=" h5 text-danger">Connect</h5>
          <p>info@intelliThink</p>
          <div className="d-flex gap-4 mt-5">
            <p className="text-danger">
              <AiFillYoutube />
            </p>
            <p className="text-primary">
              <FaLinkedinIn />
            </p>
            <p className="text-primary">
              <FaFacebookF />
            </p>
          </div>
        </div>
      </div>
      <h2 className="footer">Copyright@Intellithink. All reserved rights</h2>
    </div>
  );
};

export default SectionFifth;
