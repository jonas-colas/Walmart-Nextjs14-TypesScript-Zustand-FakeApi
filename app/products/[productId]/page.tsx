import AddToCart from "@/components/AddToCart";
import { productDetail } from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";


type Params = {
  productId: number;
}

// const ProductDetails = async ({ params }: { params: {productId: string}}) => {
const ProductDetails = async ({ params }: {params: Params}) => {
  const prod = await productDetail(params.productId);
  if(!prod) return notFound();

  return (
    <div className="p-4 lg:p-10 flex flex-col lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4">
        <Image 
          src={prod.image}
          alt={prod.title}
          width={500}
          height={500}
          className="border rounded-sm"
          />
      </div>
      <div className="flex-1 border rounded-md w-full p-5 space-y-5">
        <h1 className="text-3xl font-bold">{prod.title}</h1>
        <div className="py-5">{prod.description}</div>
        {prod.rating && <p className="text-yellow-500 text-sm">
            {prod.rating.rate} *
            <span className="text-gray-400 ml-2">{prod.rating.count} (reviews)</span>
          </p>
        }
        <p className="text-2xl font-bold mt-2">
          ${prod.price}
        </p>

        <AddToCart product={prod} />
      </div>
    </div>

  )
}

export default ProductDetails