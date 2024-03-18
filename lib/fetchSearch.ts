export const allCategories = () => {
  const categories = fetch('https://fakestoreapi.com/products/categories')
              .then(res=>res.json())
  return categories;
}

export const fetchProductByCat = (category: string) => {
  const products = fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())

  return products;
}
