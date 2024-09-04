import React from "react";
import "./featuredcomponent.css";
import featureImage from "../../assets/feature.jpg";
import reactJsImage from "../../assets/reactjs.png";

const FeatureComponent = () => {
  return (
    <section className="featured-blog-banner">
      <div className="featured-grid-wrapper">
        <div className="featured-grid-item featured-post">
          <img src={featureImage} alt="Email-Subscription-Form" />
          <div className="featured-overlay">
            <h2>Email Subscription Form using HTML CSS & PHP</h2>
            <p>November 25, 2020</p>
          </div>
        </div>
        <div className="featured-scroll-container">
          <div className="featured-grid-item small-item featured-post2">
            <img src={reactJsImage} alt="Image Gallery with Search Box" />
            <div className="featured-overlay">
              <h2>Image Gallery with Search Box in HTML CSS & JavaScript</h2>
            </div>
          </div>
          <div className="featured-grid-item small-item featured-post3">
            <img src={featureImage} alt="Social Media Icons" />
            <div className="featured-overlay">
              <h2>Social Media Icons Hover Animation</h2>
            </div>
          </div>
          <div className="featured-grid-item small-item featured-post4">
            <img src={reactJsImage} alt="Star Rating System" />
            <div className="featured-overlay">
              <h2>Star Rating System in HTML CSS & JavaScript</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureComponent;
