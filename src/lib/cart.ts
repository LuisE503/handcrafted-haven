import { CartItem } from "@/lib/types";

const CART_STORAGE_KEY = "handcrafted-haven-cart";

export function readCart(): CartItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(
      (item) =>
        typeof item.productId === "number" &&
        Number.isInteger(item.productId) &&
        typeof item.quantity === "number" &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0,
    );
  } catch {
    return [];
  }
}

export function writeCart(items: CartItem[]): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function addToCart(productId: number, quantity = 1): CartItem[] {
  const cart = readCart();
  const existing = cart.find((item) => item.productId === productId);

  if (existing) {
    existing.quantity += Math.max(1, quantity);
  } else {
    cart.push({ productId, quantity: Math.max(1, quantity) });
  }

  writeCart(cart);
  return cart;
}

export function updateCartItem(productId: number, quantity: number): CartItem[] {
  const cart = readCart();
  const clampedQuantity = Math.max(1, quantity);

  const updated = cart.map((item) =>
    item.productId === productId ? { ...item, quantity: clampedQuantity } : item,
  );

  writeCart(updated);
  return updated;
}

export function removeCartItem(productId: number): CartItem[] {
  const filtered = readCart().filter((item) => item.productId !== productId);
  writeCart(filtered);
  return filtered;
}

export function clearCart(): void {
  writeCart([]);
}
