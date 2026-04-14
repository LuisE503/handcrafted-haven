import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="card">
      <div className="card-img">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="card-photo"
        />
        <span className="card-badge">{product.category}</span>
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
