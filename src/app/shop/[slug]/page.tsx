import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductDetailClient } from "@/components/ProductDetailClient";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { getProductBySlug, products } from "@/lib/data";
import styles from "./product.module.css";

type ProductDetailProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "Product Details | Handcrafted Haven",
  description: "Explore handcrafted product details and add your favorite pieces to your cart.",
};

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const recommendations = products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 3);

  return (
    <main>
      <SiteHeader />
      <section className={`section container ${styles.layout}`}>
        <div className={styles.media} style={{ backgroundColor: product.colorToken }}>
          {product.category}
        </div>

        <ProductDetailClient product={product} />
      </section>

      {recommendations.length > 0 ? (
        <section className={`section container ${styles.recommendations}`}>
          <h2>You may also like</h2>
          <div className="grid">
            {recommendations.map((item) => (
              <article key={item.id} className="card">
                <div className="card-img" style={{ backgroundColor: item.colorToken }}>
                  {item.category}
                </div>
                <div className="card-info">
                  <h3>{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <Link href={`/shop/${item.slug}`} className="card-link">
                    View details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <SiteFooter />
    </main>
  );
}
