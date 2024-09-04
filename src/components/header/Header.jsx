import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState({
    htmlCss: false,
    more: false,
    js: false,
  });

  const toggleSearchBox = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const toggleSubMenu = (menu) => {
    setShowSubMenu((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
    console.log(showSubMenu);
  };

  const navLinksClass = `nav-links ${showSubMenu.htmlCss ? "show1" : ""} ${
    showSubMenu.more ? "show2" : ""
  } ${showSubMenu.js ? "show3" : ""}`;

  return (
    <>
      <nav>
        <div className={`navbar ${isSearchOpen ? "showInput" : ""}`}>
          <i className="bx bx-menu" onClick={openSidebar}></i>
          <div className="logo">
            <a href="#">FreeCodes</a>
          </div>
          <div
            className={navLinksClass}
            style={{ left: isSidebarOpen ? "0" : "-100%" }}
          >
            <div className="sidebar-logo">
              <span className="logo-name">FreeCodes</span>
              <i className="bx bx-x" onClick={closeSidebar}></i>
            </div>
            <ul className="links">
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">HTML & CSS</a>
                <i
                  className={`bx bxs-chevron-down htmlcss-arrow arrow`}
                  onClick={() => toggleSubMenu("htmlCss")}
                ></i>
                <ul className="htmlCss-sub-menu sub-menu">
                  <li>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <a href="#">Login Forms</a>
                  </li>
                  <li>
                    <a href="#">Card Design</a>
                  </li>
                  <li className="more">
                    <span>
                      <a href="#">More</a>
                      <i
                        className="bx bxs-chevron-right arrow more-arrow"
                        onClick={() => toggleSubMenu("more")}
                      ></i>
                    </span>
                    <ul className="more-sub-menu sub-menu">
                      <li>
                        <a href="#">Neumorphism</a>
                      </li>
                      <li>
                        <a href="#">Pre-loader</a>
                      </li>
                      <li>
                        <a href="#">Glassmorphism</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">JAVASCRIPT</a>
                <i
                  className="bx bxs-chevron-down js-arrow arrow"
                  onClick={() => toggleSubMenu("js")}
                ></i>
                <ul className="js-sub-menu sub-menu">
                  <li>
                    <a href="#">Dynamic Clock</a>
                  </li>
                  <li>
                    <a href="#">Form Validation</a>
                  </li>
                  <li>
                    <a href="#">Card Slider</a>
                  </li>
                  <li>
                    <a href="#">Complete Website</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
            </ul>
          </div>
          <div className="search-box">
            <i
              className={`bx ${isSearchOpen ? "bx-x" : "bx-search"}`}
              onClick={toggleSearchBox}
            ></i>
            <div className="input-box">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
