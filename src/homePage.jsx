import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="home-middle">
          <div className="home-middle-welcome">
            <span className="logo">LOGO</span>
            <h1>Welcome Back!</h1>
            <p>
              To keep connected with us please login with your personal info
            </p>
            <a className="sign-in-button" href="#">
              Sign in
            </a>
          </div>
          <div className="home-middle-form">
            <h1>Create Account</h1>
            <div className="home-middle-form-social-links">
              <div className="home-middle-form-social-link">
                <i className="fab fa-facebook-f  "></i>
              </div>
              <div className="home-middle-form-social-link">
                <i className="fab fa-google-plus-g  "></i>
              </div>
              <div className="home-middle-form-social-link">
                <i className="fab fa-linkedin-in  "></i>
              </div>
            </div>
            <small>or use your email for registration:</small>
            <div className="home-middle-form-input">
              <i className="far fa-user"></i>
              <input type="text" name="name" id="name" placeholder="Name" />
            </div>
            <div className="home-middle-form-input">
              <i className="far fa-envelope"></i>
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="home-middle-form-input">
              <i className="fa fa-lock"></i>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <a className='sign-up-button' href="#">sign up</a>
          </div>
        </div>
        <div className="home-top-right"></div>
        <div className="home-bottom-left"></div>
      </div>
    );
  }
}

export default Home;
