import { Product } from "@/types/types";
import Link from "next/link";
import React from "react";

interface ProductCard {
  data: Product;
}

const ProductCard: React.FC<ProductCard> = ({ data }) => {
  return (
    <Link
      href={"/"}
      className="outline-0 focus:ring-2 hover:ring-2 ring-primary transition duration-300 rounded-lg"
    ></Link>
  );
};

export default ProductCard;
