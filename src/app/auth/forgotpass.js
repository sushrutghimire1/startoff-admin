import React, { useState, useEffect } from "react";
import "../Styles/signIn.css";

const Forgotpass = () => {
  const [email, setEmail] = useState(undefined);
  const [emailauth, setEmailauth] = useState(false);
  const [otp, setOtp] = useState(undefined);
  const [otpauth, setOtpauth] = useState(false);
  const [password, setPassword] = useState(undefined);

  const EmailchangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const OtpchangeHandler = (e) => {
    setOtp(e.target.value);
  };
  const PasswordchangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const EmailhandleSubmit = (e) => {
    console.log("authenticating email: " + email);
    setEmailauth(true);
  };
  const AuthhandleSubmit = () => {
    console.log("authenticating otp: " + otp);
    setOtpauth(true);
  };
  useEffect(() => {
    if (otpauth) {
      console.log("change password");
    }
  });
  const EmailHTML = () => {
    return (
      <form>
        <div className="form-group">
          <label className="form-control-label">
            <i className="fas fa-envelope fa-2x"></i>
            <span className="h6">Email</span>
          </label>

          <input
            type="email"
            className="username form-control "
            name="email"
            id="email"
            value={email}
            onChange={EmailchangeHandler}
            autoFocus
          />
        </div>

        <div className="form-group my-5">
          <center>
            <button
              type="submit"
              className="btn form-control btn-primary align-self-center"
              onClick={EmailhandleSubmit}
            >
              Submit
            </button>
            <br />
          </center>
        </div>
      </form>
    );
  };

  const OtpHTML = () => {
    return (
      <form>
        <div className="form-group">
          <label className="form-control-label">
            <i className="fa fa-lock fa-2x"></i>
            <span className="h6"> OTP</span>
          </label>
          <input
            type="tel"
            className="password form-control "
            name="otp"
            id="otp"
            value={otp}
            onChange={OtpchangeHandler}
          />
        </div>
        <div className="form-group">
          <label className="form-control-label">
            <i className="fa fa-lock fa-2x"></i>
            <span className="h6">NEW PASSWORD</span>
          </label>
          <input
            type="password"
            className="password form-control "
            name="password"
            id="password"
            value={password}
            autoComplete="password"
            onChange={PasswordchangeHandler}
          />
        </div>
        <div className="form-group my-5">
          <center>
            <button
              type="submit"
              className="btn form-control btn-primary align-self-center"
              onClick={AuthhandleSubmit}
            >
              Submit
            </button>
            <br />
          </center>
        </div>
      </form>
    );
  };
  return (
    <div className="forgotpass signIn">
      <div className="row my-5">
        <div className="col-lg-4 col-md-2 col-sm-1"></div>
        <div className="col-lg-4 col-md-8 col-sm-10 px-5  login-box">
          <div className="col-lg-12 ">
            <i className="fas fa-lock fa-5x text-primary"></i>
          </div>
          <div className="col-lg-12 login-title">Forgot Password?</div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              {!emailauth && <EmailHTML />}
              {emailauth && <OtpHTML />}
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
        <div className="col-lg-4 col-md-2 col-sm-1"></div>
      </div>
    </div>
  );
};

export default Forgotpass;
