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
