import React from 'react'
import BloodBridgeLogo from "../../assets/public/BloodBridgeLogo.png"
import signinAssest from "../../assets/public/signinAssest.png"
import { MdGroups } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
  return (
    <>
    <div className="main-container">
      <div className="left-section">
        <div className="logo-container">
          <img src={BloodBridgeLogo} alt="BloodBridge" />
          <div className="title">Blood<span>Bridge</span></div>
        </div>
        <div className="hero-title">A drop today, a <span>brighter tomorrow.</span></div>
        <div className="hero-sub-title">Connect. Donate. Save lives.</div>
        <div className="image">
          <img src={signinAssest} alt="Save Heart" />
        </div>
        <div className="qoutes-container">
          <div className="qoute">
            <div className="symbol"><MdGroups /></div>
            <div className="content">
              <div className="main-content">Real people, real impact</div>
              <div className="sub-content">Join a growing community of life-savers.</div>
            </div>
          </div>
          <div className="qoute">
            <div className="symbol"><AiFillSafetyCertificate /></div>
            <div className="content">
              <div className="main-content">Safe & Verified</div>
              <div className="sub-content">Trusted organizations and donors.</div>
            </div>
          </div>
          <div className="qoute">
            <div className="symbol"><FaHeart /></div>
            <div className="content">
              <div className="main-content">Because every drop counts</div>
              <div className="sub-content">Be the reason someone gets a second chance.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="signup-text">
          Don't have an account <Link to="/register">Sign up</Link>
        </div>
        <div className="login-form-container">
          <div className="form-title">
            <h3>Welcome back</h3>
            <p>Login to continue making a difference.</p>
          </div>
          <form action="#">
            <label for="email">Email</label>
            <input type="email" id='email' name='email' /><br />
            <label for="password">Password</label>
            <input type="password" id='password' name='password' /><br />
            <span>Forgot password?</span><br />
            <button type='submit'>Log in</button>
          </form>
          <div className="google-signin-btn">
            <button><FcGoogle /> Continue with Google</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login