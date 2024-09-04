import React from "react";
import WidgetHeader from "../../components/widgetHeader/WidgetHeader";
import "./contentlayout.css";
import RecentPost from "../../components/recentPost/RecentPost";
import CategoriesSidebar from "../../components/categoriesSidebar/CategoriesSidebar";

const ContentLayout = () => {
  return (
    <>
      <section className="content-layout">
        <div className="container">
          <RecentPost />
          <CategoriesSidebar />
        </div>
      </section>
    </>
  );
};

export default ContentLayout;
