export const productDetail = (id : number) => {
  const product = fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
  
  return product;
}