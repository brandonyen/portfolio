"use client";
import "./style.css";
import Link from "next/link";

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
          <Link href="/software-development" className="offText">
            A Software Developer
          </Link>
          <Link href="/content-creation" className="offText">
            A Content Creator
          </Link>
          <Link href="/entrepreneurship" className="offText">
            An Entrepreneur
          </Link>
          <Link href="/about" className="mainText">
            Brandon Yen
          </Link>
          <Link href="/photography-portfolio" className="offText">
            A Photographer
          </Link>
          <Link href="/graphic-design-portfolio" className="offText">
            A Graphic Designer
          </Link>
          <Link href="/volunteer-work" className="offText">
            A Humanitarian
          </Link>
        </div>
      </div>
    </main>
  );
}
