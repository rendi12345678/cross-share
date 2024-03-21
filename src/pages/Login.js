import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/user-authentication.css";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Line from "../components/ui/Line";
import useButtons from "../hooks/useButtons";
import useGoogleLoginAuth from "../hooks/useGoogleLoginAuth";
import Form from "./../components/ui/Form";

function Login() {
  const { PrimaryButton } = useButtons();
  const {logOut, googleLogin} = useGoogleLoginAuth();
  
  return (
    <div className="authentication-container">
      <div className="wrapper">
        <h1>Sign in</h1>
        <Form>
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
          />
          <PrimaryButton text="Sign in with Cross Share" size="medium-btn" />
        </Form>
        <Line/>
        <Button
          onClick={() => googleLogin()}
          bgColor="white"
          type="button"
          size="medium-btn"
          text="Sign in with Google"
          color="var(--primary-color)"
        />
        <p>
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
