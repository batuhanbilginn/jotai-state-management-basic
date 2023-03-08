import { DUMMY_PRODUCTS, ProductI } from "@/dummy-products";
import { atom } from "jotai";

/* const productsAtom = atom<ProductI[]>(DUMMY_PRODUCTS);
export const searchAtom = atom("");
export const resetSearchAtom = atom(null, (get, set) => {
  set(searchAtom, "");
});
const filteredProductsAtom = atom((get) => {
  const products = get(productsAtom);
  const search = get(searchAtom);
  if (!search) return products;
  return products.filter((product) => product.title.includes(search));
});
export const sortAtom = atom<"asc" | "desc">("asc");

export const resultCountAtom = atom((get) => {
  const products = get(productsAtom);
  const results = get(filteredProductsAtom);
  return {
    total: products.length,
    results: results.length,
  };
});

export const sortedProductsAtom = atom((get) => {
  const products = get(filteredProductsAtom);
  const sort = get(sortAtom);
  if (sort === "asc") {
    return [...products].sort((a, b) => a.price - b.price);
  }

  return [...products].sort((a, b) => b.price - a.price);
}); */

/* With Jotai, state is broken down into individual atoms, 
which are combined to create more complex stateful values. 
This makes it easier to reason about state changes and avoid the 
pitfalls of traditional state management solutions.  */
