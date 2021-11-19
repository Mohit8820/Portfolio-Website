import React from "react";

function Header() {
  return (
    <div className="header">
      <nav>
        <div className="icon">
          <img src="/images/MohitIcon.webp" width="40" height="auto" alt="" />
          <h2 className="heading">Mohit</h2>
        </div>
        <div className="links">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <div className="mern">
        <img src="/images/mern.webp" className="mernLogo" alt="mern" />
        <div className="reactBound">
          <img src="/images/react.webp" className="react" alt="react" />
        </div>
      </div>
    </div>
  );
}
export default Header;
