import React from "react";
import "./widgetHeader.css";

const WidgetHeader = ({ title }) => {
  return (
    <>
      <div className="widget-header">
        <span>{title}</span>
      </div>
    </>
  );
};

export default WidgetHeader;
