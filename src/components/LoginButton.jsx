import React from "react";

const Login = ({ handleAuth }) => {
  return (
    <button
      className="px-5 py-2 w-full bg-black border border-stone-50 uppercase text-base hover:bg-white font-bold hover:text-black"
      onClick={handleAuth}
    >
      Login
    </button>
  );
};

export default Login;
