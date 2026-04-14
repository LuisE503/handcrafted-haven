import Link from "next/link";
import { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="card">
      <div className="card-img" style={{ backgroundColor: product.colorToken }}>
        {product.category}
      </div>
      <div className="card-info">
        <h3>{product.name}</h3>
        <p className="card-subtitle">{product.shortDescription}</p>
        <p>${product.price.toFixed(2)}</p>
        <Link href={`/shop/${product.slug}`} className="card-link">
          View details
        </Link>
      </div>
    </article>
  );
}
