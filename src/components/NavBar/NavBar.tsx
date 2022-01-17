import React, { useEffect, useState } from "react";

import MobileMenu from "./mobile/MobileMenu";
import "./navBar.css";
import WebMenu from "./web/WebMenu";
const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [show, setshow] = useState<boolean>(true);
  const controllNavbar = () => {
    const lastScroll = document.body.getBoundingClientRect().top;
    if (window.scrollY <= lastScroll) {
      setshow(true);
    } else setshow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", controllNavbar);
    return () => {
      window.removeEventListener("scroll", controllNavbar);
    };
  }, []);
  return (
    <nav className={`NavBar ${show ? "visible" : "hidden"}}`}>
      <div className="NavBar--container">
        {!isOpen && <div className="logo">LOGO</div>}
        <div className="menu">
          {!isOpen && (
            <div className="web--menu">
              <WebMenu />
            </div>
          )}

          <div className="mobile--menu">
            <div className="icon--container" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
              ) : (
                <svg
                  className="menu-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                </svg>
              )}
            </div>
            <div>{isOpen && <MobileMenu />}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
