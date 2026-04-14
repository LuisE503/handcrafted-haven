"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { clearCart, readCart, removeCartItem, updateCartItem } from "@/lib/cart";
import { products } from "@/lib/data";
import { CartItem } from "@/lib/types";
import styles from "./cart.module.css";

type EnrichedCartRow = CartItem & {
  name: string;
  slug: string;
  price: number;
};

function mapCart(items: CartItem[]): EnrichedCartRow[] {
  return items
    .map((item) => {
      const product = products.find((current) => current.id === item.productId);
      if (!product) {
        return null;
      }

      return {
        ...item,
        name: product.name,
        slug: product.slug,
        price: product.price,
      };
    })
    .filter((row): row is EnrichedCartRow => row !== null);
}

export default function CartPage() {
  const [rows, setRows] = useState<EnrichedCartRow[]>(() => mapCart(readCart()));
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const subtotal = useMemo(
    () => rows.reduce((sum, row) => sum + row.price * row.quantity, 0),
    [rows],
  );

  const shipping = rows.length > 0 ? 7.5 : 0;
  const total = subtotal + shipping;

  return (
    <main>
      <SiteHeader />
      <section className={`section container ${styles.layout}`}>
        <div>
          <h1>Your Cart</h1>
          <p className={styles.helpText}>Review your selected handcrafted products.</p>

          {rows.length === 0 ? (
            <div className={styles.emptyState}>
              <h2>Your cart is empty</h2>
              <p>Browse our catalog and add your favorite pieces.</p>
              <Link href="/shop" className="btn">
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Unit price</th>
                    <th>Quantity</th>
                    <th>Line total</th>
                    <th aria-label="Actions" />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.productId}>
                      <td>
                        <Link href={`/shop/${row.slug}`}>{row.name}</Link>
                      </td>
                      <td>${row.price.toFixed(2)}</td>
                      <td>
                        <input
                          type="number"
                          min={1}
                          value={row.quantity}
                          onChange={(event) => {
                            const value = Number(event.target.value);
                            if (Number.isNaN(value) || value < 1) {
                              return;
                            }

                            const updated = updateCartItem(row.productId, value);
                            setRows(mapCart(updated));
                          }}
                        />
                      </td>
                      <td>${(row.price * row.quantity).toFixed(2)}</td>
                      <td>
                        <button
                          type="button"
                          className={styles.removeButton}
                          onClick={() => {
                            const updated = removeCartItem(row.productId);
                            setRows(mapCart(updated));
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <aside className={styles.summary}>
          <h2>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span>Subtotal</span>
            <strong>${subtotal.toFixed(2)}</strong>
          </div>
          <div className={styles.summaryRow}>
            <span>Shipping</span>
            <strong>${shipping.toFixed(2)}</strong>
          </div>
          <div className={styles.summaryRowTotal}>
            <span>Total</span>
            <strong>${total.toFixed(2)}</strong>
          </div>

          <button
            type="button"
            className="btn"
            disabled={rows.length === 0}
            onClick={() => {
              clearCart();
              setRows([]);
              setCheckoutMessage("Checkout complete. Thank you for supporting artisans.");
            }}
          >
            Complete Checkout
          </button>

          {checkoutMessage ? <p className={styles.checkoutMessage}>{checkoutMessage}</p> : null}
        </aside>
      </section>
      <SiteFooter />
    </main>
  );
}
