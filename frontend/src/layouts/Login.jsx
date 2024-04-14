import React, { useState } from "react";
import firebase from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Values are:", email, password);

      if (!email || !password) {
        console.log("Please fill all the fields");
        return;
      }

      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (res.user) {
        // Reset the useStates
        setEmail("");
        setPassword("");

        await navigate("/");
      }
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <div className="flex items-center w-full min-h-screen mx-auto diagonal-background">
      <form
        onSubmit={handleSubmit}
        className="grid place-items-center shadow-2xl rounded-3xl lg:w-5/12 sm:w-9/12 w-11/12 mx-auto text-[#4f7cff] bg-white"
      >
        <div className="pt-16 pb-4 text-3xl font-bold capitalize">
          Login to serVices
        </div>
        {/* Email */}
        <div className="flex flex-col w-full py-8 px-14">
          <label>Email</label>
          <input
            type="email"
            className="w-full p-3 mt-1 text-lg border border-gray-300 rounded-lg outline-none"
            placeholder="example@123.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* Password */}
        <div className="flex flex-col w-full py-8 px-14">
          <label>Password</label>
          <input
            type="password"
            className="w-full p-3 mt-1 text-lg border border-gray-300 rounded-lg outline-none"
            placeholder="******"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-between items-center px-14 pb-8 text-[#3d5fc4]">
          <div>Don't have an account?</div>
          <div>
            <a href="/register" className="hover:underline">
              Register Now
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center pt-6 pb-16 mx-auto">
          <button
            type="submit"
            className="bg-[#3d5fc4] text-white rounded-md uppercase w-24 py-2 text-base"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
