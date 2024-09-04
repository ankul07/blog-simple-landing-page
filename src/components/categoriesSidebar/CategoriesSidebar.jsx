import React from "react";
import "./categoriesSidebar.css";
import WidgetHeader from "../widgetHeader/WidgetHeader";
import facebooklogo from "../../assets/facebook.png";
import instagramlogo from "../../assets/instagram.png";
import twitterlogo from "../../assets/twitter.png";
import popularImage from "../../assets/feature.jpg";

const CategoriesSidebar = () => {
  return (
    <section className="categories-post">
      <div className="social-container">
        <WidgetHeader title="FOLLOW US" />
        <article className="social-list">
          <a href="">
            <img src={facebooklogo} alt="facebook-logo" />
          </a>
          <a href="">
            <img src={instagramlogo} alt="instagram-logo" />
          </a>
          <a href="">
            <img src={twitterlogo} alt="twitter-logo" />
          </a>
        </article>
      </div>

      <div className="popular-container">
        <WidgetHeader title="MOST POPULAR" />
        <div className="most-popular-list">
          <article className="blog_category_popular">
            <img src={popularImage} alt="most-popular" />
            <div className="blog_category_content">
              <h1>
                30+ Free Login & Registration Form Templates in HTML & CSS
              </h1>
              <p>November-22-2021</p>
            </div>
          </article>

          <article className="blog_category_popular">
            <img src={popularImage} alt="most-popular" />
            <div className="blog_category_content">
              <h1>
                30+ Free Login & Registration Form Templates in HTML & CSS
              </h1>
              <p>November-22-2021</p>
            </div>
          </article>

          <article className="blog_category_popular">
            <img src={popularImage} alt="most-popular" />
            <div className="blog_category_content">
              <h1>
                30+ Free Login & Registration Form Templates in HTML & CSS
              </h1>
              <p>November-22-2021</p>
            </div>
          </article>

          <article className="blog_category_popular">
            <img src={popularImage} alt="most-popular" />
            <div className="blog_category_content">
              <h1>
                30+ Free Login & Registration Form Templates in HTML & CSS
              </h1>
              <p>November-22-2021</p>
            </div>
          </article>
        </div>
      </div>

      <div className="category-container">
        <WidgetHeader title="CATEGORIES" />
        <ul className="categories-list">
          <li>
            <a href="#">HTML & CSS</a> <span>14</span>
          </li>
          <li>
            <a href="#">Javascript</a> <span>20</span>
          </li>
          <li>
            <a href="#">Registration Form</a> <span>36</span>
          </li>
          <li>
            <a href="#">Login Form</a> <span>2</span>
          </li>
          <li>
            <a href="#">Blog Card</a> <span>8</span>
          </li>
          <li>
            <a href="#">Reactjs</a> <span>16</span>
          </li>
          <li>
            <a href="#">Tailwind CSS</a> <span>12</span>
          </li>
          <li>
            <a href="#">Website Design</a> <span>10</span>
          </li>
          <li>
            <a href="#">Image Slider</a> <span>101</span>
          </li>
          <li>
            <a href="#">Javascript Games</a> <span>23</span>
          </li>
          <li>
            <a href="#">Form Validation</a> <span>65</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default CategoriesSidebar;
