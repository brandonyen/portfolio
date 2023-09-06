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
              height="25%"
              width="25%"
              className="iconImage"
            ></img>
            <a
              className="iconImageLink"
              href="https://www.linkedin.com/in/brandonyen2026/"
              target="_blank"
            >
              <img
                src="/images/linkedin.png"
                height="25%"
                width="25%"
                className="iconImage"
              ></img>
            </a>
            <a
              className="iconImageLink"
              href="/files/Resume.pdf"
              target="_blank"
            >
              <img
                src="/images/resume.png"
                height="25%"
                width="25%"
                className="iconImage"
              ></img>
            </a>
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
