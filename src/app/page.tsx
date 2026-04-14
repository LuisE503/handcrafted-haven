import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { featuredProducts } from "@/lib/data";

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="container">
          <h1>
            Artisanal Goods for the <br /> Modern Home
          </h1>
          <p>
            Carefully curated, ethically sourced, and beautifully designed. Discover the
            heart of craftsmanship in every piece.
          </p>
          <Link href="/shop" className="btn">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="homeStrip">
        <div className="container stripInner">
          <div className="stripMetric">
            <strong>12 Curated Products</strong>
            <span>Crafted in small artisan batches</span>
          </div>
          <div className="stripMetric">
            <strong>4 Core Collections</strong>
            <span>Decor, Kitchen, Textiles, and Wellness</span>
          </div>
          <div className="stripMetric">
            <strong>Ethically Sourced</strong>
            <span>Designed to support fair artisan partnerships</span>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="section-title">Newest Arrivals</h2>
        <div className="grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="sectionCta">
          <Link href="/shop" className="btn">
            Explore Full Catalog
          </Link>
        </div>
      </section>

      <section id="values" className="section homeValues">
        <div className="container">
          <h2>Our Artisanal Values</h2>
          <div className="grid valueGrid">
            <div className="valueCard">
              <h3>Sustainability</h3>
              <p>We believe in products that last a lifetime and respect our planet.</p>
            </div>
            <div className="valueCard">
              <h3>Quality</h3>
              <p>Every item is hand-selected for its superior craftsmanship and detail.</p>
            </div>
            <div className="valueCard">
              <h3>Artisans First</h3>
              <p>
                We work directly with makers to ensure fair pay and safe conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
