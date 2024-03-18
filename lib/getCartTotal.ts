import { ProductType } from "@/types/searchTypes";

export const getCartTotal = (products: ProductType[]): string  => {
  const total = products.reduce(
    (accumulator: number, currentProduct: ProductType) => accumulator + currentProduct.price, 0);

  return `$${total.toFixed(2)}`;
}