import { ProductType } from "@/types/searchTypes"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({prod}: {prod: ProductType}) => {
  return (
    <Link href={`/products/${prod.id}`}
    className="flex flex-col relative border rounded-md h-full p-5">
      <Image 
        src={prod.image}
        alt={prod.title}
        width={200}
        height={200}
        className="mx-auto"
      />
      <p className="text-xl font-bold">
        ${prod.price}
      </p>
      <p className="font-light">{prod.title}</p>
      {prod.rating && (
        <p className="text-yellow-500 text-sm">
          {prod.rating.rate}
          <span className="text-gray-400 ml-2">{prod.rating.count}</span>
        </p>
      )}
    </Link>
  )
}

export default ProductCard