import React, { useEffect, useState } from "react";
import Basic from "../assets/basic.svg";
import Business from "../assets/business.svg";
import Pro from "../assets/pro.svg";
import firebase from "../firebase/firebaseConfig";

const data = [
  {
    id: 1,
    src: Basic,
    title: "Basic",
    price: "99",
  },
  {
    id: 2,
    src: Pro,
    title: "Pro",
    price: "499",
  },
  {
    id: 3,
    src: Business,
    title: "Business",
    price: "999",
  },
];

const Home = () => {
  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    // To check if user is logged in
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        setUsername(user.displayName);
      } else {
        setUserId("");
        setUsername("");
      }
    });
  }, [userId]);

  return (
    <div className="flex flex-col items-center w-full min-h-screen mx-auto overflow-x-hidden diagonal-background ">
      <div className="flex justify-between items-center w-full px-6 h-20 bg-[#0000012]">
        <div className="text-4xl font-bold text-white">serVices</div>
        <div className="flex items-center justify-center gap-2">
          {!userId ? (
            <a
              href="/login"
              className="bg-white px-4 py-2 uppercase w-auto rounded-lg text-xl font-semibold text-[#4f7cff]"
            >
              Login
            </a>
          ) : (
            <div className="flex items-center justify-center space-x-4">
              <span className="text-xl text-white">{username}</span>
              <button className="bg-white px-4 py-2 w-auto rounded-lg text-base uppercase font-semibold text-[#4f7cff]">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 z-50 place-items-center w-9/12 mx-auto my-20">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="bg-white px-6 py-8 rounded-xl text-[#4f7cff] w-full mx-auto grid place-items-center"
          >
            <img
              src={item.src}
              alt={`${item.src} plan`}
              width={200}
              height={200}
              className="h-40"
            />
            <div className="text-4xl text-slate-700 text-center py-4 font-bold">
              {item.title}
            </div>
            <p className="lg:text-sm text-xs text-center px-6 text-slate-500">
              Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor
              ipsum dolor ipsum dolor ipsum dolor ipsum dolor
            </p>
            <div className="text-4xl text-center font-bold py-4">
              ₹{item.price}
            </div>
            <div className="mx-auto flex justify-center items-center my-3">
              <button className="bg-[#3d5fc4] text-white rounded-md text-base uppercase w-24 py-2 font-bold">
                Start
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
