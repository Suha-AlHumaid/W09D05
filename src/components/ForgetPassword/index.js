import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./style.css";
import { Link } from "react-router-dom";
const ForgetPassword = () => {
  const [email, setEmail] = useState("initialState");
  const [message, setMessage] = useState("");
  const state = useSelector((state) => {
    return {
      reducerLog: state.reducerLog,
    };
  });

  const forgotpasswordNav = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/forgotpassword`,
        {
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${state.reducerLog.token}`,
          },
        }
      );
      console.log(result.status);
      if (result.status === 200) {
        setMessage(
          "We Send email with link to reset your password, Check your Spam or bulk mail folders."
        );
      }
    } catch (error) {
      console.log(error.response);
      if (error.response.status == 403 || error.response.status == 404) {
        setMessage("Your email is not regestered yet.");
      } else {
        setMessage("Some thing wrong happend ..");
      }
    }
  };
  return (
    <div className="container">
      <div className="form">
        <h1 className="heading">Enter your current email ! </h1>
        <input
          className="input"
          placeholder="Enter email..."
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="txxt">
          <p className="red">{message ? message : ""}</p>
          <br />
          {message.includes("Your email is not regestered yet.") ? (
            <Link className="link" to="/">
              Sign Up
            </Link>
          ) : (
            ""
          )}
        </div>
        <br />
        <button className="submit" onClick={forgotpasswordNav}>
          Send To my Email
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
