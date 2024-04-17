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
  const [username, setUserName] = useState("");
  const [planType, setPlanType] = useState("");

  console.log("planType", planType);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
        setUserName(user.displayName);
        const userRef = firebase.database().ref("users/" + user.uid);
        userRef.on("value", (snapshot) => {
          const user = snapshot.val();
          if (user) {
            setPlanType(user.subscription.planType || "");
          }
        });
      } else {
        setUserId("");
        setUserName("");
      }
    });
  }, [userId]);

  const checkout = (plan) => {
    fetch("http://localhost:5000/api/v1/create-subscription-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        plan: plan,
        customerId: userId,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        console.log(res);

        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ session }) => {
        window.location = session.url; // redirect to stripe payment URL
      })
      .catch((e) => console.error("Error:", e));
  };

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
              <button
                onClick={() => firebase.auth().signOut()}
                className="bg-white px-4 py-2 w-auto rounded-lg text-base uppercase font-semibold text-[#4f7cff]"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="z-50 grid w-9/12 grid-cols-1 gap-5 mx-auto my-20 lg:grid-cols-3 sm:grid-cols-2 place-items-center">
        {data.map((item, idx) => (
          <div
            key={idx}
            className={`bg-white px-6 py-8 rounded-xl text-[#4f7cff] w-full mx-auto grid place-items-center ${
              planType === item.title.toLowerCase() &&
              "border-[16px] border-green-600"
            }`}
          >
            <img
              src={item.src}
              alt={`${item.src} plan`}
              width={200}
              height={200}
              className="h-40"
            />
            <div className="py-4 text-4xl font-bold text-center text-slate-700">
              {item.title}
            </div>
            <p className="px-6 text-xs text-center lg:text-sm text-slate-500">
              Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor
              ipsum dolor ipsum dolor ipsum dolor ipsum dolor
            </p>
            <div className="py-4 text-4xl font-bold text-center">
              ₹{item.price}
            </div>
            <div className="flex items-center justify-center mx-auto my-3">
              {planType === item.title.toLowerCase() ? (
                <button className="p-2 text-base font-bold text-white uppercase bg-green-600 rounded-md w-max">
                  Subscribed
                </button>
              ) : (
                <button
                  onClick={() => checkout(Number(item.price))}
                  className="bg-[#3d5fc4] text-white rounded-md text-base uppercase w-24 py-2 font-bold"
                >
                  Start
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
