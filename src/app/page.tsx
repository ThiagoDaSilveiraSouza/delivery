import { Header } from "@/components";
import { Showcase } from "@/components/Showcase";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Showcase.Root></Showcase.Root>
    </main>
  );
}
