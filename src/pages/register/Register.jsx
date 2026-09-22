import React, { useState } from "react";
import BloodBridgeLogo from "../../assets/public/BloodBridgeLogo.png";
import signupAssest from "../../assets/public/signupAssest.png";

import { MdGroups } from "react-icons/md";
import { FaLocationDot, FaHeart } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import "./Register.css";

const Register = () => {
  const roles = {
    Organization: "ORGANIZATION",
    Donor: "DONOR",
  };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [role, setRole] = useState(roles.Donor);
  const [acceptPP, setAcceptPP] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!password) {
      alert("Please enter your password.");
      return;
    }

    if (password !== cnfPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!acceptPP) {
      alert("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    const registerData = {
      email,
      password,
      role,
      acceptPP,
    };

    console.log("Register Data:", registerData);

    setEmail("");
    setPassword("");
    setCnfPassword("");
    setRole(roles.Donor);
    setAcceptPP(false);

  };

  return (
    <div className="main-container">

      {/* ================= LEFT SECTION ================= */}
      <div className="left-section">

        <div className="logo-container">
          <img src={BloodBridgeLogo} alt="BloodBridge Logo" />

          <div className="title">
            Blood<span>Bridge</span>
          </div>
        </div>

        <div className="hero-title">
          Join a community that <span>Saves lives.</span>
        </div>

        <div className="hero-sub-title">
          Be a donor. Be a hero.
        </div>

        <div className="image">
          <img src={signupAssest} alt="Save Heart" />
        </div>

        <div className="qoutes-container">

          <div className="qoute">
            <div className="symbol">
              <MdGroups />
            </div>

            <div className="content">
              <div className="main-content">
                Make an impact
              </div>

              <div className="sub-content">
                Your donation can save multiple lives.
              </div>
            </div>
          </div>

          <div className="qoute">
            <div className="symbol">
              <FaLocationDot />
            </div>

            <div className="content">
              <div className="main-content">
                Find blood faster
              </div>

              <div className="sub-content">
                Help patients in urgent need.
              </div>
            </div>
          </div>

          <div className="qoute">
            <div className="symbol">
              <FaHeart />
            </div>

            <div className="content">
              <div className="main-content">
                Be a part of change
              </div>

              <div className="sub-content">
                A healthier, kinder tomorrow starts with you.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= RIGHT SECTION ================= */}
      <div className="right-section">

        <div className="signup-text">
          Already have an account?{" "}
          <Link to="/login">Log in</Link>
        </div>

        <div className="login-form-container">

          <div className="form-title">
            <h3>Create your account</h3>

            <p>
              Join BloodBridge and be a part of a life-saving community.
            </p>
          </div>

          <form onSubmit={handleRegister}>


            {/* Email */}
            <label htmlFor="email">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
            />

            {/* Password */}
            <label htmlFor="password">
              Password
            </label>

            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              autoComplete="new-password"
            />

            {/* Confirm Password */}
            <label htmlFor="cnfpassword">
              Confirm Password
            </label>

            <input
              type="password"
              id="cnfpassword"
              name="cnfpassword"
              value={cnfPassword}
              onChange={(e) => setCnfPassword(e.target.value)}
              placeholder="Confirm your password"
              autoComplete="new-password"
            />

            {/* Category */}
            <label>
              I am registering as
            </label>

            <div className="category-selection-container">

              {/* Donor */}
              <div className="category">
                <input
                  type="radio"
                  id="donor"
                  name="category"
                  value={roles.Donor}
                  checked={role === roles.Donor}
                  onChange={(e) => setRole(e.target.value)}
                />

                <label htmlFor="donor">
                  Donor
                </label>
              </div>

              {/* Organization */}
              <div className="category">
                <input
                  type="radio"
                  id="organization"
                  name="category"
                  value={roles.Organization}
                  checked={role === roles.Organization}
                  onChange={(e) => setRole(e.target.value)}
                />

                <label htmlFor="organization">
                  Organization
                </label>
              </div>

            </div>

            {/* Terms & Privacy */}
            <div className="tc-pp-container">

              <input
                type="checkbox"
                name="tcpp"
                id="tcpp"
                checked={acceptPP}
                onChange={(e) => setAcceptPP(e.target.checked)}
              />

              <label htmlFor="tcpp">
                I agree to the{" "}
                <span>Terms of Service</span>
                {" "}and{" "}
                <span>Privacy Policy</span>
              </label>

            </div>

            {/* Register Button */}
            <button type="submit">
              Create Account
            </button>

          </form>

          {/* Google Sign Up */}
          <div className="google-signin-btn">

            <button type="button">
              <FcGoogle />
              Continue with Google
            </button>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Register;

