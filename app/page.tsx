import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  return (
    <div className={styles.home}>
      <div>
        <div>
          <h1>hi, my name is Adi Bangkit!</h1>
        </div>
        <div>
          <Link href="/blog">Checkout my blog</Link>
        </div>
        <div>
          <Link href="/contact">Contact me</Link>
        </div>
      </div>
    </div>
  );
}
