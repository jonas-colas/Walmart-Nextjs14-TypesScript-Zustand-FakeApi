import { ProductType } from "@/types/searchTypes";

const groupById = (products: ProductType[]): Record<string, ProductType[]> => {
  return products?.reduce((accumulator: Record<string, ProductType[]>, currentProduct: ProductType) => {
    const productId = currentProduct.id; 
    if(!accumulator[productId]){
      accumulator[productId] = [];
    }
    accumulator[productId].push(currentProduct);
    return accumulator;
  }, {})
};

export default groupById;