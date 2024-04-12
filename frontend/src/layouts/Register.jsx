import React from "react";

const Register = () => {
  return (
    <div className="flex items-center w-full mx-auto min-h-screen diagonal-background">
      <form className="grid place-items-center shadow-2xl rounded-3xl lg:w-5/12 sm:w-9/12 w-11/12 mx-auto text-[#4f7cff] bg-white">
        <div className="pt-16 pb-4 text-3xl font-bold capitalize">
          Register to serVices
        </div>
        {/* Full Name */}
        <div className="w-full flex flex-col px-14 py-8">
          <label>Fullname</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-lg outline-none"
            placeholder="Your Fullname"
            required
          />
        </div>
        {/* Email */}
        <div className="w-full flex flex-col px-14 py-8">
          <label>Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-lg outline-none"
            placeholder="example@123.com"
            required
          />
        </div>
        {/* Password */}
        <div className="w-full flex flex-col px-14 py-8">
          <label>Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg p-3 mt-1 text-lg outline-none"
            placeholder="******"
            required
          />
        </div>
        <div className="w-full flex justify-between items-center px-14 pb-8 text-[#3d5fc4]">
          <div>Already have an account?</div>
          <div>
            <a href="/login" className="hover:underline">
              Login Now
            </a>
          </div>
        </div>
        <div className="mx-auto flex justify-center items-center pt-6 pb-16">
          <button
            type="submit"
            className="bg-[#3d5fc4] text-white rounded-md uppercase w-24 py-2 text-base"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
