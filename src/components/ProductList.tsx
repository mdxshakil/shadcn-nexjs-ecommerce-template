import { Product } from "@/types/types";
import React, { Key } from "react";
import ProductCard from "./ui/ProductCard";

interface ProductListProps {
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item: Product) => (
          <ProductCard key={item.id as Key} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
