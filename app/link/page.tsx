//news/page.tsx

import React from "react";
import "@/app/App.css";
import "math";
import Footer from "@/app/Footer";
import Header from "@/app/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LINK | TowerC27",
  description: "Link from TowerC27",
};
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
      <a href="https://otsu36.net/"><img src="https://otsu36.net/images/banner.jpg" title="乙第三十六号室" height="50"/></a>
      <a href="https://by-pass.net"><img src="https://i.gyazo.com/f31922d687ca36e3946f58d791ee8dbd.png" alt="BY-PASSのバナー" height="50" /></a>
      <a href="https://nk-compile.mydns.jp"><img src="/asset/icon/nkcompile.svg" alt="nk-compile" height="50" /></a>
      <a href="https://eeprotocol.0t0.jp"><img src="/asset/icon/banner.png" alt="" height="50" /></a>
      <a href="https://www.hshintaku.com"><img src="/asset/icon/shintaku.png" alt="shintaku" height="50" /></a>
      </div>

      <Footer />
    </div>
  );
};

export default App;
      //<div>Bi-direction Link</div>
       //<a href="https://otsu36.net/"><img className="linker" src="https://otsu36.net/images/banner.jpg" title="乙第三十六号室" /></a>
       //<a href="https://www.hshintaku.com"><img className="linker" src="/asset/icon/shintaku.png" title="乙第三十六号室" /></a>
