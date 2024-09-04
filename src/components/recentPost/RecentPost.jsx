import React from "react";
import "./recentpost.css";
import WidgetHeader from "../widgetHeader/WidgetHeader";
import postImage from "../../assets/post.png";

const RecentPost = () => {
  return (
    <section className="recent-post">
      <WidgetHeader title="Recent Post" />
      <div className="recent-container">
        <article className="blog_post_content">
          <img src={postImage} alt="image" />
          <h1>Create a Registration form using html css JavaScript</h1>
          <p>July-19-2021</p>
        </article>

        <article className="blog_post_content">
          <img src={postImage} alt="image" />
          <h1>Create a Registration form using html css JavaScript</h1>
          <p>July-19-2021</p>
        </article>

        <article className="blog_post_content">
          <img src={postImage} alt="image" />
          <h1>Create a Registration form using html css JavaScript</h1>
          <p>July-19-2021</p>
        </article>

        <article className="blog_post_content">
          <img src={postImage} alt="image" />
          <h1>Create a Registration form using html css JavaScript</h1>
          <p>July-19-2021</p>
        </article>

        <article className="blog_post_content">
          <img src={postImage} alt="image" />
          <h1>Create a Registration form using html css JavaScript</h1>
          <p>July-19-2021</p>
        </article>

        <article className="blog_post_content">
          <img src={postImage} alt="image" />
          <h1>Create a Registration form using html css JavaScript</h1>
          <p>July-19-2021</p>
        </article>

        <article className="blog_post_content">
          <img src={postImage} alt="image" />
          <h1>Create a Registration form using html css JavaScript</h1>
          <p>July-19-2021</p>
        </article>

        <article className="blog_post_content">
          <img src={postImage} alt="image" />
          <h1>Create a Registration form using html css JavaScript</h1>
          <p>July-19-2021</p>
        </article>

        <article className="blog_post_content">
          <img src={postImage} alt="image" />
          <h1>Create a Registration form using html css JavaScript</h1>
          <p>July-19-2021</p>
        </article>

        <article className="blog_post_content">
          <img src={postImage} alt="image" />
          <h1>Create a Registration form using html css JavaScript</h1>
          <p>July-19-2021</p>
        </article>
      </div>

      <div className="pagination_wrapper">
        <div className="pagination_container">
          <button className="button" id="startBtn" disabled>
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <button className="button prevNext" id="prev" disabled>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <div className="links">
            <a href="#" className="link active">
              1
            </a>
            <a href="#" className="link">
              2
            </a>
            <a href="#" className="link">
              3
            </a>
            <a href="#" className="link">
              4
            </a>
            <a href="#" className="link">
              5
            </a>
          </div>
          <button className="button prevNext" id="next">
            <i className="fa-solid fa-angle-right"></i>
          </button>
          <button className="button" id="endBtn">
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
        <div className="pagination_count">
          <p>
            page <span>1</span> of <span>39</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RecentPost;
