import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <h1>Create Account</h1>
      <br />
      <Form>
        <FormGroup>
          <Input
            id="exampleFirstName"
            name="firstname"
            placeholder="First Name"
            type="text"
          />
          <br />
          <Input
            id="exampleLastName"
            name="lastname"
            placeholder="Last Name"
            type="text"
          />
          <br />
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
          />
          <br />
          <Input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="text"
          />
          <br />
          <Button className="submit-btn">Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default Signup;
