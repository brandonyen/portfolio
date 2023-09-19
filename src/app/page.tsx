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
              src="/images/email-white.png"
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
                src="/images/linkedin-white.png"
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
                src="/images/resume-white.png"
                height="25%"
                width="25%"
                className="iconImage"
              ></img>
            </a>
          </div>
        </div>
        <div className="menuTextContainer">
          <Link href="/about">About Me</Link>
          <text id="myWork">My Work</text>
          <Link href="/clustr">Clustr+</Link>
          <Link href="/website-design">brandonyen.com</Link>
          <Link href="/start-up">Technology Start-Up</Link>
          <Link href="/media">Brandon Yen Media</Link>
          <Link href="/photography">Photography</Link>
        </div>
        <div className="primaryTextContainer">
          <text className="remainingText">Hi, I'm</text>
          <text id="nameText">Brandon Yen,</text>
          <text className="remainingText">an entrepreneurial student with</text>
          <text className="remainingText">
            numerous real-world experiences.
          </text>
        </div>
      </div>
    </main>
  );
}
