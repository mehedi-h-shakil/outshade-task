import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/banner.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signup(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-screen mt-10 text-center">
      <div>
        <div className="flex justify-center items-center">
          <img src={banner} alt="" />
        </div>
      </div>
      <div className=" flex justify-center items-center mb-10">
        <div className="shadow-xl h-[630px] w-[350px] lg:w-[516px]">
          <h2 className="text-xl font-semibold mt-20">Sign Up Form</h2>
          <form onSubmit={handleSubmit} className="mt-20">
            <label>
              <input
                type="text"
                name="email"
                required
                placeholder="Write Your Email"
                className="border-b-2 outline-0 w-[300px] lg:w-[370px] mb-20"
              />
            </label>
            <label>
              <input
                type="password"
                name="password"
                required
                placeholder="Write Your Password"
                className="border-b-2 outline-0 w-[300px] lg:w-[370px]"
              />
            </label>
            <div className="mt-20">
              <button
                type="submit"
                className="btn border-[#1678CB] bg-[#1678CB] hover:bg-[#1678CB] px-7"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-24 text-right mr-16">
            <p>
              <span className="text-sm mr-2">Already have an account?</span>
              <span className="text-blue-500 font-semibold underline">
                <Link to="/login">LOGIN HERE</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
