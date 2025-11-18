"use client";
//cont0.tsx
import React from "react";
import "@/app/App.css";
import "math";
import "@/styles/craftlog.css";
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import Markdowntext from "./cont0.md";

console.log(Markdowntext)

const contentlist = {
  id: "cont0",
  date: 251111,
  title: "Web Page with React!",
  image: "/asset/icon/loclogo.svg",
  tag: ["React", "HTML", "CSS"],
  color: "#eeeecc",
  link: "/craftlog/article/cont0",
};


const App: React.FC = () => {
  return (
    <div>
      <Header>CRAFT LOG</Header>

      <div id="articlearea">
        <div id="articleentity">

  <Markdowntext/>
        </div>
      </div>
      <div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
