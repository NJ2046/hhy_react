import React, { Component } from "react";
import UHeader from "../../components/uHeader";
import "../Users/user.css";

export default class AInfo extends Component {
  state = {
    index: 0,
  };

  render() {
    const { index } = this.state;
    const goPay=()=>{
      this.props.history.push("/adminPay")
    }

    return (
      <div className="user-edit">
        <UHeader />

        <div className="new-wrap">
          <div style={{ width: "200px", paddingLeft: "6%" }}>
            <div style={{ textAlign: "left" }}>
              <button className="burger-menu icon-button  float-end float-md-none ">
                <span className="icon-arrow-left"></span>
              </button>
            </div>
          </div>
          <div className="container-xl content" style={{ width: "1080px" }}>
            <div className="info-top">
              <h1>My Page</h1>
            </div>
            <br />
            <br />
            <div className="file-img">
              <img
                src={require("./../../images/other/avatar-lg.png").default}
                alt=""
              />
              <div>User Name</div>
              <div>My Profile and credential</div>
              <button onClick={goPay}>
                pay for
              </button>
            </div>
            <br />
            <br />
            <div>
              <nav class=" navbar-expand-lg  my-user-nav">
                <ul class="navbar-nav mr-auto">
                  <li
                    class={index == 0 ? "nav-item active" : "nav-item"}
                    onClick={() => {
                      this.setState({ index: 0 });
                    }}
                  >
                    <a class="nav-link">0 Post</a>
                  </li>
                  <li
                    class={index == 1 ? "nav-item active" : "nav-item"}
                    onClick={() => {
                      this.setState({ index: 1 });
                    }}
                  >
                    <a class="nav-link ">0 Answers</a>
                  </li>
                  <li
                    class={index == 2 ? "nav-item active" : "nav-item"}
                    onClick={() => {
                      this.setState({ index: 2 });
                    }}
                  >
                    <a class="nav-link ">0 Questions</a>
                  </li>
                  <li
                    class={index == 3 ? "nav-item active" : "nav-item"}
                    onClick={() => {
                      this.setState({ index: 3 });
                    }}
                  >
                    <a class="nav-link ">0 Likes</a>
                  </li>
                  <li
                    class={index == 4 ? "nav-item active" : "nav-item"}
                    onClick={() => {
                      this.setState({ index: 4 });
                    }}
                  >
                    <a class="nav-link ">0 Shares</a>
                  </li>
                  <li
                    class={index == 5 ? "nav-item active" : "nav-item"}
                    onClick={() => {
                      this.setState({ index: 5 });
                    }}
                  >
                    <a class="nav-link ">more</a>
                  </li>
                </ul>
              </nav>

              <div className="conents-wrap">
                <ul>
                  <li>
                    <div className="imgs">
                      <img
                        src=""
                        src={require("./../../images/other/about.jpg").default}
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h1 className="title">asdasdasfasfasdasd</h1>
                      <div className="sub-title">asdasdasfasfasdasd</div>
                      <div className="text-content">
                        asdasdasdasdasdfbfdbdfbdfbasfasfasdasd
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="imgs">
                      <img
                        src=""
                        src={require("./../../images/other/about.jpg").default}
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <h1 className="title">asdasdasfasfasdasd</h1>
                      <div className="sub-title">asdasdasfasfasdasd</div>
                      <div className="text-content">
                        asdasdasdasdasdfbfdbdfbdfbasfasfasdasd
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <br />
            <br />
            <br />
            <br />
          </div>
          <div style={{ width: "400px" }}>
            <div style={{ marginTop: "320px" }}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
