import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductTable from "./ProductTable";

const ProductByCategory = () => {
  const products = useLoaderData();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Products By Category</h2>
      <ProductTable products={products} setLoading={setLoading}></ProductTable>
    </div>
  );
};

export default ProductByCategory;
