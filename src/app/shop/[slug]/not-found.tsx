import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import styles from "./product.module.css";

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className={`section container ${styles.notFoundBox}`}>
        <h1>Product not found</h1>
        <p>The requested product is unavailable or no longer exists.</p>
        <Link className="btn" href="/shop">
          Back to shop
        </Link>
      </section>
      <SiteFooter />
    </main>
  );
}
