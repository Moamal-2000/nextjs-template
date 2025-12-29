import { getOpenGraphMetadata } from "@/data/metadata";
import s from "./page.module.scss";

export function generateMetadata() {
  return getOpenGraphMetadata();
}

export default function Home() {
  return (
    <main className={s.home}>
      <h1>Home page</h1>
    </main>
  );
}
