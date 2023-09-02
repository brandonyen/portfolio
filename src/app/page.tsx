"use client";
import "./style.css";

export default function Home() {
  return (
    <main>
      <div className="divContainer">
        <div className="iconContainer">
          <div className="icons">
            <img
              src="/images/email.png"
              height="10%"
              width="10%"
              className="iconImage"
            ></img>
            <img
              src="/images/linkedin.png"
              height="10%"
              width="10%"
              className="iconImage"
            ></img>
            <img
              src="/images/resume.png"
              height="10%"
              width="10%"
              className="iconImage"
            ></img>
          </div>
        </div>
        <div className="secondaryTextContainer">
          <text className="mainText">I am</text>
        </div>
        <div className="primaryTextContainer">
          <text className="offText">A Software Developer</text>
          <text className="offText">A Content Creator</text>
          <text className="offText">An Entrepreneur</text>
          <text className="mainText">Brandon Yen</text>
          <text className="offText">A Photographer</text>
          <text className="offText">A Graphic Designer</text>
          <text className="offText">A Humanitarian</text>
        </div>
      </div>
    </main>
  );
}
