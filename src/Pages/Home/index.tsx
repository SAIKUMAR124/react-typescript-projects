import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <h3>
        <Link to="/form">Formik Form</Link>
      </h3>
    </div>
  );
};

export default Home;
