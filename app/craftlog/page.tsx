import App from "./craftlog";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "CRAFT LOG | TowerC27",
  description: "Content of TowerC27",
};
export default function Page() {
  return <App />;
}
