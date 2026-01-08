import type { Metadata } from "next";
import Article from "./cont1.mdx";

export const metadata: Metadata = {
  title: "DDNS to Rental Server | TowerC27",
  description:"DDNSでレンタルサーバーにアクセスする（スターレンタルサーバー，MyDNS）",
  keywords: ["DDNS","Server","NS"]
};

export default function Page() {
  return <Article />;
}
