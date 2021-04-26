import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

import "../Styles/signIn.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      repassword: "",
      role: "consumer",
      email: "",
      check: false,
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    if (this.state.password === this.state.repassword && this.state.check) {
      await axios
        .post("http://localhost:4000/auth/signUp", {
          username: this.state.username,
          password: this.state.password,
          role: this.state.role,
          email: this.state.email,
        })
        .then((res) => {
          if (res.data) {
            localStorage.setItem("user", JSON.stringify(res.data));
            this.props.history.push("/fillDetails");
          }
        });
    } else {
      console.log("error in form");
    }
  };
  changeHandler = (e) => {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  };
  handleClick = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="signIn">
        <div className="container-fluid">
          <div className="row mt-2">
            <div className="col-lg-2 col-md-1 col-sm-2">
              <nav className="navbar ">
                <div onClick={this.props.history.goBack} className="back">
                  <i className="fas fa-arrow-circle-left fa-3x"></i>
                </div>
              </nav>
            </div>
            <div className="col-lg-8 col-md-10 col-sm-8 px-5 pt-2 login-box">
              <div className="row">
                <div className="col login-title">
                  <i className="fa fa-user-circle fa-2x"></i> <br />
                  SIGNUP
                </div>
              </div>

              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  {/* form starting here */}
                  <form className="row m-2 px-5">
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">USERNAME</span>
                      </label>
                      <input
                        type="text"
                        className="username form-control"
                        name="username"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-user fa-2x"></i>
                        <span className="h6">Email</span>
                      </label>
                      <input
                        type="text"
                        className="username form-control"
                        name="email"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className=" col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-lock fa-2x"></i>
                        <span className="h6"> PASSWORD</span>
                      </label>
                      <input
                        type="password"
                        className="password form-control "
                        name="password"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className=" col-md-6 form-group">
                      <label className="form-control-label">
                        <i className="fa fa-lock fa-2x"></i>
                        <span className="h6"> Re-PASSWORD</span>
                      </label>
                      <input
                        type="password"
                        className="password form-control "
                        name="repassword"
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="row form-group">
                      <div className="col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="role1"
                          value="consumer"
                          onChange={this.changeHandler}
                        />
                        <label className="form-control-label" htmlFor="role1">
                          <span className="h6">&nbsp; Consumer</span>
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="role2"
                          value="client"
                          onChange={this.changeHandler}
                        />
                        <label className="form-control-label" htmlFor="role2">
                          <span className="h6">&nbsp; Client</span>
                        </label>
                      </div>
                      <div className="col-sm-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="role"
                          id="role3"
                          value="admin"
                          onChange={this.changeHandler}
                          defaultChecked
                        />
                        <label className="form-control-label" htmlFor="role3">
                          <span className="h6">&nbsp; Admin</span>
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="check"
                        name="check"
                        onChange={this.changeHandler}
                      />
                      <label className="form-control-label" htmlFor="check">
                        &nbsp; &nbsp;Agree to
                        <Link to="/termCondition"> terms and Condition</Link>
                      </label>
                    </div>
                    <div className="form-group">
                      <center>
                        <input
                          type="submit"
                          value="SignUp"
                          className="btn btn-success align-self-center form-control"
                          onClick={this.handleSubmit}
                        />
                      </center>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-2"></div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-2"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
