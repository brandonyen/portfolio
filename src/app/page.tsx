"use client";
import "./style.css";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <div className="mainContainer">
        <div className="mainChild">
          <text>A Software Developer</text>
        </div>
        <div className="mainChild">
          <text>A Content Creator</text>
        </div>
        <div className="mainChild">
          <text>An Entrepreneur</text>
        </div>
        <div>
          <div className="mainChild1">
            <text>I am</text>
          </div>
          <div className="mainChild2">
            <text>Brandon Yen</text>
          </div>
        </div>
        <div className="mainChild">
          <text>A Photographer</text>
        </div>
        <div className="mainChild">
          <text>A Graphic Designer</text>
        </div>
        <div className="mainChild">
          <text>A Humanitarian</text>
        </div>
      </div>
    </main>
  );
}
