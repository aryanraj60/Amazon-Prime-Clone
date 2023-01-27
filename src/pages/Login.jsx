import React from "react";
import primeLogo from "../assests/prime-logo.png";
import bgImg from "../assests/prime-login-bg.jpeg";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col h-full w-full py-20 px-10 justify-center items-center relative">
        <div
          className="h-full absolute top-0 right-0 left-0 -z-10"
          style={{
            backgroundImage: `url(${bgImg})`,
            opacity: 0.3,
          }}
        ></div>
        <div className="max-w-3xl flex justify-center items-center flex-col">
          <div className="py-3 max-w-xs md:max-w-md">
            <img src={primeLogo} className="w-full m-auto" />
          </div>
          <button className="bg-blue-700 max-w-lg px-5 py-4 w-full uppercase text-lg md:text-2xl font-semibold hover:bg-black my-3">
            Join Amazon Prime
          </button>
          <p className="py-2 font-light max-w-lg text-base text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            libero ea cupiditate enim voluptatem dolorum, officia dolore quaerat
            est praesentium optio cumque, laudantium ullam culpa et doloribus
            magni? Quas, maxime!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
