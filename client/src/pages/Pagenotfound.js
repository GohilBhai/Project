import React from "react";
import Layout from "../components/Layout/Layout";
import "../styles/AuthStyles.css";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="not-found-container">
        <div className="not-found-image"></div>
        <Link to="/" className="custom-button">
          Visit our homepage
        </Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
