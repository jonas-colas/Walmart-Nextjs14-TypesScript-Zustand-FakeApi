"use client";

import { useCartStore } from "@/store";
import { ProductType } from "@/types/searchTypes";
import RemoveFromCart from "./RemoveFromCart";
// import Button from "./Button";

const AddToCart = ({ product }: { product: ProductType }) => {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);

  // console.log(cart);

  const howManyInCart = cart.filter((item) => item.id === product.id).length;

  // console.log("how many", howManyInCart);

  const handleAdd = () => {
    // console.log("Adding to cart", product);
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <button
          className="bg-walmart hover:bg-walmart/50 px-4 py-2 rounded-md text-white "
          onClick={handleAdd}
        >
          +
        </button>
      </div>
    );
  }

  return (
    <button
      className="bg-walmart hover:bg-walmart/50 px-4 py-2 rounded-md text-white "
      onClick={handleAdd}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
