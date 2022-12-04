import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../contexts/AuthProvider";
import SmallSpinner from "./Spinner/SmallSpinner";

const AddAProduct = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const [loading, setLoading] = useState(false);

  const date = new Date();

  const onSubmit = (data) => {
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);

    const url = process.env.REACT_APP_IMGBB_KEY;
    setLoading(true);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const product = {
          productName: data.name,
          image: imageData.data.display_url,
          category: data.categoryName,
          price: data.price,
          description: data.description,
          date: date,
          sellerEmail: user?.email,
          sellerName: user?.displayName,
        };
        console.log(product);
        saveProduct(product);
      });
  };

  const saveProduct = (product) => {
    // console.log(product);
    fetch("http://localhost:5000/addProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // toast.success("Product added successfully.");
        // navigate("/dashboard/myProducts");
        setLoading(false);
      });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Add Product</h2>
      <div className="w-1/2 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body w-96 lg:w-[800px]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input
                {...register("categoryName")}
                type="text"
                name="categoryName"
                required
                placeholder="Category Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                {...register("name")}
                type="text"
                name="name"
                required
                placeholder="Product Name"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price")}
              type="text"
              required
              name="price"
              placeholder="Enter Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              {...register("image")}
              type="file"
              name="image"
              required
              accept="image/*"
              placeholder="Mobile Photo"
              className="file-input file-input-bordered file-input-success w-full "
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description")}
              type="text"
              name="description"
              required
              placeholder="Description"
              className="textarea textarea-bordered"
            />
          </div>

          <div className="mt-2 flex justify-center">
            <button className="btn btn-success w-full">
              {loading ? <SmallSpinner /> : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAProduct;
