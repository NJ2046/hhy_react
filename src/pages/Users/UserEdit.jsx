import React, { Component } from "react";
import UHeader from "../../components/uHeader";
import "./user.css";

export default class UserEdit extends Component {
  render() {
    return (
      <div className="user-edit">
        <UHeader />

        <div className="container-xl content">
          <div className="info-top">
            <div style={{ textAlign: "left" }}>
              <button className="burger-menu icon-button  float-end float-md-none ">
                <span className="icon-arrow-left"></span>
              </button>
            </div>
            <div style={{ flex: 2 }}>
              <h1>Profile and credentials</h1>
            </div>
            <div>&nbsp; </div>
          </div>
          <br />
          <br />
          <div className="file-img">
            <img
              src={require("./../../images/other/avatar-lg.png").default}
              alt=""
            />
            <p>User Name</p>
          </div>
          <br />
          <br />
          <div className="file row">
            <form className=" search-form contact-form col-md-8 col-offset-2">
              <div className="form-group">
                <p>name:</p>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search and press enter ..."
                  aria-label="Search"
                />
              </div>
              <div className="form-group">
                <p>Gender:</p>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search and press enter ..."
                  aria-label="Search"
                />
              </div>
              <div className="form-group">
                <p>Email:</p>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search and press enter ..."
                  aria-label="Search"
                />
              </div>
              <div className="form-group">
                <p>Career:</p>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search and press enter ..."
                  aria-label="Search"
                />
              </div>
              <div className="form-group">
                <p>Description:</p>
                <textarea
                  name="InputMessage"
                  id="InputMessage"
                  class="form-control"
                  rows="4"
                  placeholder="Your message here..."
                  required="required"
                  data-error="Message is required."
                ></textarea>
              </div>
              <div className="form-group">
                <p>Education:</p>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search and press enter ..."
                  aria-label="Search"
                />
              </div>
              <div className="form-group">
                <p>personal certificate:</p>
                <p className="file-text">
                  Credenttials <span className="icon-plus"></span>
                </p>
                <p className="file-text">
                  Career Experiences <span className="icon-plus"></span>
                </p>
              </div>
              <div className="form-group">
                <button className="burger-menu icon-button  float-end float-md-none submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
