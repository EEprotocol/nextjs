//craftlog/page.tsx
//u
"use client";
// src/App.tsx
import Link from "next/link";
import React from "react";
import "@/app/App.css";
import "@/styles/craftlog.css";
import "math";
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import { Metadata } from "next";

const contentlist = [
  {
    id: "cont0",
    date: 251121,
    title: "Web Page with React!",
    image: "/asset/icon/loclogo.svg",
    tag: ["React", "Next.js", "CSS"],
    color: "#eeeecc",
    link: "/craftlog/article/cont0",
  },
{
    id: "cont1",
    date: 251128,
    title: "DDNS to Rental Server",
    image: "/articleimage/cont1/title.svg",
    tag: ["DDNS", "server"],
    color: "#60aad0",
    link: "/craftlog/article/cont1",
  },

];



contentlist.reverse();
const App: React.FC = () => {
  return (
    <div>
      <Header>CRAFT LOG</Header>
      <div className="wrapper">
      <div id="contentlist">
        {contentlist.map((cont) => (
          <Link id="content" key={cont.id} href={cont.link}>
            <div
              key={cont.id} // keyはmapの外側の最上位divに
              id="colortag"
              style={{
                backgroundColor: cont.color,
              }}
            >

              <div
                onClick={() => (window.location.href = cont.link)}
              >
                <div id="contenttitle">{cont.title}</div>
                <div className="contentimage">
                  <img src={cont.image} alt={cont.title} />
                </div>
              </div>
              <div id="contdate">{cont.date}</div>
            </div>
          </Link>
        ))}

      </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
