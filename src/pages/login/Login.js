import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import banner from "../../assets/banner.png";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-screen mt-10 text-center">
      <div>
        <div className="h-full flex justify-center items-center">
          <img src={banner} className="w-full" alt="" />
        </div>
      </div>
      <div className=" flex justify-center items-center mb-10">
        <div className="shadow-xl h-[630px] w-[350px] lg:w-[516px]">
          <h2 className="text-xl font-semibold mt-20">Log in Form</h2>
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
            <label
              htmlFor=""
              className="block mt-2 text-start text-xs ml-20 text-blue-500 underline"
            >
              <Link to="/forgetPassword">Forget Password?</Link>
            </label>
            <div className="mt-20">
              <button
                type="submit"
                className="btn border-[#1678CB] bg-[#1678CB] hover:bg-[#1678CB] px-7"
              >
                Log In
              </button>
            </div>
          </form>
          <div className="mt-24 text-right mr-16">
            <p>
              <span className="text-sm mr-2">Don't have an account?</span>
              <span className="text-blue-500 font-semibold underline">
                <Link to="/signup">SIGNUP HERE</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
