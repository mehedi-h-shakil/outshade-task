import React from "react";
import { useForm } from "react-hook-form";

const ProductModal = ({ product }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const image = data.image[0];

    const formData = new FormData();
    formData.append("image", image);

    const url = process.env.REACT_APP_IMGBB_KEY;

    if (image) {
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imageData) => {
          const product = {
            productId: data.productId,
            productName: data.name,
            image: imageData.data.display_url,
            category: data.category,
            price: data.price,
            description: data.description,
          };
          // console.log(product);
        });
    }

    const product = {
      productId: data.productId,
      productName: data.name,
      category: data.category,
      price: data.price,
      description: data.description,
    };
  };
  // const handleUpdate = (id) => {
  //   const productId = id;
  //   console.log(productId);
  //   // fetch("https://backend-ecru-tau.vercel.app/productUpdate", {
  //   //   method: "PUT",
  //   //   headers: {
  //   //     "content-type": "application/json",
  //   //   },
  //   //   body: JSON.stringify({ productId }),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((data) => console.log(data));
  // };
  // console.log(product);

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label
            htmlFor="my-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Update Product</h3>
          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product ID</span>
                  </label>
                  <input
                    {...register("productId")}
                    type="text"
                    name="productId"
                    disabled
                    defaultValue={product?._id}
                    placeholder="Product Id"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Category Name</span>
                  </label>
                  <input
                    {...register("categoryName")}
                    type="text"
                    name="categoryName"
                    defaultValue={product?.category}
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
                    defaultValue={product?.productName}
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
                  defaultValue={product?.price}
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
                  defaultValue={product?.description}
                  placeholder="Description"
                  className="textarea textarea-bordered"
                />
              </div>
              <div className="modal-action">
                <button htmlFor="my-modal" className="btn" type="submit">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
