//craftlog/page.tsx
"use client";
// src/App.tsx
import Link from "next/link";
import React from "react";
import "@/app/App.css";
import "@/styles/craftlog.css";
import "math";
import Footer from "@/app/Footer";
import Header from "@/app/Header";

const contentlist = [
  {
    id: "cont0",
    date: 251111,
    title: "Web Page with React!",
    image: "/asset/icon/loclogo.svg",
    tag: ["React", "HTML", "CSS"],
    color: "#eeeecc",
    link: "/craftlog/article/cont0",
  },
];

const App: React.FC = () => {
  return (
    <div>
      <Header>CRAFT LOG</Header>
      <div id="contentlist" style={{ display: "flex" }}>
        {contentlist.map((cont) => (
          <Link key={cont.id} href={cont.link}>
            <div
              key={cont.id} // keyはmapの外側の最上位divに
              id="colortag"
              style={{
                backgroundColor: cont.color,
              }}
            >
              <div id="contdate">{cont.date}</div>

              <div
                id="content"
                onClick={() => (window.location.href = cont.link)}
              >
                <div id="contenttitle">{cont.title}</div>
                <div className="contentimage">
                  <img src={cont.image} alt={cont.title} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default App;
