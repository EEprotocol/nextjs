import type { Metadata } from "next";
import Article from "./cont0.mdx";

export const metadata: Metadata = {
  title: "Web Page with React! | TowerC27",
  description: "HPを作った（React, Next.jsをそえて）",
  keywords: ["React","Next.js","CSS"]
};

export default function Page() {
  return <Article />;
}
