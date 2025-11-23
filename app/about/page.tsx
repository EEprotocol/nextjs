//cont0.tsx
"use client";
import React from "react";
import "@/app/App.css";
import "math";
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import "./about.css";

const App: React.FC = () => {
  return (
    <div>
      <Header>ABOUT</Header>
      <div className="introduce">
        <div className="name">EEprotocol</div>
        <div className="portrait">
          <img
            id="portraitimage"
            src="https://avatars.githubusercontent.com/u/94507209?s=40&v=4"
            alt="EEprotocol"
          />
        </div>
      </div>
      <div className="description">
        <br />
        Kyoto, Japan
        <br />
        <br />
        何を思ったか，大学院入学直後に休学．電子工作とプログラミングを勉強中．あとは絵がかけるようになりたい．
        理解速度が遅いので，学習も遅め．
        <br />
        <br />
        サイトコンテンツへの質問，指摘は以下までお願いします．
        <br />
        <a id="maillink" href="mailto:keik4656@gmail.com">
          keik4656[at]gmail.com
        </a>
        <br />
        <br />
        CVは準備中です．ご請求の方はしばらくお待ち下さい．
      </div>

      <Footer />
    </div>
  );
};

export default App;
