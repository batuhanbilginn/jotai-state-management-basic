import { DUMMY_PRODUCTS, ProductI } from "@/dummy-products";
import { atom } from "jotai";

export const productsAtoms = atom<ProductI[]>(DUMMY_PRODUCTS);
export const searchAtom = atom("");
export const resetSearchAtom = atom(null, (_get, set) => {
  set(searchAtom, "");
});
export const filteredProductsAtom = atom((get) => {
  const search = get(searchAtom);
  const products = get(productsAtoms);
  if (!search) return products;
  return products.filter((product) => product.title.includes(search));
});

export const informationBarAtom = atom((get) => {
  const totalProductsNumber = get(productsAtoms).length;
  const filteredProductsNumber = get(filteredProductsAtom).length;
  return {
    totalProductsNumber,
    filteredProductsNumber,
  };
});

export const sortAtom = atom("asc");

export const sortedProductsAtom = atom((get) => {
  const sort = get(sortAtom);
  const products = get(filteredProductsAtom);
  if (sort === "asc") {
    return [...products].sort((a, b) => a.price - b.price);
  }
  return [...products].sort((a, b) => b.price - a.price);
});
