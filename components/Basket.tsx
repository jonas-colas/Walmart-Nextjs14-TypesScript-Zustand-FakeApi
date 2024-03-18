"use client";

import { getCartTotal } from "@/lib/getCartTotal";
import groupById from "@/lib/groupById";
import { useCartStore } from "@/store"
import Image from "next/image";
import AddToCart from "./AddToCart";

const Basket = () => {
  const myCart = useCartStore((state) => state.cart);
  const basketTotal = getCartTotal(myCart);

  const grouped = groupById(myCart);

  // console.log(basketTotal)
  // console.log(grouped)

  return (
    <div className="max-w-7xl mx-auto">
      <ul className="space-y-5 divide-y-2">
        {Object.keys(grouped).map(id => {
          const item = grouped[id][0];
          const total = getCartTotal(grouped[id]);
          
          return (
            <li key={id} className="p-5 my-2 flex items-center justify-between">
              {item.image && (
                <Image 
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}
              <div className="flex_space-x-4_pl-4">
                <div>
                  <p className="mt-4 font-bold text-right">{item.title}</p>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description}} 
                    className="line-clamp-1 font-light text-sm mt-2"
                  />
                </div>
              </div>
              <div className="flex flex-col border rounded-md p-5">
                <AddToCart product={item} />

                <p className="mt-4 font-bold text-right">{total}</p>
              </div>
            </li>
          )
        })}
      </ul>

      <div className="flex flex-col justify-end p-5">
        <p className="font-bold text-2xl text-right text-walmart mb-5">
          Total: {basketTotal}
        </p>

        <button className="mt-5 h-20 bg-walmart hover:bg-walmart/50 rounded-md text-white font-bold">
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Basket