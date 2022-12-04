import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  const { data: categories, refetch } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("https://backend-ecru-tau.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (name) => {
    fetch("https://backend-ecru-tau.vercel.app/categories", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
      });
  };

  const handleUpdate = (id) => {};

  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center py-10">Category</h2>

      <div className="overflow-x-auto">
        <table className="table w-full text-center">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Edit</th>
              <th>Open</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {categories?.map((ct, i) => (
              <tr key={ct?._id}>
                <th>{i + 1}</th>
                <td>{ct?.name}</td>
                <td>
                  <button onClick={() => handleUpdate(ct?._id)}>Edit</button>
                </td>

                <td>
                  <Link to={`/productsByCategory/${ct?.name}`} className=" ">
                    Open Category
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(ct?.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
