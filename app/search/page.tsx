import ProductCard from "@/components/Product";
import { fetchProductByCat } from "@/lib/fetchSearch";


type Props = {
  searchParams: {
    q: string;
  };
};

const SearchPage = async ({ searchParams: {q} }: Props) => {
  const results: any = await fetchProductByCat(q);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
      <h2 className="mb-5 text-gray-400">
        total ({10} results)
      </h2>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        { results.map(p => (
          <li key={p.id}>
            <ProductCard prod={p} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchPage