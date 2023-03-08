"use client";
import { filteredProductsAtom, resetSearchAtom } from "@/atoms/productsAtoms";

import { useAtom, useSetAtom } from "jotai";
import Product from "./product-item";

const Products = () => {
  
  const [products, setProducts] = useAtom(filteredProductsAtom);
  const resetSearch = useSetAtom(resetSearchAtom)
  return (
    <div className="grid grid-cols-1 gap-5 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.length > 0 ? (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full">
          <div className="w-full mb-2 text-sm text-center">
            There is no match.
          </div>
          <button
            onClick={resetSearch}
            className="w-full px-4 py-3 rounded-md bg-neutral-100 text-neutral-500"
          >
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
