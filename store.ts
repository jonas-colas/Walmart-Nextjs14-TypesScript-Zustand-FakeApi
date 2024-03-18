import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { ProductType } from "./types/searchTypes";
// import type {} from '@redux-devtools/extension' // required for devtools typing

interface CartState {
  cart: ProductType[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (product: ProductType) => void;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist(
      (set, get) => ({
        cart: [],
        addToCart: (product) => {
          set((state) => ({ 
            cart: [...state.cart, product], 
          }));
        },
        removeFromCart: (product) => {
          const productToRemove = get().cart.findIndex(p => p.id === product.id);
          set((state) => {
            const newCart = [...state.cart];

            newCart.splice(productToRemove, 1);
            return { cart: newCart };
          })
        },
      }),
      {
        name: "shopping-cart-storage",
      }
    )
  )
);
