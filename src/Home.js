import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Button } from "reactstrap";

const Home = () => {
  return (
    <div>
      <h1>Welcome: Portal</h1>
      <Link to="/signup">
        <div>
          <Button color="primary">Click Me</Button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
