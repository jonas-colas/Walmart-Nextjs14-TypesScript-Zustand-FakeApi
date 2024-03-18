import { useCartStore } from "@/store";
import { ProductType } from "@/types/searchTypes";

const RemoveFromCart = ({ product }: { product: ProductType }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemove = () => {
    removeFromCart(product);
    // console.log("remove from Cart", product.id);
  };

  return (
    <button
      className="bg-danger hover:bg-danger/50 px-4 py-2 rounded-md text-white "
      onClick={handleRemove}
    >
      -
    </button>
  );
};

export default RemoveFromCart;
