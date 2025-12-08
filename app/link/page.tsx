//news/page.tsx
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
      <Header>LINK</Header>
      <div className="linklist">
      </div>

      <Footer />
    </div>
  );
};

export default App;
      //<div>Bi-direction Link</div>
       //<a href="https://otsu36.net/"><img className="linker" src="https://otsu36.net/images/banner.jpg" title="乙第三十六号室" /></a>
       //<a href="https://www.hshintaku.com"><img className="linker" src="/asset/icon/shintaku.png" title="乙第三十六号室" /></a>
