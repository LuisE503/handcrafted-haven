import { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { products } from "@/lib/data";
import { ProductCategory } from "@/lib/types";
import styles from "./shop.module.css";

type ShopPageProps = {
  searchParams: Promise<{
    query?: string;
    category?: ProductCategory | "All";
    sort?: "featured" | "price-asc" | "price-desc";
  }>;
};

export const metadata: Metadata = {
  title: "Shop | Handcrafted Haven",
  description: "Browse artisanal products by category and discover handcrafted pieces for your home.",
};

function sortProducts(
  allProducts: typeof products,
  sort: "featured" | "price-asc" | "price-desc",
) {
  if (sort === "price-asc") {
    return [...allProducts].sort((a, b) => a.price - b.price);
  }

  if (sort === "price-desc") {
    return [...allProducts].sort((a, b) => b.price - a.price);
  }

  return [...allProducts].sort((a, b) => Number(b.featured) - Number(a.featured));
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const query = (params.query ?? "").trim().toLowerCase();
  const selectedCategory = params.category ?? "All";
  const sort = params.sort ?? "featured";

  const filtered = sortProducts(
    products.filter((product) => {
      const queryMatch =
        query.length === 0 ||
        product.name.toLowerCase().includes(query) ||
        product.shortDescription.toLowerCase().includes(query);

      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;

      return queryMatch && categoryMatch;
    }),
    sort,
  );

  return (
    <main>
      <SiteHeader />
      <section className={`hero ${styles.heroCompact}`}>
        <div className="container">
          <h1>Shop Artisanal Goods</h1>
          <p>
            Discover handcrafted products curated for everyday rituals and timeless homes.
          </p>
          <p className={styles.resultCount}>
            Showing {filtered.length} of {products.length} products
          </p>
        </div>
      </section>

      <section className={`section container ${styles.shopSection}`}>
        <form className={styles.filters} action="/shop" method="get">
          <label>
            Search
            <input
              name="query"
              type="search"
              placeholder="Search products"
              defaultValue={params.query ?? ""}
            />
          </label>

          <label>
            Category
            <select name="category" defaultValue={selectedCategory}>
              <option value="All">All</option>
              <option value="Decor">Decor</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Textiles">Textiles</option>
              <option value="Wellness">Wellness</option>
            </select>
          </label>

          <label>
            Sort
            <select name="sort" defaultValue={sort}>
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </label>

          <button className="btn" type="submit">
            Apply
          </button>

          <Link href="/shop" className={styles.clearLink}>
            Clear filters
          </Link>
        </form>

        {filtered.length === 0 ? (
          <div className={styles.emptyState}>
            <h2>No products found</h2>
            <p>Try changing your filters or search text.</p>
          </div>
        ) : (
          <div className="grid">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
