import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <div>
      <div>
        <div>name</div>
        <div>blog</div>
        <div>contact</div>
      </div>
    </div>
  );
}
