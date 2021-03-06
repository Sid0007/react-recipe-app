import React from "react";

export default function Header({ children, title, styleClass }) {
  return (
    <header>
      <div className="container-fluid">
        <div className={`row align-items-center ${styleClass}`}>
          <div className="col text-center">
            <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
              {title}
            </h1>
            {children}
            
            <h2   className="text-light  display-5  mt-4 ">
             roopatedla@gmail.com</h2>
             <h2   className="text-light  display-5  mt-4 ">
             07894710459</h2>
          </div>
        </div>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "default title",
  styleClass: "header-hero"
};
