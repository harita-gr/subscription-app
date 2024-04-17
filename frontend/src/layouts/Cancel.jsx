import React from "react";
import cancel from "../assets/cancel.png";

const Cancel = () => {
  return (
    <>
      <div className="m-0 p-0 bg-[#FDFDFD] min-h-screen">
        <div className="w-full min-h-[80vh] flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center mx-auto my-10 text-2xl text-red-600">
            <img
              src={cancel}
              alt="cancel"
              width={220}
              height={220}
              className="mix-blend-multiply"
            />
            <h3 className="pt-20 text-4xl font-bold text-center text-slate-700">
              Something Went Wrong
            </h3>
            <a
              href="/"
              className="w-auto px-8 py-3 my-16 text-xl text-white uppercase rounded bg-slate-900"
            >
              Go To Homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cancel;
