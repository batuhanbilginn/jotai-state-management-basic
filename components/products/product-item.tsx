import { ProductI } from "@/dummy-products";

const Product = ({ product }: { product: ProductI }) => {
  return (
    <div className="border border-neutral-200 rounded-md py-3 px-4">
      <div className="flex items-center gap-2 mb-4">
        <div className="text-xs font-light bg-neutral-900 text-neutral-100 rounded-md py-1 px-2 max-w-fit">
          {product.price}$
        </div>
        <div className="text-xs font-light bg-neutral-100 rounded-md py-1 px-2 max-w-fit">
          {product.category}
        </div>
      </div>
      <h2 className="font-medium truncate text-lg">{product.title}</h2>
      <p className="truncate text-neutral-600">{product.description}</p>
    </div>
  );
};

export default Product;
