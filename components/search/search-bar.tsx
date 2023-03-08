"use client";

import { searchAtom } from "@/atoms/productsAtoms";
import { useAtom } from "jotai";

const SearchBar = () => {
  const sortHandler = () => {};
  const [searchTerm, setSearchTerm] = useAtom(searchAtom);

  return (
    <>
      <div className="overflow-hidden border rounded-md border-neutral-200 focus-within:outline outline-neutral-900">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-4 bg-transparent outline-none"
          placeholder="Search products..."
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        {/* Total Products */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs">
            <div className="font-medium">Total Products:</div>
            <div>{30}</div>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <div className="font-medium">Products Found:</div>
            <div>{30}</div>
          </div>
        </div>
        {/* Sort By Price Button */}
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              onChange={sortHandler}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Sort by Price: Low to High
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
