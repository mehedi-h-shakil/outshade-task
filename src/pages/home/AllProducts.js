import { useQuery } from "@tanstack/react-query";
import React from "react";
import SmallSpinner from "../../components/Spinner/SmallSpinner";

const AllProducts = () => {
  const { data: products, loading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://backend-ecru-tau.vercel.app/allProducts"
      );
      const data = await res.json();
      return data;
    },
  });
  if (loading) {
    <SmallSpinner />;
  }
  return (
    <div>
      <h2 className="text-4xl text-center font-bold py-10">All Products</h2>
      <div className="overflow-x-auto">
        <table className="table w-2/3 mx-auto">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product?._id}>
                <th>{i + 1}</th>
                <td>{product?.productName}</td>
                <td>
                  <img src={product?.image} className="w-20" alt="" />
                </td>
                <td>{product?.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
