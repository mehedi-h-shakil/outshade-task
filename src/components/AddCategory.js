import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SmallSpinner from "./Spinner/SmallSpinner";

const AddCategory = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    const name = {
      name: data.category,
    };
    fetch("https://backend-ecru-tau.vercel.app/addCategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(name),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Add Category</h2>
      <div className="w-1/2 mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body w-96 lg:w-[800px]"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category Name</span>
            </label>
            <input
              {...register("category")}
              type="text"
              name="category"
              required
              placeholder="Category Name"
              className="input input-bordered"
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

export default AddCategory;
