//cont0.tsx
"use client";
import React from "react";
import "@/app/App.css";
import "math";
import Footer from "@/app/Footer";
import Header from "@/app/Header";

const newslist = [
  {
    id: "news0",
    date: 251111,
    title: "Web Site Open!",
    image: "/asset/icon/loclogo.svg",
    tag: ["React", "HTML", "CSS"],
    color: "#eeeecc",
    link: "/news/article/news0",
  },
];
const App: React.FC = () => {
  return (
    <div>
      <Header>NEWS</Header>
      <div className="newslist">まだNewsとしてかくようなことがない！</div>

      <Footer />
    </div>
  );
};

export default App;
