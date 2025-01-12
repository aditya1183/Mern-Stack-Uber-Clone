import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className=" bg-cover bg-[url(https://media.istockphoto.com/id/1354259292/photo/male-driver-of-a-carpool-service.jpg?s=1024x1024&w=is&k=20&c=ddYi3nj73syWG91g2-8xzDEPcKA34hP9TMelC7y6Lpw=)] h-screen  pt-8 flex justify-between flex-col w-full bg-red-400">
        <img
          className="w-16  ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3  rounded mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
