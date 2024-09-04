import React from "react";
import "./Home.css";
import FeatureComponent from "../../components/featuredComponent/FeatureComponent";
import ContentLayout from "../contentLayout/ContentLayout";

const Home = () => {
  return (
    <>
      <FeatureComponent />
      <ContentLayout />
    </>
  );
};

export default Home;
