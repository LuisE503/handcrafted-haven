export type ProductCategory = "Decor" | "Kitchen" | "Textiles" | "Wellness";

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  price: number;
  category: ProductCategory;
  material: string;
  origin: string;
  rating: number;
  stock: number;
  featured?: boolean;
  colorToken: string;
};

export type CartItem = {
  productId: number;
  quantity: number;
};
