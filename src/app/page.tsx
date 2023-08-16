"use client";
import "./style.css";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <div className="mainContainerTop">
        <Heading>test</Heading>
      </div>
      <div className="mainContainer">
        <Heading>test</Heading>
      </div>
      <div className="mainContainer">
        <Heading>test</Heading>
      </div>
      <div>
        <div className="mainChild1">
          <Heading>I am</Heading>
        </div>
        <div className="mainChild2">
          <Heading>Brandon Yen</Heading>
        </div>
      </div>
      <div className="mainContainer">
        <Heading>test</Heading>
      </div>
      <div className="mainContainer">
        <Heading>test</Heading>
      </div>
      <div className="mainContainer">
        <Heading>test</Heading>
      </div>
    </main>
  );
}
