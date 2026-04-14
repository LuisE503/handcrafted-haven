"use client";

import Link from "next/link";
import { useState } from "react";
import { addToCart } from "@/lib/cart";
import { Product } from "@/lib/types";
import styles from "@/app/shop/[slug]/product.module.css";

type ProductDetailClientProps = {
  product: Product;
};

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [feedback, setFeedback] = useState("");

  return (
    <div className={styles.info}>
      <p className={styles.kicker}>{product.category}</p>
      <h1>{product.name}</h1>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>

      <ul className={styles.metaList}>
        <li>
          Material: <strong>{product.material}</strong>
        </li>
        <li>
          Origin: <strong>{product.origin}</strong>
        </li>
        <li>
          Rating: <strong>{product.rating.toFixed(1)} / 5</strong>
        </li>
        <li>
          In stock: <strong>{product.stock}</strong>
        </li>
      </ul>

      <div className={styles.actions}>
        <label>
          Quantity
          <input
            type="number"
            min={1}
            max={Math.max(1, product.stock)}
            value={quantity}
            onChange={(event) => {
              const value = Number(event.target.value);
              if (!Number.isNaN(value)) {
                setQuantity(Math.max(1, Math.min(product.stock, value)));
              }
            }}
          />
        </label>

        <button
          className="btn"
          onClick={() => {
            addToCart(product.id, quantity);
            setFeedback(`${product.name} added to cart.`);
          }}
          type="button"
        >
          Add to cart
        </button>

        <Link href="/cart" className={styles.inlineLink}>
          Go to cart
        </Link>
      </div>

      {feedback ? <p className={styles.feedback}>{feedback}</p> : null}
    </div>
  );
}
