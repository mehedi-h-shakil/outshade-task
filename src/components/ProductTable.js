import React from "react";
import ProductModal from "./ProductModal";

const ProductTable = ({ products, setLoading }) => {
  const handleDelete = (id) => {
    setLoading(true);
    const productId = id;
    fetch("http://localhost:5000/productDelete", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ productId }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      });
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
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
                <td>
                  <label htmlFor="my-modal" className="btn">
                    Update
                  </label>
                  <ProductModal product={product} />
                </td>
                <td>
                  <button onClick={() => handleDelete(product?._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
