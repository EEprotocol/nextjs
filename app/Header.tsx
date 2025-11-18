
"use client";
import { useState, useEffect } from "react";
import "./Header.css";

function Header({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [init, setInit] = useState(0);
  const [path, setPath] = useState("/cv");

  // children の評価を SSR でやらない
  useEffect(() => {
    if (typeof children === "string") {
      if (children === "CRAFT LOG") setPath("/craftlog");
      else if (children === "ABOUT") setPath("/about");
      else if (children === "NEWS") setPath("/news");
    }
  }, [children]);

  let menupanelClass = "menu-init";
  if (init === 1 && open) menupanelClass = "menu-open";
  else if (init === 1 && !open) menupanelClass = "menu-closed";

  return (
    <div>
      <div id="menupanel" className={menupanelClass}>
        <div id="logobox" onClick={() => (window.location.href = "/")}>
          <img id="headmainlogo" src="/asset/icon/loclogo.svg" alt="EEprotocol Logo" />
        </div>

        <div id="buttons">
          <p><button className="custom-btn" onClick={() => (window.location.href = "/craftlog")}>CRAFT LOG</button></p>
          <p><button className="custom-btn" onClick={() => (window.location.href = "/news")}>NEWS</button></p>
          <p><button className="custom-btn" onClick={() => (window.location.href = "/about")}>ABOUT</button></p>
        </div>
      </div>

      <div className="app-bg">
        <div id="pagetitle" onClick={() => (window.location.href = path)}>
          <main>{children}</main>
        </div>

        <div id="menuicon" onClick={() => { setOpen(!open); setInit(1); }}>
          <div className="circle">
            <img id="triangle" src="/asset/icon/triangle.svg" alt="triangle" />
            <img id="rtriangle" src="/asset/icon/rtriangle.svg" alt="rtriangle" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
