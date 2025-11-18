"use client";

import React, { useEffect, useRef } from "react";
import "./App.css";
import Footer from "./Footer";

const App: React.FC = () => {
  const canvasParentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let myp5: any;

    // p5 はクライアントでのみ import
    const loadP5 = async () => {
      const P5 = (await import("p5")).default;

      const sketch = (p: any) => {
        let anprogress = 0;

        p.setup = () => {
          const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
          p.pixelDensity(2);
          p.smooth();
          p.noFill();
          p.strokeCap(p.ROUND);
          p.strokeJoin(p.ROUND);
          canvas.style("position", "absolute");
          canvas.style("top", "0");
          canvas.style("left", "0");
          canvas.style("z-index", "10");
          canvas.style("pointer-events", "none");
          p.frameRate(60);
        };

        p.draw = () => {
          const drawBlinkingLine = (x1: number, y1: number, x2: number, y2: number, blinkSpeed: number) => {
            const blink = Math.floor(p.frameCount / blinkSpeed) % 2;
            let colorValue = blink ? 255 : 0;
            if (anprogress >= 1) {
              colorValue = 0;
              anprogress = 1;
            }
            const cx = p.lerp(x1, x2, anprogress);
            const cy = p.lerp(y1, y2, anprogress);
            p.strokeWeight(1.2);
            p.stroke(colorValue);
            p.line(x1, y1, cx, cy);
          };

          anprogress += 0.04;
          const tate = window.innerHeight;
          const yoko = window.innerWidth;

          drawBlinkingLine(yoko / 2, 0, yoko, (tate * 1) / 3, 2);
          drawBlinkingLine((yoko * 2) / 3, 0, yoko, (tate * 2) / 5, 2);
          drawBlinkingLine((yoko * 6) / 7, 0, yoko, (tate * 5) / 7, 2);
          drawBlinkingLine((yoko * 7.5) / 7, 0, (yoko * 5.7) / 7, tate, 2);
          drawBlinkingLine((yoko * 9.2) / 7, 0, (yoko * 4.3) / 7, tate, 2);
          drawBlinkingLine((yoko * 7.5) / 3, 0, (yoko * 1) / 3, tate, 2);
        };

        p.windowResized = () => {
          p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
      };

      myp5 = new P5(sketch, canvasParentRef.current!);
    };

    loadP5();

    return () => {
      if (myp5) myp5.remove();
    };
  }, []);

  return (
    <div>
      <div ref={canvasParentRef} id="linecanvas"></div>

      <img id="mainlogo" src="asset/icon/loclogo.svg" alt="EEprotocol Logo" />

      <div style={{ marginLeft: "15pt" }}>
        Welcome to EEprotocol (Keisuke Kondo)'s TowerC27!
      </div>

      <div className="initplay" id="initplay">
        <div className="initvideo">
          <video src="asset/hpolsc.mp4" autoPlay muted loop />
        </div>

        <div className="buttons">
          <p>
            <button className="custom-btn btn-1" onClick={() => (window.location.href = "/craftlog")}>CRAFT LOG</button>
          </p>
          <p>
            <button className="custom-btn btn-1" onClick={() => (window.location.href = "/news")}>NEWS</button>
          </p>
          <p>
            <button className="custom-btn btn-1" onClick={() => (window.location.href = "/about")}>ABOUT</button>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
