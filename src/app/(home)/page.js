import { getOpenGraphMetadata } from "@/data/metadata";
import s from "./Home.module.scss";

export function generateMetadata() {
  return getOpenGraphMetadata();
}

export default function Home() {
  return (
    <main className={s.main}>
      <h1>Home page</h1>
    </main>
  );
}
