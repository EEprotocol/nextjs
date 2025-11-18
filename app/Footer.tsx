"use client"
// src/components/Footer.tsx
import "./App.css"; // CSSを共有する場合
import React from "react";
import "math";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div id="outlink" className="flex space-x-2 mt-4">
        <a href="https://github.com/EEprotocol/">
          <img src="/asset/icon/icon-github.svg" alt="GitHub" />
        </a>
        <a href="https://orcid.org/0009-0006-8547-8231">
          <img src="/asset/icon/icon-Orcid.svg" alt="Orcid" />
        </a>
        <a href="https://twitter.com/EEprotocol">
          <img src="/asset/icon/icon-twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.nicovideo.jp/user/90363980/video?ref=pc_userpage_menu">
          <img src="/asset/icon/icon-niconico.svg" alt="Niconico" />
        </a>
        <a href="https://atcoder.jp/users/EEprotocol">
          <img src="/asset/icon/icon-atcoder.svg" alt="AtCoder" />
        </a>
        <a href="https://www.pixiv.net/dashboard/works">
          <img src="/asset/icon/icon-pixiv.svg" alt="Pixiv" />
        </a>
      </div>

      <div className="rire">©2025 EEprotocol, All right reserved.</div>
    </footer>
  );
};

export default Footer;
