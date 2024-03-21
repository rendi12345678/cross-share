import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/user-authentication.css";
import Button from "../components/ui/Button";
import Form from "../components/ui/Form";
import Input from "../components/ui/Input";
import Line from "../components/ui/Line";
import useButtons from "../hooks/useButtons";

function SignUp() {
  const { PrimaryButton } = useButtons();

  const signUp = () => {}

  return (
    <div className="authentication-container">
      <div className="wrapper">
        <h1>Sign Up</h1>
        <Form>
          <Input label="Name" type="text" placeholder="Enter your name"/>
          <Input label="Email" type="email" placeholder="Enter your email"/>
          <Input label="Password" type="password" placeholder="Enter your password"/>
          <PrimaryButton text="Sign up with Cross Share" size="medium-btn" />
        </Form>
        <Line/>
        <Button
          onClick={() => signUp()}
          bgColor="white"
          type="button"
          size="medium-btn"
          text="Sign up with Google"
          color="var(--primary-color)"
        />
        <p>
          Already have an account? <Link to="/sign-in">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
